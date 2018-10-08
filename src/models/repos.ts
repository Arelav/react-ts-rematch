import { createModel } from '@rematch/core';

export interface ReposState {
  items?: [{ id: string }];
}

export const repos = createModel({
  state: { items: [] },
  reducers: {
    save: (state: ReposState, payload: ReposState): ReposState => payload
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
