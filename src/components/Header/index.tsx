import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate('/' + search.toLowerCase().trim());
  }

  return (
    <Container>
      <GithubLogo />
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
