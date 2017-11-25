/**
 * /model
 */

let model = {
	currentCat: null,
	cats: [],

	init: function() {
		for(let i = 0; i < 5; i ++) {
			cat = {
				clickCount: 0,
				name: `Cat${i+1}`,
				imgSrc: `images/cat_picture${i+1}.jpg`,
			};
			this.cats.push(cat);
		}
	},
};

 /**
  * Octopus
  */
let octopus = {
	init: function() {
		model.init();
		model.currentCat = model.cats[0];
		catListView.init();
		catView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	setCurrentCat: function(cat) {
		model.currentCat = cat;
		catView.render();
	},

	incrementCountrt: function() {
		model.currentCat.clickCount ++;
		catView.render();
	},
 };

 /**
  * View
  */
let catView = {
	init: function() {
		this.$catElem = $('.cat');
		this.$catNameElem = $('#cat-nmae');
		this.$catImageElem = $('#cat-img');
		this.$catCountElem = $('#cat-count');

		this.$catImageElem.on('click', ()=>octopus.incrementCountrt());
		this.render();
	},

	render: function() {
		console.log("catview.render");
		var currentCat = octopus.getCurrentCat();
		this.$catNameElem.text(currentCat.name);
		this.$catCountElem.text(currentCat.clickCount);
		this.$catImageElem.attr("src", currentCat.imgSrc);
	},
};

let catListView = {
	init: function() {
		this.$catListElem = $('#cat-list');
		this.render();
	},
	
	render: function() {
		console.log("catListView.render");
		for (let cat of octopus.getCats()) {
			$catElem = $(`<li><a href="#">${cat.name}</a></li>`);
			$catElem.on("click", () => octopus.setCurrentCat(cat));
			this.$catListElem.append($catElem);
		}
	},
};

octopus.init();