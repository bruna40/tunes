import {  Route, Routes } from 'react-router-dom';
import Album from './pages/Album/index.jsx';
import Search from './pages/Search/index.jsx';
import Favorites from './pages/Favorites.jsx';
import Login from './pages/Login/index';
import {NotFound} from './pages/NotFound/index.jsx'
import Profile from './pages/Profile.jsx';
import ProfileEdit from './pages/ProfileEdit.jsx';
import { DefaultLayout } from './layouts/DefaultLayout/index.jsx';

export function Router() {
  return (
        <Routes>
          <Route  path="/" element={ <Login /> } />
          <Route path='/' element={<DefaultLayout />}>
            <Route  path="/search" element={ <Search /> } />
            <Route  path="/album/:id" element={ <Album /> } />
            <Route  path="/favorites" element={ <Favorites /> } />
            <Route  path="/profile" element={ <Profile /> } />
            <Route  path="/profile/edit" element={ <ProfileEdit />} />
          </Route>
          <Route path="*" element={ <NotFound />} />
  
        </Routes>
    
  );
} 


