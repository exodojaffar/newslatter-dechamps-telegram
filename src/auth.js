'use strict';

const {authenticate} = require('@google-cloud/local-auth');

const Authenticate = async (scopes, file_path, google) => {
	const auth = await authenticate({
			scopes: scopes
			keyfilePath: file_path
		})

	google.options({auth});

}

module.exports.oAuth = Authenticate;
