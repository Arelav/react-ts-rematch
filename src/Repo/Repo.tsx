import * as React from 'react';
import * as styles from './Repo.module.scss';

export interface RepoItem {
  id: string;
  name: string;
  html_url: string;
}

interface OwnProps {
  repo: RepoItem;
}

type Props = OwnProps;

const Repo: React.StatelessComponent<Props> = ({ repo }) => (
  <li className={styles.repoItem}>
    <span>{repo.name}</span> <a href={repo.html_url}>{repo.html_url}</a>
  </li>
);

export default Repo;
