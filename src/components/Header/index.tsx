import React, { useState } from 'react';
import { ThemeName } from '../../styles/themes';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate('/' + search.toLowerCase().trim());
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
