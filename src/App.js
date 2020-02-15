import React, {useState, useEffect} from 'react';
import SiteBar from './home/navbar';
import Auth from './auth/auth';
import BoardIndex from './boards/boardindex';
import './App.css'


function App() {
  const [sessionToken, setSessionToken] = useState(''); //1
  useEffect(() => { //2
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
  }
}, [])

  const updateToken = (newToken) => { //3
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
}

const updateEmail = (newEmail) => {
  localStorage.setItem('email', newEmail);
}

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
}

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <BoardIndex token={sessionToken}/>
  : <Auth updateToken={updateToken} updateEmail={updateEmail} /> 
  )
 }

//render method is down here
  return (
    <div className="page">
      <div>
        <SiteBar clearToken={clearToken}/>
        {protectedViews()}
      </div>
    </div>    
  );
}

export default App;
