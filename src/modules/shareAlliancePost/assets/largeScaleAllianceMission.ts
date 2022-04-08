import {
    addHoursToNow,
    createIcon,
    dateToTime,
    getCityFromAddress,
    getDateFromToday,
    getTimeReplacers,
    removeZipFromCity,
    sendReply,
} from './util';

import type { Message } from './missionWindow';
import type { Mission } from 'typings/Mission';
import type { ModuleMainFunction } from 'typings/Module';

const getModifiedMessage = (
    raw: string,
    LSSM: Vue,
    mission: HTMLDivElement,
    missionId: number | string,
    missionSpecs: Mission
) => {
    const address =
        mission
            .querySelector<HTMLSpanElement>(`#mission_address_${missionId}`)
            ?.textContent?.trim() ?? '–';
    const city = getCityFromAddress(address);
    const cityWithoutZip = removeZipFromCity(city);
    const remaining =
        mission
            .querySelector<HTMLDivElement>(`#mission_missing_${missionId}`)
            ?.textContent?.trim()
            ?.replace(/^.*?:/u, '')
            .trim() ?? '–';

    const replacements: Record<string, string> = {
        credits: missionSpecs.average_credits?.toLocaleString() ?? '–',
        patients: (
            (mission.querySelector('[id^="mission_patients_"] [id^="patient_"]')
                ? mission.querySelectorAll('.patient_progress').length
                : mission
                      .querySelector<HTMLDivElement>(
                          '[id^="mission_patient_summary_"]'
                      )
                      ?.style.getPropertyValue('display') !== 'none'
                ? LSSM.$utils.getNumberFromText(
                      mission.querySelector(
                          '.mission_list_patient_icon + strong'
                      )?.textContent ?? '0'
                  )
                : 0) || '–'
        ).toLocaleString(),
        remaining,
        remainingSpecial: remaining,
        address,
        city,
        cityWithoutZip,
        beginAt: dateToTime(
            addHoursToNow(
                parseInt(
                    mission
                        .querySelector<HTMLDivElement>(
                            `#mission_overview_countdown_${missionId}`
                        )
                        ?.getAttribute('timeleft') ?? '0'
                ) /
                    1000 /
                    60 /
                    60
            )
        ),
        name:
            missionSpecs?.name ??
            Array.from(
                mission.querySelector<HTMLAnchorElement>(
                    `#mission_caption_${missionId}`
                )?.childNodes ?? []
            )
                .find(
                    n => n.nodeType === Node.TEXT_NODE && n.textContent?.trim()
                )
                ?.textContent?.replace(/,$/u, '')
                .trim() ??
            '',
        today: getDateFromToday(),
        tomorrow: getDateFromToday(1),
    };

    let modifiedMessage = raw;
    Object.entries(replacements).forEach(
        ([variable, value]) =>
            (modifiedMessage = modifiedMessage.replace(
                new RegExp(`{{${variable}}}`, 'g'),
                value
            ))
    );
    Object.entries(getTimeReplacers()).forEach(
        ([regex, replacer]) =>
            (modifiedMessage = modifiedMessage.replace(
                new RegExp(
                    `{{${regex.replace(/^\/|\/[ADJUgimux]*$/gu, '')}}}`,
                    'g'
                ),
                replacer
            ))
    );
    return modifiedMessage;
};

const createDropdownElement = <I extends 'comment-slash' | 'comment'>(
    content: string,
    icon?: I
) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.style.setProperty('margin', '0');
    a.style.setProperty('cursor', 'pointer');
    a.textContent = content;
    if (icon) {
        const iconEl = createIcon(icon, 'fas', 'fa-fw', 'pull-right');
        iconEl.style.setProperty('margin-right', '7px');
        a.append(iconEl);
    }
    li.append(a);
    return li;
};

