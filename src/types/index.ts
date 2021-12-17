export interface profile {
    handle: string;
    solvedCount: number;
    tier: number;
    rating: number;
    rank: number;
}

export type level =
    | 'Bronze'
    | 'Silver'
    | 'Gold'
    | 'Platinum'
    | 'Diamond'
    | 'Ruby'
    | 'Master'
    | 'Undefined';

export const tierMap: Record<number, level> = {
    0: 'Bronze',
    1: 'Silver',
    2: 'Gold',
    3: 'Platinum',
    4: 'Diamond',
    5: 'Ruby',
    6: 'Master',
    7: 'Undefined'
};
