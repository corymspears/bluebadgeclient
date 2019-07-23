import React, {useState, useEffect} from 'react';
import SiteBar from './home/navbar';
import Auth from './auth/auth';
import BoardIndex from './boards/boardindex';



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

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
}
const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <BoardIndex token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
 }

//render method is down here
  return (
    <div>
      <SiteBar clearToken={clearToken}/>
      {protectedViews()}
    </div>
  );
}

export default App;
