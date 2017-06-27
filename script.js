;(function() {
	var data = [
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193517.jpg",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193535.jpg",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193805.jpg",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193810.jpg",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193842.jpg",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193907.jpg",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193944.jpg",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_194451.jpg",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_195015.jpg",
			size: "small"
		},
		{
			title: "Saturday Night Dining",
			imgSrc: "./FletchPhotos/20170121_193904.jpg",
			size: "large"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_195025.jpg",
			size: "small"
		},
		{
			title: "Sunday Pudding Party",
			imgSrc: "./FletchPhotos/20170122_153115.jpg",
			size: "small"
		},
		{
			title: "Sunday Pudding Party",
			imgSrc: "./FletchPhotos/20170122_155514.jpg",
			size: "small"
		},
		{
			title: "House Music",
			imgSrc: "./FletchPhotos/20170122_161331.jpg",
			size: "small"
		},
		{
			title: "House Music",
			imgSrc: "./FletchPhotos/20170122_161349.jpg",
			size: "small"
		},
		{
			title: "Sunset",
			imgSrc: "./FletchPhotos/20170123_162733.jpg",
			size: "small"
		},
		{
			title: "Saturday Night Hanging Out",
			imgSrc: "./FletchPhotos/20170304_212704.jpg",
			size: "small"
		},
		{
			title: "Saturday Night Hanging Out",
			imgSrc: "./FletchPhotos/20170304_212727.jpg",
			size: "small"
		},
		{
			title: "Saturday Night Hanging Out",
			imgSrc: "./FletchPhotos/20170304_212739.jpg",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_183207.jpg",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_183248.jpg",
			size: "large"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_183301.jpg",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_183742.jpg",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_183959.jpg",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_184143.jpg",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_184530.jpg",
			size: "large"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_184402.jpg",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_185229.jpg",
			size: "small"
		},
		{
			title: "Pontifex",
			imgSrc: "./FletchPhotos/20170323_153852.jpg",
			size: "small"
		},
		{
			title: "Pontifex",
			imgSrc: "./FletchPhotos/20170323_154153.jpg",
			size: "small"
		},
		{
			title: "Pontifex",
			imgSrc: "./FletchPhotos/20170323_154111.jpg",
			size: "large"
		},
		{
			title: "Pontifex",
			imgSrc: "./FletchPhotos/20170323_154826.jpg",
			size: "large"
		},
		{
			title: "Pontifex",
			imgSrc: "./FletchPhotos/20170323_154242.jpg",
			size: "small"
		},
		{
			title: "End of LQ party",
			imgSrc: "./FletchPhotos/20170324_215119.jpg",
			size: "small"
		},
		{
			title: "End of LQ party",
			imgSrc: "./FletchPhotos/20170324_215129.jpg",
			size: "large"
		}
	],
	template = document.querySelector('#template').innerHTML,
      result = document.querySelector('.result'),
      i = 0, len = data.length, 
      fragment = '';
   
  for ( ; i < len; i++ ) {
    fragment += template
      .replace( /\{\{title\}\}/, data[i].title )
      .replace( /\{\{size\}\}/, data[i].size )
      .replace( /\{\{imgSrc\}\}/, data[i].imgSrc );  
  }
 
  result.innerHTML = fragment;
})();