import Card from '../src/card';
import fetcher from '../src/fetcher';
import { profile } from '../src/types';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
    const name: string | string[] = req.query['handle']; // spblue4422
    // try {
    //     return res.send(name);
    // } catch (err) {
    //     console.log(err);
    // }
    try {
        const width: number = 500;
        const height: number = 150;

        const rawData = await fetcher('spblue4422');

        if (!rawData) throw new Error('no fetch');

        const data: profile = {
            handle: rawData.handle,
            solvedCount: rawData.solvedCount,
            tier: rawData.tier,
            rating: rawData.rating,
            rank: rawData.rank,
            cls: rawData.cls
        };

        const newCard = new Card({ width, height, data });

        return res.send(await newCard.render());
    } catch (err) {
        console.error(err);
        return res.status(404).send('err');
    }
};
