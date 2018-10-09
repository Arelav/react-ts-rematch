import * as React from 'react';
import { connect } from 'react-redux';
import * as styles from './App.module.css';
import logo from './logo.svg';
import { Dispatch, RootState, store } from './store';
import Repo, { RepoItem } from './Repo/Repo';

const firstRepo = store.select.repos.firstRepo;

const mapState = (state: RootState) => ({
  repos: state.repos,
  firstRepo: firstRepo(state)
});

const mapDispatch = (dispatch: Dispatch) => ({
  fetchRepos: dispatch.repos.fetchRepos
});

type StateProps = ReturnType<typeof mapState>;

type DispatchProps = ReturnType<typeof mapDispatch>;

type Props = StateProps & DispatchProps;

class App extends React.Component<Props> {
  public componentDidMount() {
    if (!this.props.repos.items) {
      this.props.fetchRepos();
    }
  }

  public componentDidUpdate() {
    // tslint:disable-next-line:no-console
    console.log(this.props.firstRepo);
  }

  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <div>
            <ul className={styles.repos}>
              {this.props.repos.items &&
                this.props.repos.items.map((repo: RepoItem) => <Repo key={repo.id} repo={repo} />)}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(App);
