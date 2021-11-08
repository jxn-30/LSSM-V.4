import { Mission } from 'typings/Mission';
import { VueConstructor } from 'vue/types/vue';

export default (Vue: VueConstructor): void => {
    Vue.prototype.$vue = Vue;
    Vue.prototype.$utils = {
        urlRegex: /(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?/gi,
        escapeRegex(s: string) {
            return s.replace(/[[\\^$.|?*+()]/g, '\\$&');
        },
        async getMissionOptions(LSSM: Vue, MODULE_ID: string, reason: string) {
            const missions = (await LSSM.$store.dispatch('api/getMissions', {
                force: false,
                feature: `${MODULE_ID}-${reason}`,
            })) as Mission[];
            const missionIds = [] as string[];
            const missionNames = [] as string[];
            const idLengths = { id: 0, variant: 0 };
            missions
                .map(({ id }) => `${id}-`.split('-').map(i => i.length))
                .forEach(([id, variant]) => {
                    idLengths.id = Math.max(idLengths.id, id);
                    idLengths.variant = Math.max(idLengths.variant, variant);
                });

            const fill0Left = (string: string, length: number): string => {
                let longString = string;
                while (longString.length < length)
                    longString = `0${longString}`;
                return longString;
            };

            const idToLength = (id: string): string => {
                if (!id.match(/-/)) return fill0Left(id, idLengths.id);
                const [base, variant] = id.split('-');
                return `${fill0Left(base, idLengths.id)}-${fill0Left(
                    variant,
                    idLengths.variant
                )}`;
            };

            missions.forEach(({ id, name }) => {
                missionIds.push(id);
                missionNames.push(`${idToLength(id.toString())}: ${name}`);
            });

            return { missionIds, missionNames };
        },
        getNumberFromText<Multiple extends boolean = false>(
            text: string,
            allNumbers: Multiple = false,
            fallback = -1
        ): Multiple extends true ? number[] : number {
            const regex = new RegExp(
                /-?\d{1,3}(?:(?:[,.]|\s)\d{3})*/,
                allNumbers ? 'g' : ''
            );
            return allNumbers
                ? text
                      .match(regex)
                      ?.map(match =>
                          parseInt(
                              match.replace(/[,.]|\s/g, '') ??
                                  fallback.toString()
                          )
                      ) ?? []
                : parseInt(
                      text.match(regex)?.[0]?.replace(/[,.]|\s/g, '') ??
                          fallback.toString()
                  );
        },
        getTextNodes(
            root: Node,
            filter?: (node: Node, ...args: unknown[]) => true
        ) {
            const NoneTextParentNodes = [
                'head',
                'meta',
                'title',
                'script',
                'style',
                'link',
                'br',
                'noscript',
                'a',
            ];
            const children = Array.from(root.childNodes);
            const textChildren = children.filter(
                n => n.nodeType === 3 && (!filter || (filter && filter(n)))
            );
            const elementChildren = children.filter(
                n =>
                    n.nodeType === 1 &&
                    !NoneTextParentNodes.includes(
                        (n as Element).tagName.toLowerCase()
                    ) &&
                    (!filter || (filter && filter(n)))
            );
            return [
                ...textChildren,
                ...elementChildren.map(n => this.getTextNodes(n, filter)),
            ].flat();
        },
        highChartsDarkMode: {
            chart: {
                backgroundColor: 'transparent',
                plotBorderColor: '#606063',
            },
            title: {
                style: {
                    color: '#ddd',
                },
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3',
                    },
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3',
                    },
                },
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3',
                    },
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3',
                    },
                },
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85}',
                style: {
                    color: '#F0F0F0',
                },
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3',
                    },
                    marker: {
                        lineColor: '#333',
                    },
                },
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3',
                },
                itemHoverStyle: {
                    color: '#FFF',
                },
                itemHiddenStyle: {
                    color: '#606063',
                },
            },
            credits: {
                style: {
                    color: '#666',
                },
            },
            labels: {
                style: {
                    color: '#707073',
                },
            },
            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3',
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3',
                },
            },
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3}',
        },
    };
};
