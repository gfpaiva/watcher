const Nightmare = require('nightmare');
const io = require('../services/socket');
const emmiter = require('../services/emmiter');

class Test {
	constructor(account = 'brastemp') {
		this.url = `http://loja.${account}.com.br/`;
		this.report;
	};

	run() {
		let nightmare = Nightmare(/*{show: true}*/);

		this.report = {
			site: this.url,
			online: true,
			steps: [],
			data: []
		};

		// console.log('route /watcher', account, url);

		return nightmare.goto(this.url)
				.evaluate(() => {
					return document.title;
				})
				.end()
				.then(title => {
					this.report.steps.push({load: true});
					this.report.data.push({'title': title});

					io.emit('watcher.watch', this.report);
					emmiter.emit('buy.end');

					return title;
				})
				.catch(err => {
					this.report.online = false;

					io.emit('watcher.watch', this.report);
					emmiter.emit('buy.fail', err);

					return err;
				});
	};

};

module.exports = Test;