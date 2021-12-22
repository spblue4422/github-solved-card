import { Card } from 'src/card';
import { fetcher } from 'src/fetcher';
import { profile } from 'src/types';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
    const name: string | string[] = req.query['handle']; // spblue4422

    try {
        const width: number = 500;
        const height: number = 150;
        const rawData = await fetcher(name);

        const data: profile = {
            handle: rawData.handle,
            solvedCount: rawData.solvedCount,
            tier: rawData.tier,
            rating: rawData.rating,
            rank: rawData.rank,
            cls: rawData.class
        };

        const newCard = new Card({ width, height, data });

        return res.send(newCard.renderCard());
    } catch (err) {
        console.error(err);
        return res.send('API Error');
    }
};