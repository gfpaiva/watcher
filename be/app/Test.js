const Nightmare = require('nightmare');
const emmiter = require('../services/emmiter');

class Test {

	static run(account) {
		let url = `http://loja.${account}.com.br/`,
			nightmare = Nightmare({show: true});

		console.log('route /watcher', account, url);

		return nightmare.goto(url)
				.evaluate(function(){
					return document.title;
				})
				.end()
				.then(function(title){
					emmiter.emit('buy.end');
					return title;
				})
				.catch(function(err){
					emmiter.emit('buy.fail');
					return err;
				});
	};

};

module.exports = Test;