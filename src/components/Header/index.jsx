import { useEffect, useState } from 'react';
import { getUser } from '../../services/userAPI.js';
import { ContainerHeader } from './style.js';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonHeader } from './SkeletonHeader.jsx';
import { Search, Star, User } from 'lucide-react';

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
                <a href="/search" data-test="a-to-search">
                  <Search size={ 24 } />
                </a>
              </li>
              <li>
                <a href="/favorites" data-test="a-to-favorites">
                  <Star size={ 24 } />
                </a>
              </li>
              <li>
                <a href="/profile" data-test="a-to-profile">
                  <User size={ 24 } />
                </a>
              </li>
              <li>
                <p data-test="header-user-name">{ user }</p>
              </li>
            </ul>
          </div>
        )
      }
    </ContainerHeader>
  );
}

export default Header;
