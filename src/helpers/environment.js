let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http/localhost:5000/';
        break;
    case 'cs-pedalboardbuilderclient.herokuapp.com':
        APIURL = 'https://cs-pedalboardbuilderserver.herokuapp.com/'

} 

export default APIURL;