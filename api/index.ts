import { Card, CardProps } from 'src/card';
import { fetcher } from 'src/fetcher';
import { profile, level } from 'src/types';
import { VercelRequest, VercelRequestQuery, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
    const name: string | string[] = req.query['handle']; // spblue4422

    try {
        const data = await fetcher(name);

        const newCard = new Card(data);

        return res.send(newCard.renderCard());
    } catch (err) {
        console.error(err);
    }
};
