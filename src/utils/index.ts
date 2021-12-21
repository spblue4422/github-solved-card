import { level, tierMap } from '../types';

export const getTier = async (tier: number) => {
    const quotient: number = await ((tier - 1) / 5);
    const remainder: number = await ((tier - 1) % 5); // 5가 0, 4가 1, 3이 2, 2가 3 1이 4

    const tierString: level = tierMap[quotient];
    const tierNumber: number = 5 - remainder;

    return { tierString, tierNumber }; //플래티넘만. 1,2,3,4,5는 굳이 반환 아해도됨.
};
