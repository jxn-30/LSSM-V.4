import verbandParser from './verbandParser';

import { RedesignParser } from 'typings/modules/Redesign';
import { VerbandWindow } from 'typings/modules/Redesign/Verband';

interface User {
    credits: number;
    name: string;
    id: number;
    icon_src: string;
    caption: string;
    roles: string[];
    discount: number;
    tax: number;
    edit?: {
        kick: boolean;
        admin: boolean;
        coadmin: boolean;
        sprechwunsch_admin: boolean;
        aufsichtsrat: boolean;
        finance: boolean;
        schooling: boolean;
        staff: boolean;
    };
}

export interface VerbandMitgliederWindow extends VerbandWindow {
    users: User[];
    online: boolean;
    lastPage: number;
    edit_caption: boolean;
    edit_discount: boolean;
}

export default <RedesignParser<VerbandMitgliederWindow>>(({
    doc,
    href = '',
    getIdFromEl = () => -1,
    LSSM,
}) => ({
    ...verbandParser({ doc, getIdFromEl }),
    users: Array.from(
        doc.querySelectorAll<HTMLTableRowElement>('table tbody:last-of-type tr')
    ).map(
        user =>
            <User>{
                credits: LSSM.$utils.getNumberFromText(
                    user.children[2]?.textContent?.trim() ?? ''
                ),
                name: user.children[0]?.textContent?.trim() ?? '',
                id: getIdFromEl(
                    user.children[0]?.querySelector<HTMLAnchorElement>('a')
                ),
                icon_src:
                    user.children[0].querySelector<HTMLImageElement>(
                        'img.online_icon'
                    )?.src ?? '/images/user_gray.png',
                caption:
                    user.children[1]
                        .querySelector<HTMLSpanElement>(
                            '.badge[id^="role_caption_"]'
                        )
                        ?.innerText?.trim() ?? '',
                roles:
                    user.children[1]
                        .querySelector<HTMLElement>('small')
                        ?.innerText?.trim()
                        .split(',')
                        .map(r => r.trim())
                        .filter(r => r.length)
                        .sort() ?? [],
                discount: getIdFromEl(
                    user.children[3]?.querySelector<HTMLAnchorElement>(
                        'a.btn-success[href^="/verband/discount"]'
                    )
                ),
                tax: LSSM.$utils.getNumberFromText(
                    user.children[4]?.textContent?.trim() ?? ''
                ),
                edit: user.children[5]?.querySelector<HTMLAnchorElement>(
                    '.btn_edit_rights'
                )
                    ? {
                          kick: !!user.children[5].querySelector<HTMLAnchorElement>(
                              'a[href^="/verband/kick/"]'
                          ),
                          ...Object.fromEntries(
                              [
                                  'admin',
                                  'coadmin',
                                  'sprechwunsch_admin',
                                  'aufsichtsrat',
                                  'finance',
                                  'schooling',
                                  'staff',
                              ].map(role => [
                                  role,
                                  !!user.children[5]
                                      .querySelector<HTMLAnchorElement>(
                                          `a[href^="/verband/${role}/"]`
                                      )
                                      ?.classList.contains('btn-danger'),
                              ])
                          ),
                      }
                    : undefined,
            }
    ),
    online: new URL(href, window.location.origin).searchParams.has('online'),
    lastPage: parseInt(
        doc
            .querySelector<HTMLAnchorElement>(
                '.pagination.pagination li:nth-last-of-type(2)'
            )
            ?.textContent?.trim() ?? '1'
    ),
    edit_caption: !!doc.querySelector<HTMLAnchorElement>(
        'a[href^="/verband/rolecaptionForm/"]'
    ),
    edit_discount: !!doc.querySelector<HTMLAnchorElement>(
        'a[href^="/verband/discount/"]'
    ),
}));
