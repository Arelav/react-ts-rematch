import { createModel, ModelConfig } from '@rematch/core';

export interface ReposState {
  items?: Array<{ id: string }>;
}

export const repos: ModelConfig<ReposState> = createModel({
  state: {},
  reducers: {
    save: (state: ReposState, payload: ReposState): ReposState => payload
  },
  effects: {
    async fetchRepos() {
      try {
        const query =
          'q=stars:>1+language:javascript' +
          '&sort=stars&order=desc' +
          '&type=Repositories';

        const response = await fetch(
          `https://api.github.com/search/repositories?${query}`
        );
        this.save(await response.json());
      } catch (e) {
        // tslint:disable-next-line:no-console
        console.log(e);
      }
    }
  }
});
