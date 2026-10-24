import { listPosts } from '#lib/blog';

export const load = () => ({ posts: listPosts() });
