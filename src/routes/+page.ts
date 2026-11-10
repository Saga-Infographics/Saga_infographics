import { listPosts } from '#lib/blog';

export const load = () => ({ latestPosts: listPosts().slice(0, 4) });
