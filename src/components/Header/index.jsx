import {
  Navigation,
  HeaderLink,
  Options,
  Profile,
  Logout,
  LinkContainer,
  Content
} from './styles';
import { Container } from './styles';
import { UserCircle, ShoppingCart } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';


export function Header() {
    const navigate = useNavigate();
    const { pathname } = useResolvedPath();
    const { logout, userInfo } = useUser();

    function logoutUser() {
        logout();
        navigate('/login');
    }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to={'/'} isActive={pathname === '/'}>Home</HeaderLink>
            <hr></hr>
            <HeaderLink to={'/cardapio'} isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#fff" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            
            <HeaderLink to={'/carrinho'}><ShoppingCart color:hover="#9758a6" size={24}  /></HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
