import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import caseStudies from '$lib/db/caseStudies';
import type { CaseStudy } from '$lib/types/types';

export const load: PageLoad = ({ params }) => {
	const numberSlug = parseInt(params.slug, 10)-1
	if (numberSlug > -1 && numberSlug < 6) {
		const SingleCase: CaseStudy = caseStudies[numberSlug];

		return {
			SingleCase
		};
	}

	error(404, 'Not found');
};
