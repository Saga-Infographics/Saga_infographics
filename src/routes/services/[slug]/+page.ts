import { error } from '@sveltejs/kit';
import { SERVICES } from '$lib/data/content';

export const load = ({ params }) => {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service?.seo) error(404, 'Service not found');
  return { service };
};
