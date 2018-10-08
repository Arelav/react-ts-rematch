import * as React from 'react';
import { connect } from 'react-redux';
import * as styles from './App.module.css';
import logo from './logo.svg';
import { Dispatch, RootState } from './store';
import Repo, { RepoItem } from './Repo/Repo';

const mapState = ({ repos }: RootState) => ({
  repos
});

const mapDispatch = (dispatch: Dispatch) => ({
  fetchRepos: dispatch.repos.fetchRepos
});

type StateProps = ReturnType<typeof mapState>;

type DispatchProps = ReturnType<typeof mapDispatch>;

type Props = StateProps & DispatchProps;

class App extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchRepos();
  }

  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <ul className={styles.repos}>
              {this.props.repos.items &&
                this.props.repos.items.map((repo: RepoItem) => (
                  <Repo key={repo.id} repo={repo} />
                ))}
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
