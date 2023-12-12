import { useEffect, useState } from 'react';
import { getUser } from '../../services/userAPI.js';
import { ContainerHeader } from './style.js';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonHeader } from './SkeletonHeader.jsx';

export function Header() {
  const [user, setUser] = useState('');

  const recuperaNome = async () => {
    setUser(await getUser().then((usuario) => usuario.name));
  };

  useEffect(() => {
    recuperaNome();
  }, []);

  return (
    <ContainerHeader data-testid="header-component">
      {
        user.length === 0 ? <SkeletonHeader /> : (
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
                <p data-testid="header-user-name">{ user }</p>
              </li>
            </ul>
          </div>
        )
      }
    </ContainerHeader>
  );
}

export default Header;
