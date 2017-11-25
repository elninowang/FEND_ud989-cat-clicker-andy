let Cat = function(data) {
	this.clickCount = ko.observable(0);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);
	
	this.title = ko.computed(() => {
		let title;
		let clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Newborn';
		} else if (clicks < 50) {
			title = 'Infant';
		} else if (clicks < 100) {
			title = 'Child';
		} else {
			title = 'Ninja';
		}
		return title;
	}, this);
};

let ViewModel = function() {
	let self = this;

	this.carList = ko.observableArray([]);
	for (let i = 1; i <= 5; i ++) {
		this.carList.push(new Cat({
			name: `Cat${i}`,
			imgSrc: `images/cat_picture${i}.jpg`,
			nicknames: [`Tabtab${i}`,`T-Bone${i}`,`Mr. T${i}`],
		}));
	} 

	this.currentCat = ko.observable(this.carList()[0]);

	this.incrementCounter = function() {
		//this.clickCount(this.clickCount() + 1); 不建议这样写，因为不好理解
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCurrentCat = function(cat) {
		self.currentCat(cat)
	};
};

ko.applyBindings(new ViewModel());