export const fetcher = async (username: string | string[]) => {
    try {
        const data = await (
            await fetch(`https://solved.ac/api/v3/user/show?handle=${username}`)
        ).json();

        return data;
    } catch (err) {
        console.error('fetch Error');
    }
};
