//pega parametro account passado na CLI
const accountArg = process.argv.reduce((index, value) => { if(value.indexOf('account') >= 0) return value; }).split('=')[1];

// const app = require('express')();
const Test = require('./app/Test');
const test = new Test(accountArg);
// const io = require('./services/socket');
const emmiter = require('./services/emmiter');

emmiter.on('buy.end', () => {
	setTimeout(test.run.bind(test), 1000 * 60 * 5);
});

emmiter.on('buy.fail', err => {
	console.log('has fail', err);
	setTimeout(test.run.bind(test), 1000 * 60 * 2);
});

test.run()
	.then(msg => {
		console.log(msg);
	})
	.catch(err => {
		console.log('errorfirst', err);
	});

/*io.on('connection', client => {
	console.log(client);
	client.on('event', function(data){
		console.log(data);
	});
});*/

// app.listen(3000, () => { console.log('running on 3000'); });