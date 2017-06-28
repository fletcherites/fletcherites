;(function() {
	var data = [
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193517.jpg",
			id: "1",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193535.jpg",
			id: "2",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193805.jpg",
			id: "3",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193810.jpg",
			id: "4",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193842.jpg",
			id: "5",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193907.jpg",
			id: "6",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_193944.jpg",
			id: "7",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_194451.jpg",
			id: "8",
			size: "small"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_195015.jpg",
			id: "9",
			size: "small"
		},
		{
			title: "Saturday Night Dining",
			imgSrc: "./FletchPhotos/20170121_193904.jpg",
			id: "10",
			size: "large"
		},
		{
			title: "House Dodgeball",
			imgSrc: "./FletchPhotos/20161112_195025.jpg",
			id: "11",
			size: "small"
		},
		{
			title: "Sunday Pudding Party",
			imgSrc: "./FletchPhotos/20170122_153115.jpg",
			id: "12",
			size: "small"
		},
		{
			title: "Sunday Pudding Party",
			imgSrc: "./FletchPhotos/20170122_155514.jpg",
			id: "13",
			size: "small"
		},
		{
			title: "House Music",
			imgSrc: "./FletchPhotos/20170122_161331.jpg",
			id: "14",
			size: "small"
		},
		{
			title: "House Music",
			imgSrc: "./FletchPhotos/20170122_161349.jpg",
			id: "15",
			size: "small"
		},
		{
			title: "Sunset",
			imgSrc: "./FletchPhotos/20170123_162733.jpg",
			id: "16",
			size: "small"
		},
		{
			title: "Saturday Night Hanging Out",
			imgSrc: "./FletchPhotos/20170304_212704.jpg",
			id: "17",
			size: "small"
		},
		{
			title: "Saturday Night Hanging Out",
			imgSrc: "./FletchPhotos/20170304_212727.jpg",
			id: "18",
			size: "small"
		},
		{
			title: "Saturday Night Hanging Out",
			imgSrc: "./FletchPhotos/20170304_212739.jpg",
			id: "19",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_183207.jpg",
			id: "20",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_183248.jpg",
			id: "21",
			size: "large"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_183301.jpg",
			id: "22",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_183742.jpg",
			id: "23",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_183959.jpg",
			id: "24",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_184143.jpg",
			id: "25",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_184530.jpg",
			id: "26",
			size: "large"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_184402.jpg",
			id: "27",
			size: "small"
		},
		{
			title: "Charity Ball",
			imgSrc: "./FletchPhotos/20170318_185229.jpg",
			id: "28",
			size: "small"
		},
		{
			title: "Pontifex",
			imgSrc: "./FletchPhotos/20170323_153852.jpg",
			id: "29",
			size: "small"
		},
		{
			title: "Pontifex",
			imgSrc: "./FletchPhotos/20170323_154153.jpg",
			id: "30",
			size: "small"
		},
		{
			title: "Pontifex",
			imgSrc: "./FletchPhotos/20170323_154111.jpg",
			id: "31",
			size: "large"
		},
		{
			title: "Pontifex",
			imgSrc: "./FletchPhotos/20170323_154826.jpg",
			id: "32",
			size: "large"
		},
		{
			title: "Pontifex",
			imgSrc: "./FletchPhotos/20170323_154242.jpg",
			id: "33",
			size: "small"
		},
		{
			title: "End of LQ party",
			imgSrc: "./FletchPhotos/20170324_215119.jpg",
			id: "34",
			size: "small"
		},
		{
			title: "End of LQ party",
			imgSrc: "./FletchPhotos/20170324_215129.jpg",
			id: "35",
			size: "large"
		},
		{
			title: "Athletics",
			imgSrc: "./FletchPhotos/20170423_150139.jpg",
			id: "36",
			size: "large"
		},
		{
			title: "End of LQ party",
			imgSrc: "./FletchPhotos/20170324_215153.jpg",
			id: "37",
			size: "small"
		},
		{
			title: "House Athletics",
			imgSrc: "./FletchPhotos/20170423_151757.jpg",
			id: "38",
			size: "small"
		},
		{
			title: "House Athletics",
			imgSrc: "./FletchPhotos/20170423_151954.jpg",
			id: "39",
			size: "large"
		},
		{
			title: "House Athletics",
			imgSrc: "./FletchPhotos/20170423_151757.jpg",
			id: "40",
			size: "small"
		},
		{
			title: "House Athletics",
			imgSrc: "./FletchPhotos/20170428_173633.jpg",
			id: "41",
			size: "small"
		},
		{
			title: "House Athletics",
			imgSrc: "./FletchPhotos/20170428_173847.jpg",
			id: "42",
			size: "small"
		},
		{
			title: "Global buffet (food cooked by pupils)",
			imgSrc: "./FletchPhotos/20170506_185916.jpg",
			id: "43",
			size: "small"
		},
		{
			title: "Global buffet (food cooked by pupils)",
			imgSrc: "./FletchPhotos/20170506_200220.jpg",
			id: "44",
			size: "small"
		},
		{
			title: "Global buffet (food cooked by pupils)",
			imgSrc: "./FletchPhotos/20170506_201632.jpg",
			id: "45",
			size: "small"
		},
		{
			title: "Global buffet (food cooked by pupils)",
			imgSrc: "./FletchPhotos/20170506_202030.jpg",
			id: "46",
			size: "small"
		},
		{
			title: "Global buffet (food cooked by pupils)",
			imgSrc: "./FletchPhotos/20170506_202041.jpg",
			id: "47",
			size: "small"
		},
		{
			title: "Global buffet (food cooked by pupils)",
			imgSrc: "./FletchPhotos/20170506_204810.jpg",
			id: "48",
			size: "small"
		},
		{
			title: "Summer BBQ",
			imgSrc: "./FletchPhotos/20170617_192622.jpg",
			id: "49",
			size: "small"
		},
		{
			title: "Summer BBQ Live Music",
			imgSrc: "./FletchPhotos/20170617_205301.jpg",
			id: "50",
			size: "large"
		},
		{
			title: "Summer BBQ",
			imgSrc: "./FletchPhotos/20170617_205314.jpg",
			id: "51",
			size: "small"
		},
		{
			title: "Summer BBQ",
			imgSrc: "./FletchPhotos/20170617_205340.jpg",
			id: "52",
			size: "small"
		},
		{
			title: "Summer BBQ",
			imgSrc: "./FletchPhotos/20170617_205401.jpg",
			id: "53",
			size: "small"
		},
		{
			title: "Summer BBQ",
			imgSrc: "./FletchPhotos/20170617_210950.jpg",
			id: "54",
			size: "small"
		},
		{
			title: "House Quiz",
			imgSrc: "./FletchPhotos/20170622_205619.jpg",
			id: "55",
			size: "large"
		},
		{
			title: "Summer BBQ",
			imgSrc: "./FletchPhotos/20170617_211014.jpg",
			id: "56",
			size: "small"
		},
		{
			title: "Summer BBQ",
			imgSrc: "./FletchPhotos/20170617_213924.jpg",
			id: "57",
			size: "small"
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
      .replace( /\{\{id\}\}/, data[i].id)
      .replace( /\{\{id\}\}/, data[i].id)
      .replace( /\{\{imgSrc\}\}/, data[i].imgSrc )
      .replace( /\{\{imgSrc\}\}/, data[i].imgSrc ); 
  }
 
  result.innerHTML = fragment;
})();