import type config from '../../src/config';

import type { Issue } from './types/issues';

declare module 'vue/types/vue' {
    type MomentShort =
        | 'L'
        | 'l'
        | 'LL'
        | 'll'
        | 'LLL'
        | 'lll'
        | 'LLLL'
        | 'llll'
        | 'LT'
        | 'LTS';

    type MomentVariableCategories =
        | 'ampm'
        | 'dom'
        | 'dow'
        | 'doy'
        | 'hour'
        | 'minute'
        | 'month'
        | 'quarter'
        | 'second'
        | 'week'
        | 'year';

    interface Vue {
        $lang: string;
        $themeConfig: {
            variables: {
                discord: {
                    invite: string;
                    id: string;
                    channels: Record<string, string>; // string because are too big for numbers
                };
                github: string;
                server: string;
                versions: {
                    beta: string;
                    stable: string;
                    short: string;
                };
                browsers: typeof config.browser;
                noMapkitModules: Record<string, { title: string; f: string }[]>;
                bugIssues: Issue[];
                moment: Record<
                    string,
                    {
                        titles: {
                            shorts: Record<
                                'description' | 'example' | 'variable',
                                string
                            >;
                            variables: Record<
                                | MomentVariableCategories
                                | 'category'
                                | 'description'
                                | 'output'
                                | 'variable',
                                string
                            >;
                        };
                        shorts: Record<MomentShort, string>;
                        variables: Record<
                            MomentVariableCategories,
                            Record<string, string>
                        > & { order: MomentVariableCategories[] };
                    }
                >;
                editModuleLinkText: Record<string, string>;
                contributors: {
                    avatar_url: string;
                    contributions: string[];
                    login: string;
                    name: string;
                    profile: string;
                }[];
                contributionTypes: Record<
                    string,
                    {
                        description: string;
                        link: string;
                        symbol: string;
                    }
                >;
            };
        };
    }
}
