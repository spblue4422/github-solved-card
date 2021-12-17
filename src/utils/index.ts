import { level, tierMap } from '../types';

export const getTier = async (tier: number) => {
    const quotient: number = await ((tier - 1) / 5);
    const remainder: number = await ((tier - 1) % 5); // 5가 0, 4가 1, 3이 2, 2가 3 1이 4

    const retTier: level = tierMap[quotient];
    const detTier: number = 5 - remainder;

    return retTier; //플래티넘만.
};