export default async ({
    LSSM,
    getSetting,
    $m,
}: Parameters<ModuleMainFunction>[0]) => {
    const messages = (
        await getSetting<{ value: Message[]; enabled: boolean }>('messages')
    ).value;
    const authToken =
        document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')
            ?.content ?? '';

    let replyMessage = '';
    let postInChat = false;

    let isLSAMenu = false;
    let replyInProgress = false;

    const observer = new MutationObserver(mutations =>
        mutations.forEach(mutation => {
            const form = (
                mutation.target as HTMLElement
            ).querySelector<HTMLFormElement>(
                '#new_mission_position[action="/missionAllianceCreate"]'
            );
            if (!form) {
                isLSAMenu = false;
                const successBtn = (
                    mutation.target as HTMLElement
                ).querySelector<HTMLAnchorElement>(
                    '.alert.alert-success a[href^="/missions/"]'
                );
                if (successBtn && replyMessage && !replyInProgress) {
                    const missionId =
                        successBtn
                            .getAttribute('href')
                            ?.match(/(?<=\/missions\/)\d+(?=\/?$)/u)?.[0] ?? -1;
                    const missionElement =
                        document.querySelector<HTMLDivElement>(
                            `#mission_${missionId}`
                        );
                    if (!missionElement) return;
                    const missionsById: Record<string, Mission> =
                        LSSM.$store.getters['api/missionsById'];
                    replyInProgress = true;
                    sendReply(
                        LSSM,
                        missionId,
                        getModifiedMessage(
                            replyMessage,
                            LSSM,
                            missionElement,
                            missionId,
                            missionsById[
                                missionElement.getAttribute(
                                    'mission_type_id'
                                ) ?? '-1'
                            ]
                        ),
                        postInChat,
                        authToken
                    ).then(() => {
                        replyMessage = '';
                        replyInProgress = false;
                    });
                }

                return;
            }
            if (isLSAMenu) return;
            isLSAMenu = true;

            const btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-group', 'pull-right');

            const selectorBtn = document.createElement('button');
            selectorBtn.classList.add(
                'btn',
                'btn-xs',
                'btn-default',
                'dropdown-toggle'
            );
            selectorBtn.dataset.toggle = 'dropdown';
            const selectSpan = document.createElement('span');
            const msgIcon = document.createElement('i');
            msgIcon.classList.add('fas', 'fa-comment-dots');
            msgIcon.style.setProperty('margin-left', '5px');
            msgIcon.style.setProperty('margin-right', '5px');
            const caret = document.createElement('span');
            caret.classList.add('caret');
            selectorBtn.append(selectSpan, msgIcon, caret);

            const dropdownMenu = document.createElement('ul');
            dropdownMenu.classList.add('dropdown-menu');

            const noMessageLi = createDropdownElement(
                $m('noMessage').toString()
            );
            noMessageLi.dataset.message = '-1';

            const separatorLi = document.createElement('li');
            separatorLi.classList.add('divider');
            separatorLi.dataset.message = '-1';

            dropdownMenu.append(noMessageLi, separatorLi);

            messages.forEach(message => {
                const li = createDropdownElement(
                    message.name,
                    message.postInChat ? 'comment' : 'comment-slash'
                );
                li.dataset.message = message.message;
                li.dataset.post = message.postInChat.toString();
                li.setAttribute('title', message.message);
                dropdownMenu.append(li);
            });

            btnGroup.append(selectorBtn, dropdownMenu);

            dropdownMenu.addEventListener('click', e => {
                const target = e.target;
                if (!(target instanceof HTMLElement)) return;
                const li = target.closest('li');
                if (li) {
                    selectSpan.textContent = li.textContent ?? '';
                    replyMessage = li.dataset.message ?? '';
                    postInChat = li.dataset.post === 'true';
                }
            });

            const clearfix = document.createElement('div');
            clearfix.classList.add('clearfix');

            form.before(btnGroup, clearfix);
        })
    );

    const buildingsElement =
        document.querySelector<HTMLDivElement>('#buildings');
    if (buildingsElement)
        observer.observe(buildingsElement, { childList: true });
};
