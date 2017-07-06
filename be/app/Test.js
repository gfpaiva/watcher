const Nightmare = require('nightmare');
const io = require('../services/socket');
const emmiter = require('../services/emmiter');

class Test {
	constructor(account = 'brastemp') {
		this.account = account;
		this.url = `http://loja.${account}.com.br/`;
		this.report;
	};

	run() {
		let nightmare = Nightmare(/*{show: true}*/);

		this.report = {
			store: this.account,
			lastRun: new Date(),
			site: this.url,
			status: true,
			steps: {
				home: {status: false, data: '', title: ''},
				categoria: {status: false, data: '', title: ''},
				produto: {status: false, data: '', title: ''}
			}
		};

		// console.log('route /watcher', account, url);

		return nightmare.goto(this.url)
				.wait('.menu-department a[title="Geladeiras"]')
				.evaluate(() => document.title)
				.then(title => {
					console.log('1 then');
					this.report.steps.home.status = true;
					this.report.steps.home.data = new Date();
					this.report.steps.home.title = title;

					return nightmare.click('.menu-department a[title="Geladeiras"]')
									.wait('.prateleira.default li')
									.evaluate(() => document.title)
				})
				.then(title => {
					console.log('2 then');
					this.report.steps.categoria.status = true;
					this.report.steps.categoria.data = new Date();
					this.report.steps.categoria.title = title;

					return nightmare.click('.prateleira.default li article a')
									.wait('#BuyButton')
									.evaluate(() => document.title)
				})
				.then(title => {
					console.log('3 then');
					this.report.steps.produto.status = true;
					this.report.steps.produto.data = new Date();
					this.report.steps.produto.title = title;

					io.emit('watcher.watch', this.report);
					emmiter.emit('buy.end');

					return nightmare.end();
				})
				.catch(err => {
					this.report.status = false;

					io.emit('watcher.watch', this.report);
					emmiter.emit('buy.fail', err);

					return err;
				});
	};

};

module.exports = Test;