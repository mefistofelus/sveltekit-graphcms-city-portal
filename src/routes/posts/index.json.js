import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async () => {
	try {
		const query = gql`
			query Posts {
				posts {
					title
					slug
					createdAt
					excerpt
					content {
						html
					}
					featured
					coverImage {
						url(transformation: { image: { resize: { fit: clip, height: 1920, width: 1080 } } })
					}
				}
			}
		`;

		const { posts } = await client.request(query);

		return {
			status: 200,
			body: { posts }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: 'There was a server error - 500' }
		};
	}
};
