var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Cat1');
	this.imgSrc = ko.observable('images/cat_picture1.jpg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());