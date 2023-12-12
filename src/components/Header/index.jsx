import { useEffect, useState } from 'react';
import { getUser } from '../../services/userAPI.js';
import Carregando from '../Carregando.jsx';
import { ContainerHeader } from './style.js';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function Header() {
  const [user, setUser] = useState('');
  const [carregou, setCarregou] = useState(true);

  const recuperaNome = async () => {
    setUser(await getUser().then((usuario) => usuario.name));
    setCarregou(false);
  };

  useEffect(() => {
    recuperaNome();
  }, []);

  return (
    <ContainerHeader data-testid="header-component">
      {carregou ? (
        <Carregando />
      ) : (
        <div>
          <ul>
            <li>
              <a href="/search" data-testid="a-to-search">
                Search
              </a>
            </li>
            <li>
              <a href="/favorites" data-testid="a-to-favorites">
                Favorites
              </a>
            </li>
            <li>
              <a href="/profile" data-testid="a-to-profile">
                Profile
              </a>
            </li>
            <li>
              <p data-testid="header-user-name">{ user | <Skeleton />}</p>
            </li>
          </ul>
        </div>
      )}
    </ContainerHeader>
  );
}

export default Header;
