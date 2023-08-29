import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const loggedIn = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment> 
      <Header />
      {!loggedIn ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>

  );
}

export default App;
