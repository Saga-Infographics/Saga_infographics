import { error } from '@sveltejs/kit';
import { getPost } from '#lib/blog';

export const load = ({ params }) => {
  const post = getPost(params.slug);
  if (!post) error(404, 'Post not found');
  return post;
};
