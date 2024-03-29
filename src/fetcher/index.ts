import fetch from 'isomorphic-fetch';
import { profile } from '../types';

const fetcher = async (username: string | string[]) => {
    try {
        const data = await fetch(`https://solved.ac/api/v3/user/show?handle=${username}`);
        const result = (await data.json())as any;

        return result;
    } catch (err) {
        console.log(err);
        console.error('fetch Error');
    }
};
//
export default fetcher;
