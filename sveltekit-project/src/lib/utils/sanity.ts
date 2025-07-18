import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: '71f5aidj',
	dataset: 'datasetabccompany',
	useCdn: true,
	apiVersion: '2025-07-17'
};

const sanityClient =createClient(config)
export default sanityClient