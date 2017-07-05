// const app = require('express')();
const io = require('socket.io')(3001);
const Test = require('./app/Test');
const emmiter = require('./services/emmiter');

//pega parametro account passado na CLI
const accountArg = process.argv.reduce((index, value) => { if(value.indexOf('account') >= 0) return value; }).split('=')[1];

emmiter.on('buy.end', () => {
	setTimeout(Test.run.bind(this, accountArg), /*1000 * 60 * 60*/5000);
});

emmiter.on('buy.fail', () => {
	setTimeout(() => {
		Test.run.bind(this, accountArg)
	}, /*1000 * 60 * 60*/5000);
});

Test.run(accountArg)
	.then(msg => {
		console.log(msg);
		io.emit('rodou', {some: 'data'});
	})
	.catch(err => {
		console.log(err);
	});

io.on('connection', client => {
	console.log(client);
	client.on('event', function(data){
		console.log(data)
	});
});

// app.listen(3000, () => { console.log('running on 3000'); });