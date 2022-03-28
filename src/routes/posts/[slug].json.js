import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async (req) => {
	const slug = req.params.slug;

	try {
		const query = gql`
			query Post($slug: String!) {
				post(where: { slug: $slug }, stage: PUBLISHED) {
					title
					slug
					createdAt
					content {
						html
					}
					coverImage {
						url
					}
					author {
						name
						photo {
							url
						}
					}
					category {
						title
					}
				}
			}
		`;

		const variables = { slug };
		const { post } = await client.request(query, variables);

		return {
			status: 200,
			body: { post }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: 'There was a server error - 500' }
		};
	}
};
