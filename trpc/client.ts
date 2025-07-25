import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from './@generated/server';
import * as secureStore from 'expo-secure-store';

export const store = secureStore
export const trpc = createTRPCReact<AppRouter>();
