import './App.css';
import Users from './components/Users/Users';
import { useState } from 'react';
import NewUser from './components/NewUser/NewUser';

function App() {
  const initUsers = [];
  const [users, setUsers] = useState(initUsers);

  const addNewUserHandler = (userData) => {
    setUsers((oldList) => {
      return [userData, ...oldList]
    })
  }

  return (
    <div className="App">
      <NewUser onNewUser={addNewUserHandler} />
      <Users userData={users} />
    </div>
  );
}

export default App;
