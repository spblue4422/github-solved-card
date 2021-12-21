import { profile, level, tierMap } from '../types';

export const fetcher = async (username: string | string[]) => {
    try {
        const data = await (
            await fetch(`https://solved.ac/api/v3/user/show?handle=${username}`)
        ).json();

        return data;
    } catch (err) {
        console.error('fetch Error');
    }
};

export const feetcher = async (handle: string) => {
    // const data = await dataFetch(handle);
    // const calc: { tier: level; detTier: number } = await tierCalculate(data.tier);
    // const res: profile = {
    //     handle: data.handle,
    //     solvedCount: data.solvedCount,
    //     tier: calc.tier, //level
    //     detTier: calc.detTier,
    //     rating: data.rating,
    //     rank: data.rank
    // };
    // return res;
};
