import { profile, level, tierMap } from '../types';

export const fetcher = async (username: string) => {
    try {
        const data = await (
            await fetch(`https://solved.ac/api/v3/user/show?handle=${username}`)
        ).json();

        return data;
    } catch (err) {
        console.error('fetch Error');
    }
};

const tierCalculate = async (tier: number) => {
    try {
        const quotient: number = await ((tier - 1) / 5);
        const remainder: number = await ((tier - 1) % 5); // 5가 0, 4가 1, 3이 2, 2가 3 1이 4

        const retTier: level = tierMap[quotient];
        const detTier: number = 5 - remainder;

        return {
            tier: retTier,
            detTier: detTier
        };
    } catch (err) {
        console.log('calculating error');
        return {
            tier: tierMap[7],
            detTier: 5
        };
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
