import { createModel } from '@rematch/core';

export interface ReposState {
  test: string;
  repos: [];
}

export const repos = createModel({
  state: { test: 'test=====' },
  reducers: {
    // increment: (state: ReposState, payload: {}): ReposState => state
    save: (state: ReposState, payload: []): ReposState => ({
      test: 'test111',
      repos: payload
    })
  },
  effects: {
    async fetchRepos() {
      const query =
        'q=stars:>1+language:javascript' +
        '&sort=stars&order=desc' +
        '&type=Repositories';

      const response = await fetch(
        `https://api.github.com/search/repositories?${query}`
      );
      this.save(await response.json());
    }
  }
});
