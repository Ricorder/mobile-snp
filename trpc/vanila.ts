import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './@generated/server';
export const client = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
			// url: 'https://b1.spacenplace.me/trpc',
			url: 'http://localhost:8000/trpc',
			// You can pass any HTTP headers you wish here
			// async headers() {
			// 	return {
			// 		authorization: getAuthCookie(),
			// 	};
			// },
		}),
	],
});