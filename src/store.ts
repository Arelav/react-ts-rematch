import { init, RematchRootState } from '@rematch/core';
import selectPlugin from '@rematch/select';
import createRematchPersist from '@rematch/persist';

import * as models from './models';

const persistPlugin = createRematchPersist({
  whitelist: ['repos'],
  throttle: 5000,
  version: 1
});

export const store = init({
  models,
  plugins: [selectPlugin(), persistPlugin]
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type RootState = RematchRootState<typeof models>;
