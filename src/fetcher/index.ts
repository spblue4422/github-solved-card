import fetch from 'node-fetch';

export const fetcher = async (username: string | string[]) => {
    try {
        const data = (await (
            await fetch(`https://solved.ac/api/v3/user/show?handle=${username}`)
        ).json()) as any;

        return data;
    } catch (err) {
        console.log(err);
        console.error('fetch Error');
    }
};
