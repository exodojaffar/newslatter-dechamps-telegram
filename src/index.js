const path = require('path');
const gmail = require('./gmail.js');

// Coisa da API do google
const scopes = ['https://www.googleapis.com/auth/gmail.readonly'];
const credentialsPath = path.join(__dirname, "../credentials.json");

// Codigo
const newsletterEmail = "newsletter@filipedeschamps.com.br";

async function start(){
	await gmail.auth(scopes, credentialsPath);

	const props = {
		userId: 'me', 
		q: `from:${newsletterEmail} is:unread`, 
		maxResults: 2
	}

	const response = await gmail.getMessages(props);

	console.log(response)
	console.log(response.data)
}


start()