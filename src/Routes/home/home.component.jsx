import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import './home.css'
const Home = () => {
  return (
    <div>
      <h2>Mr. Raed Abdulhmed Welcome!</h2>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
