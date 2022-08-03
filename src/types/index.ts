export interface profile {
    handle: string;
    solvedCount: number;
    tier: number;
    rating: number;
    rank: number;
    cls: number;
}

//export type level = 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Ruby' | 'Master';

export const tierMap = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby', 'Master']