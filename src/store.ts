import { init, RematchRootState } from '@rematch/core';
import selectPlugin from '@rematch/select';

import * as models from './models';

export const store = init({
  models,
  plugins: [selectPlugin()]
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type RootState = RematchRootState<typeof models>;
