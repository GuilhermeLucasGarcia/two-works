import React from 'react';
import { Container, Itens, Logo } from './style';
// import { Container } from './styles';

function Header() {
  return (
  <Container>
    <Logo>
        <p>img</p>
    </Logo>
    <Itens>
        <ul>
            <li>Início</li>
            <li>Gurus da criaçao</li>
            <li>Portifólio</li>
            <li>Contrate-nos</li>
            
        </ul>
    </Itens>
  </Container>
  );
}

export default Header;