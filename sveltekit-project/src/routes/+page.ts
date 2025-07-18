import sanityClient from '$lib/utils/sanity';
import type { SuccessStory } from 'src/lib/types/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const stories: SuccessStory[] = await sanityClient.fetch('*[_type == "successStory"]');
	return { stories };
};
