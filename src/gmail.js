const {oAuth} = require('./auth.js');
const {google} = require('googleapis');

const TOKEN_PATH = 'token.json';

const gmail = google.gmail('v1');
google.Authenticate = false;

async function auth(scopes, file_path) {
  await oAuth(scopes, file_path, google);
}

async function getMessages(props) {

  if(google.Authenticate){

    const response = await gmail.users.messages.list(props);

    return response;

  }else{
    console.log("It isn't authenticate.")
  }
  
}

module.exports.getMessages = getMessages;
module.exports.auth = auth
