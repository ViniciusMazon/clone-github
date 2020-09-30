import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  BreadCrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link to={'/viniciusmazon'} className={'username'}>
          viniciusmazon
        </Link>
        <span>/</span>
        <Link to={'/viniciusmazon/clone-github'} className={'reponame'}>
          clone-github
        </Link>
      </BreadCrumb>

      <p>A simple clone of github</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>4</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/ViniciusMazon/proffy'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
