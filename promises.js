var request = require('request');

/* This is an END POINT */
let url = 'https://jsonplaceholder.typicode.com/users';

/* Using Promises */

var getUsers = new Promise((resolve, reject) => {
	request(url, (err, stat, body) => {
		if (err) {
			reject(`${err}`);
		} else {
			resolve(`${body}`);
		}
	});
});

getUsers
	.then(body => {
		console.log(body);
	})
	.catch(err => {
		console.log('error custom');
	});
