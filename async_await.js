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
		//await getComments();
		/* here we can call many promise based functions with await etc for we can have all the data from multiple fucntion calls to render  */
	} catch (error) {
		console.log('error custom msg');
	}
}
getIt();
