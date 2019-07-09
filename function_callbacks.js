var request = require('request');

/* This is an END POINT */
let url = 'https://jsonplaceholder.typicode.com/users';

/* Using Functional call backs */

request(url, (err, status, data) => {
	console.log(data);
});

/* 

here we cannot access the data outside of functional call back


*/
