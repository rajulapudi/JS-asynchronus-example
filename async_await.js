var request = require('request');

/* This is an END POINT */
let url = 'https://jsonplaceholder.typicode.com/users';

/* Using Promises */

function getusers() {
	return new Promise((resolve, reject) => {
		request(url, (err, stat, body) => {
			if (err) {
				reject(`${err}`);
			} else {
				resolve(`${body}`);
				console.log(body);
			}
		});
	});
}

async function getIt() {
	try {
		await getusers();
	} catch (error) {
		console.log('error custom msg');
	}
}
getIt();
