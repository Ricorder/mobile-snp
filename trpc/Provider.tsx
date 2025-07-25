import { type QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { type ReactNode, useState } from 'react';
import { SuperJSON } from 'superjson';
import { trpc } from './client';
import { makeQueryClient } from './query-client';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
let clientQueryClientSingleton: QueryClient;
function getQueryClient() {
	if (typeof window === 'undefined') {
		// Server: always make a new query client
		return makeQueryClient();
	}
	// Browser: use singleton pattern to keep the same query client
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	return (clientQueryClientSingleton ??= makeQueryClient());
}
function getUrl() {
	const base = (() => {
		if (typeof window !== 'undefined') return '';
		if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
		return 'http://localhost:8000';
	})();
	return `${base}/trpc`;
}
export function TRPCProvider(props: Readonly<{ children: ReactNode }>) {
	// NOTE: Avoid useState when initializing the query client if you don't
	//       have a suspense boundary between this and the code that may
	//       suspend because React will throw away the client on the initial
	//       render if it suspends and there is no boundary
	const queryClient = getQueryClient();
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: apiUrl || '',
					transformer: SuperJSON,
				}),
			],
		}),
	);
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{props.children}
			</QueryClientProvider>
		</trpc.Provider>
	);
}