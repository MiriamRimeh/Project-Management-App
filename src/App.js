import React from 'react';//, { useState, useEffect }
import AppHeader from './components/AppHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/404';
import Contacts from './pages/Contacts';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';
import Projects from './pages/Projects';
import AppFooter from './components/AppFooter';
import LogIn from './components/LogIn';
//import Tasks from './pages/Tasks'

function App() {
  /* const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate authentication check (replace with actual authentication logic)
  useEffect(() => {
    const checkAuthentication = async () => {
      // Replace this with your actual authentication logic, e.g., fetching user data from a server
      const isAuthenticated = true; //await checkUserAuthentication(); // Your authentication function
      setIsLoggedIn(isAuthenticated);
    };

    checkAuthentication();
  }, []); */

  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>        
        <Route path='/settings' element={<Settings></Settings>}></Route>
        <Route path='/contacts' element={<Contacts></Contacts>}></Route>
        <Route path='/userProfile' element={<UserProfile></UserProfile>}></Route>
        <Route path='*' element={<NoMatch></NoMatch>}></Route>
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;

/*

<Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/projects' element={<Projects></Projects>}></Route>
    <Route path='/settings' element={<Settings></Settings>}></Route>
    <Route path='/contacts' element={<Contacts></Contacts>}></Route>
    <Route path='/userProfile' element={<UserProfile></UserProfile>}></Route>
    <Route path='*' element={<NoMatch></NoMatch>}></Route>

    <Route path='/tasks' element={<Tasks></Tasks>}></Route>
</Routes> 
*/