/*jshint devel: true*/
/*global Modernizr: true*/
/*global Raphael: true*/
/*global TweenMax: true*/

//if(Raphael){

	//alert('yes');

//}

$(document).ready(function(){

	var $m = {

		init : {

			entry: function(){

				console.log('run entry init functions...');

				$m.s.ltIe9 = $m.ltIe9();
				$m.regions.init(); // create the map shapes + add interactivity animations for the map and region list...
				$m.inputType.listeners.mouse();
				$m.chefs.init();
				$m.modal.init();

			} // end of entry

			//$m.s.svg = $m.svgTest(); // test if the browser support SVG or not and store the result in the global setting obj (if not then it must use VML)
			// $m.s.ltIe9 = $m.ltIe9();
			// $m.regions.init(); // create the map shapes + add interactivity animations for the map and region list...
			// $m.inputType.listeners.mouse();
			// $m.winner.init();
			// $m.finalists.init();
			// $m.chefs.init();
			//$m.slider.init();
			// $m.modal.init();
			// $m.feature.init();

		}, // end of init fnc

		s : {

			json: {},

			touch : false, // will be updated to true when the 'window' registers a touch action...

			ani : 0.25,

			atvReg : null,

			modal : {
				state : '',
				random : '',
				region : '',
				chef : '',
				chefLen : ''
			},

			col : {
				'drkGray' : 'rgb(27, 27, 27)', // '#1b1b1b'
				'medGray' : 'rgb(77, 77, 77)', // '#4d4d4d'
				'lytGray' : 'rgb(204, 204, 204)', // '#cccccc'
				'drkBrown' : 'rbg(49, 39, 24)', // #312718
				'medBrown' : 'rgb(155, 126, 84)' // '#9b7e54'
			},

			finDat : [
				{
					'chefName' : 'Adam Rickett',
					'restaurant' : 'Pravda Café',
					'url' : ['pravdacafe.co.nz', 'http://www.pravdacafe.co.nz/'],
					'cut' : 'reserve',
					'bio' : [
						'I have grown up working in kitchens since the age of fifteen. I spent the first few years of my career working in small gastro pubs just outside of north London. I moved to Cornwall when I was seventeen and went to Cornwall College St Austell to get my qualifications. Since then I have worked in all avenues of the kitchen world, from pubs to cafes to catering companies to production kitchens to fine dining restaurants.',
						'I originally came to New Zealand for a years working holiday, shortly after then I found myself working for the Nourish Group who quickly invested in me and made me Head Chef at Pravda. I have been in the country for five years and am now a resident. I have fallen in love with the country and have felt most at home since moving to Wellington and getting involved with the amazing hospitality scene that resides in the city.'
					],
					'dish' : 'Final’s Dish',
					'details' : [
						'Silver Fern Farms Reserve beef tataki with white soy ponzu, pickled enoki and toasted grains.',
						'I entered the competition simply because I love a good excuse to do something new, in this instance the main purpose was to showcase the Silver Fern Farms product. To get into the final alongside such prestigious chefs from around the country is very humbling.',
						'To truly showcase the quality and flavour of the beef I wanted to present it in it’s purest form, for me this is raw. I have drawn from recent travels around Europe and Japan to create a balanced dish with the Silver Fern Farms product at the centre.'
					],
					'judge' : [
						//'Seared Reserve beef tataki',
						'“The meat was absolutely the hero but beautifully balanced by accompanying elements. This dish was as close to perfection as anything we have tried in this country.” <strong>– Judge</strong>'
					]
				},
				{
					'chefName' : 'Alex Strobach',
					'restaurant' : 'O’Connell Street Bistro',
					'url' : ['oconnellstbistro.com', 'http://oconnellstbistro.com/'],
					'cut' : 'cervena-venison',
					'bio' : [
						'German born Alex Strobach arrived in New Zealand after working at the prestigious Gleneagles Hotel in Scotland. Alex worked at the French Café as Sous Chef before joining O’Connell Street Bistro as Head Chef in October 2012.'
					],
					'dish' : 'Final’s Dish',
					'details' : [
						'Silver Fern Farms Cervena venison loin, crème fraiche spatzle, sautéed rainbow chard, mushrooms & green peppercorn jus.',
						'Alex is a mad keen hunter & fisherman & his dish reflects his German heritage & incorporates his passion for hunting.'
					],
					'judge' : [
						//'Cervena venison loin',
						'“A simple but considered compilation of textures, a deep sauce made for the best possible marriage. To quote Rachel Hunter -Amazzzingg!” <strong>– Judge</strong>'
					]
				},
				{
					'chefName' : 'Andrew Clarke',
					'restaurant' : 'Victoria Street Bistro',
					'url' : ['victoriastreetbistro.co.nz', 'http://www.victoriastreetbistro.co.nz/'],
					'cut' : 'silere',
					'bio' : [
						'Andrew Clarke is a renowned chef in the Waikato and has made his name in some of the city’s most prominent restaurants. He began his career in 1996 at Gails of Tamahere before moving on to Tables on the River where he rose to the position of Sous Chef. Seeking to broaden his abilities, Andrew then spent a number of years in Melbourne working under celebrity British chef Justin Derrick in the Marque Hotel, and as Chef de Partie in Treasury Restaurant at the Sebel.',
						'Andrew returned to Hamilton taking up a position at Balcony Restaurant where he was eventually appointed as Head Chef. In 2007 Andrew opened OneZB and over the following three years was awarded three beef and lamb plates, as well as the 2008 regional title in the Monteith’s Wild Food Challenge and national runner up in the Corban’s Perfect Wine and Food Match.',
						'Since opening Victoria Street Bistro, Andrew has won the 2011 Mercedez Benz Great Waikato Food Challenge and placed in the final three in the televised national finals of the Monteith’s Beer and Wild Food Challenge.  At Victoria Street Bistro, Andrew combines his culinary gifts with the front of house leadership of expert restaurateur Julia Clarke to create Hamilton’s premiere dining experience.',
						'Andrew’s culinary directions are inspired by a number of nationalities. He describes himself as unbiased in his ethnic influences with the old world style of Italy and France sitting happily alongside the exciting flavours of Asia and the Middle East. Much of his passion is derived from the joy experienced in creating these flavours from quality New Zealand produce which he rates as the equal of anywhere in the world. Andrew’s menus pay homage to classic flavour combinations, but he is always investigating new and innovative techniques to keep his food at the cutting edge.'
					],
					'dish' : 'Final’s Dish',
					'details' : [
						'SILERE alpine origin merino rump with honey braised spare rib, macadamia dukkah, black lentil dhal, swede, carrot purée and spring greens.'
					],
					'judge' : [
						//'SILERE alpine origin merino rump and short rib',
						'“Moroccan fusion with Kiwi undertones and a mix of modern and ethnic twists in a classical setting. Stunning!” <strong>– Judge</strong>'
					]
				},
				{
					'chefName' : 'Craig Hendry',
					'restaurant' : 'Gantleys',
					'url' : ['gantleys.co.nz', 'http://www.gantleys.co.nz/'],
					'cut' : 'hereford',
					'bio' : [
						'I was lucky enough to grow up on a small Scottish Island where the population has never been more than 3000. My family have always been involved with aspects of small holdings and game hunting and most of the produce back then was locally sourced. I often remember coming home and a basket of langoustines being left on the doorstep from locals out fishing.  This is where my inspiration comes from for home-grown food cooked well and enjoyed with the family.',
						'I moved to Glasgow to start my career where I worked in numerous establishments learning the trade from experienced chefs. This was a very different flavour to what I was used to, fast paced and big numbers coming through the door, it was exhilarating yet you had no other life.',
						'As good an experience as this was I decided to travel and broaden my horizons throughout Europe and Australia before finally what felt like coming home to New Zealand. I have been a Chef in Queenstown for over ten years working at some of the top restaurants here, including formative years at Wai Restaurant. It’s where I met my wife and where we raise our young family including the five chickens roaming free in the garden. I feel privileged to live here, with the many opportunities to cook great food locally sourced and beautiful local wines to accompany.'
					],
					'dish' : 'Final’s Dish',
					'details' : [
						'Silver Fern Farms Hereford braised beef rib and beef fillet, blue cheese beignet, pan jus and seasonal vegetables.',
						'The inspiration for the dish came from the beef rib and trying to match that to flavours and textures that I thought would accompany it well. I have always thought the beef rib is a great cut and under utilised.  By pairing it with the more common fillet, the customer gets to enjoy a variation of cooking techniques on one dish.'
					],
					'judge' : [
						//'Braised Hereford beef rib and beef fillet',
						'“This dish is reason enough alone to revisit this restaurant which for too long has languished in the shadows of Queenstown’s burgeoning dining environment.” <strong>– Judge</strong>'
					]
				},
				{
					'chefName' : 'Greg Piner',
					'restaurant' : 'Pier 24',
					'url' : ['hotelstclair.com', 'http://www.hotelstclair.com/category/pier-24-dining/'],
					'cut' : 'cervena-venison',
					'bio' : [
						'I have worked in some of New Zealand’s top hotels in Queenstown, including Blanket Bay and the award winning St Moritz Grand Mercure.',
						'My current position is Head Chef at Pier 24 at St Clair Beach Resort under executive chef, Michael Coughlin.',
						'My home on the West Coast was built for entertaining groups to my cooking demos, which I was doing right up until my move to Dunedin.  I spent 12 years in Queenstown, chefing at different hotels and restaurants, from Blanket Bay to being executive chef at NZSKI.com. I was also product development manager for the Mediterranean Group in Queenstown, sourcing new food and product that top chefs in Queenstown could use.',
						'My travels lead me to work at the Christchurch casino, and then on to Auckland to Mikano under Wawrick Brown. I was also a private chef for Sir Bob Jones while on his trip to the West Coast.  I was chef for the Williams Porsche race team for 2008 and I had involvement with Lake Brunner Lodge on the West Coast planning new menus and putting a new spin on things.',
						'One of my biggest loves is using fresh New Zealand products, and keeping the food simple.  Seafood is my background and I enjoy coming up with new ideas that think outside the square. The people you meet are important when you are a chef, having a good relationship with guests, "nothing’s a problem". I also enjoy surfing, snowboarding, travel and have made my way in to "Top Gear" magazine for my love of cars. I am also a gourmet traveller, Accor traveller and featured on an Australian travel television programme as a guest chef.'
					],
					'dish' : 'Final’s Dish',
					'details' : [
						'Chargrilled Silver Fern Farms Cervena venison loin, green pepper corn and sage pesto, leek and black pudding tart, glazed beetroot, blood orange jus.',
						'I entered the awards, to showcase what a great product we get to work with everyday. Being in the finals is a great reward for all the hard work that the Pier 24 team have put into the dish – it’s an amazing feeling.'
					],
					'judge' : [
						//'Char grilled Cervena venison loin medallion',
						'“The dish pushed the diner to experience a dish which went well beyond the usual venison offerings and it did this in a refined and clever way.” <strong>– Judge</strong>'
					]
				},
				{
					'chefName' : 'Mat Mclean',
					'restaurant' : 'Palate',
					'url' : ['palaterestaurant.co.nz', 'http://palaterestaurant.co.nz/'],
					'cut' : 'reserve',
					'bio' : [
						'Mat Mclean has established a reputation as one of New Zealand’s leading chefs and his restaurant Palate is regarded as one of this country’s best restaurants.',
						'Mat is a chef with highly developed technical skills, who’s committed to cooking with seasonal, local produce. He is not afraid to experiment with flavours and textures.',
						'Few regional restaurants have quite the same level of panache as Palate which, since opening its doors in 2005, has clearly shown a commitment to good food and wine, great service and overall quality.',
						'He gained his professional qualifications at the Waikato Polytechnic and was awarded a scholarship to work in the UK. From 1998 to 2001 he gained invaluable work experience in London at Prue Leith’s Restaurant in Notting Hill (1 Michelin star) and at the Capital Hotel in Knightbridge (2 Michelin stars).',
						'During 2002 and 2003 Mat was Executive Chef at Otto’s Restaurant in Auckland (Mat was awarded Metro Restaurant of the Year during his tenure here). In 2004 Mat travelled to Melbourne and worked as Head Chef at the Middle Bite and Bar (a 1 hat restaurant).',
						'Upon his return to New Zealand he opened Palate Restaurant in February 2005.',
						'Mat has been a Beef and Lamb Ambassador since 2009.'
					],
					'dish' : 'Final’s Dish',
					'details' : [
						'Silver Fern Farms Reserve eye fillet and slow cooked short rib, smoked kumara, shitaki salad, baby turnip, soy chilli butter.'
					],
					'judge' : [
						//'Reserve eye-fillet and slow cooked short rib',
						'“A creative dish that showed the skills of the chef perfectly from picture perfect presentation to a mouth-watering and ultimately satisfying last mouthful.” <strong>– Judge</strong>'
					]
				},
				{
					'chefName' : 'Robert Richardson',
					'restaurant' : 'Molten',
					'url' : ['molten.co.nz', 'http://molten.co.nz/'],
					'cut' : 'silere',
					'bio' : [
						'I have worked in a number of leading New Zealand restaurants such as Icon @ Te Papa with Peter Thornley, The Hunting Lodge with Geoff Scott and Martin Bosley’s and Kermadec to name a few.',
						'I’m a big believer of using seasonal produce sourced directly from the grower and allowing the produce to star i.e. not letting the chef’s muck around with it too much!'
					],
					'dish' : 'Final’s Dish',
					'details' : [
						'Slow-roasted SILERE alpine origin merino lamb rump with eggplant purée, peas, fior di latte & white anchovy.',
						'The SILERE lamb rump is slow roasted at a low temperature, and features accompanying produce which is at its peak this time of year – peas and eggplant. The peas are dressed with a mixture of mint, basil, parsley and lemon to add flavour and brightness to the dish. The fior di latte adds another textural element, while the white anchovy fillets and lamb are a classic pairing throughout the Mediterranean.'
					],
					'judge' : [
						//'Slow-roasted SILERE alpine origin merino lamb rump',
						'“It was mouth-wateringly good, a triumph of skill and innovation that resulted in an honest and appetising, well-orchestrated symphony of taste and texture.” <strong>– Judge</strong>'
					]
				},
				{
					'chefName' : 'Scott Corbett',
					'restaurant' : 'Pepper Tree Restaurant',
					'url' : ['peppertreerestaurant.co.nz', 'http://www.peppertreerestaurant.co.nz/'],
					'cut' : 'sff-venison',
					'bio' : [
						'I was drawn to the Coromandel over a decade ago for its fishing, beaches and the idea of a cold beer while enjoying them both.',
						'My passion for local ingredients, combined with the region’s abundance of fresh seafood, game & produce has resulted in the creativity of dishes that have been multi-award winning.',
						'My simple, no fuss philosophy combined with creativity has made for much success at the Pepper Tree.'
					],
					'dish' : 'Final’s Dish',
					'details' : [
						'“One Bittersweet Fallow”:',
						'Silver Fern Farms Cervena venison cutlet served medium-rare with blackberry & tamarillo jelly, venison liver paté, almond crusted kumara, walnuts, witlof salad and syrah jus.',
						'This has been a great opportunity to create a unique dish not normally offered on our restaurant menus.'
					],
					'judge' : [
						//'Rack of Silver Fern Farms venison',
						'“It was sublime, perfect balance and really well done. Not just good but very, very good.” <strong>– Judge</strong>'
					]
				},
				{
					'chefName' : 'Sebastian Koburg',
					'restaurant' : 'Saggio Di Vino',
					'url' : ['saggiodivino.co.nz', 'http://www.saggiodivino.co.nz/'],
					'cut' : 'silere',
					'bio' : [
						'I was born in Berlin literally a stones throw from the wall and grew up with four siblings and down to earth food from my catholic mother - who was the one who put me in a kitchen in the first place.',
						'I met my partner, a maitre´ d, 14 years ago and started to travel & work extensively through Europe and Asia, including work experience from cooking in Swiss Alp resorts to being the concert tour chef of the Red Hot Chilli Peppers.',
						'My son Levin, now 6 years old, who was made in New Zealand but born in Berlin, was one reason we came back to New Zealand for a change of lifestyle.',
						'I have been working as Head Chef at Saggio di vino for 18 months now and enjoying the huge palate of mother-natures products this country has to offer.'
					],
					'dish' : 'Final’s Dish',
					'details' : [
						'SILERE alpine origin merino french lamb rack – pan fried and baked in the oven till medium.   Sweet & sour kumara - diced and cooked with shallots, chilli, lime leaves, New Zealand honey, chardonnay vinegar and finished with coriander. Braised chicory with olive oil, butter, orange and juniper berries and sage jus cooked out of beef bones and lamb trimmings & fresh sage.',
						'The inspiration for my dish comes from the meat itself - lamb with the slightly sweet taste accompanied by honey, sage and shallots sweetness and the slightly sour and bitter taste accompanied by vinegar and chicory. There is also a spring and summer warm kick from kaffir leaves and coriander. I chose the lamb rack because I like it when guests have to use their hands to eat and really touch the meat.'
					],
					'judge' : [
						//'SILERE alpine origin merino rack of lamb',
						'“Visually and aromatically this was gorgeous; you could smell the plate of food as it travelled from kitchen to table rich, lifted, savoury and delicious.” <strong>– Judge</strong>'
					]
				},
				{
					'chefName' : 'Shaun Clouston',
					'restaurant' : 'Logan Brown',
					'url' : ['loganbrown.co.nz', 'http://www.loganbrown.co.nz/'],
					'cut' : 'reserve',
					'bio' : [
						'Head Chef of Wellington’s Logan Brown Restaurant & Bar since 2006,   Shaun studied and worked in New Zealand for several years, including four years at Logan Brown in the late nineties, before moving to Sydney where, during five years, he cooked at La Grillade, Infusion@333 and Wildfire restaurants.  In 2006, Shaun was approached by Logan Brown Restaurant owners, Steve Logan and Alister Brown, to rejoin the restaurant as their Head Chef.  In 2008 Shaun became a business partner at Logan Brown.',
						'Shaun’s philosophy on food and cooking is to serve classical but skilfully cooked dishes, using good techniques, to create a consistent result every time; and using the best local, seasonal ingredients you can get your hands on. Paramount to all of this is the use of ethical and environmentally friendly producers and suppliers.',
						'Logan Brown has earned its reputation as one of New Zealand’s finest restaurants by staying consistent to the philosophy of cooking generous, full-flavoured and honest food – a philosophy which Shaun also shares.   “And we are far more seasonal in New Zealand than in other parts of the world, where most products are available year round, so we have a constantly evolving menu here” - as new ingredients come into season we tweak and introduce new dishes to the menu, often on a weekly basis.'
					],
					'dish' : 'Final’s Dish',
					'details' : [
						'Silver Fern Farms Reserve beef rump cooked medium rare, with slowly braised short rib marinated in pear juice and soy. Served with grilled barley cake and Korean inspired flavours.',
						'For this Reserve beef dish, I used two of my favorite beef cuts, the rump cap and short rib. I have been inspired by Korean chefs that I have worked with in my travels and really loved the fresh flavours of Kim Chi, sesame leaf and black garlic. The Reserve rump cap was simply cooked to medium rare to showcase its flavour and tenderness. The short rib was marinated in pear juice and soy beforebeen slowly braised.  Then served with a grilled barley cake and a combination of the previously mention Korean inspired flavours.'
					],
					'judge' : [
						//'Reserve beef rump and braised short ribs',
						'“It was very clear we were being served Reserve beef rump and short rib that had been treated with appropriate understanding and respect.” <strong>– Judge</strong>'
					]
				}
			]

		}, // end of setting obj

		json: function($type){

			var $request = 'json/' + $type + '.json';

			$.getJSON($request, function($json){

				console.log('successfully got ' + $type + ' data');
				console.log($json);

				$m.s.json[$type] = $json; // save json data
				$m.init[$type]();

			}).fail(function(){

				console.log('failed to get ' + $type + ' data');

			});

		}, // end of json

		svgTest : function(){

			if (Modernizr.svg){ // check with Modernizer if the current broswer supports SVG (if yes then we can animate with TweenMax for all map interactivity)

				return true;

			}else{

				return false;

			} // end of if statement

		}, // end of svgTest fnc

		ltIe9 : function(){

			var $ltIe9 = $('html').hasClass('lt-ie9');

			//console.log('$ltIe9 = ' + $ltIe9);

			return $ltIe9;

		}, // end of ltIe9 fnc

		inputType : {

			listeners : {

				touch : function(){

					//console.log('testing for touch...');

					$('body')
						.on('touchstart.usingTouch', function(){ // if the body is effected by a touch then do not execute the dynamic mouse scrolling from the 'mousemove' function on the $chfCon...

							$m.inputType.actions.touch();

						});

				}, // end of touch obj

				mouse : function(){

					//console.log('adding mouse listener...');

					$('body')
						.on('mousemove.usingMouse', function(){ // if the body is effected via ouse then execute the dynamic mouse scrolling from the 'mousemove' function on the $chfCon...

							$m.inputType.actions.mouse();

						});

				} // end of mouse obj

			}, // end of listeners obj

			actions : {

				touch : function(){

					//console.log('testing for touch...');

					var $chfCon = $('.chef-container');

					$m.s.touch = true;

					$chfCon
						.find('.scroll-container')
						.css({'overflow-x' : 'scroll'}); // ...and set the scroll container to scroll in the x-axis so that the content can be panned with a finger and clicking on a li will not jump the ul to the dynamic scroll location
					
					$chfCon
						.find('.scroll')
						.css({'pointer-events' : 'auto'});

					$('body').off('.usingTouch');

					$m.inputType.listeners.mouse();


				}, // end of touch obj

				mouse : function(){

					//console.log('change to mouse UI...');

					var $chfCon = $('.chef-container');

					$m.s.touch = false;

					$('.chef-container')
						.find('.scroll-container')
						.css({'overflow-x' : 'hidden'}); // ...and set the scroll container to scroll in the x-axis so that the content can be panned with a finger and clicking on a li will not jump the ul to the dynamic scroll location
					
					$chfCon
						.find('.scroll')
						.css({'pointer-events' : 'none'});

					$('body').off('.usingMouse');

					$m.inputType.listeners.touch();

				} // end of mouse obj

			} // end of actions obj

		}, // end of inputType obj

/*
                 _                
 _ _  ___  __ _ (_) ___  _ _   ___
| '_|/ -_)/ _` || |/ _ \| ' \ (_-<
|_|  \___|\__, ||_|\___/|_||_|/__/
          |___/
*/

		regions : {

			init : function(){

				var $r    = new Raphael('paper', 500, 500), // initializes Raphael on the #paper DOM element
					$json = $m.s.json.entry,
					$len  = $json.length, // find out how many regions there are in the data array
					$attr = { // set the generic attributes that the Raphael svg / vml shapes will take on
						'fill' : 'gray',
						'stroke' : 'none',
						'opacity' : '0' // hide shape as it will be used as for hit detaction only - a raster 'sketch' version of the map will be used as the aesthetic...
					},
					$mc = $('.map-container'), // reference the map container DOM element...
					$rm = $mc.find('.region-map'), // from the above DOM reference find the region map -> this will be used to select all map shapes / the active shape and the over shape...
					$rl = $mc.find('.region-list'), // from the above DOM reference find the region list -> this will be used to select all li / the active li and the over li...
					//$si = $mc.find('.slider-images'), // from the above DOM reference find the slider images div -> this will be used to tween the bg image on region mouseenter...
					$ani = $m.s.ani,
					$i, $path, $map, $li, $lnd; // nulls that will be filled in later

				for($i = 0; $i < $len; $i++){ // loop though each of the map regions...

					$path = $json[$i].path; // fetch path data from stored data inside the setting obj

					$map = $r.path($path).attr($attr); // add the path data to the Raphael obj
					$li = $rl.find($('li[data-num="' + $i + '"]')); // find the current list item
					$lnd = $rm.find('.land-mass').find($('li[data-num="' + $i + '"]')); // find the current land mass

					// run the listeners for the map and list element for the region in the current loop state
					$m.regions.listeners.map($map, $rm, $rl, $li, $lnd, $i, $ani); // Raphael listeners...
					$m.regions.listeners.list($rm, $rl, $li, $lnd, $i, $ani); // jQuery listeners...

				} // end of for loop

			}, // end of init fnc

			listeners : {

				map : function($map, $rm, $rl, $li, $lnd, $i, $ani){

					$map.node.onclick = function(){ // set the Raphael on click event...

						$m.regions.actions.onclick($i);

					};

					$map.node.onmouseover = function(){ // set the Raphael on mouseover event...

						$m.regions.actions.onmouseenter($rm, $rl, $li, $i, $lnd, $ani);

					};

					$map.node.onmouseout = function(){ // set the Raphael on mouseout event...

						$m.regions.actions.onmouseleave($rm, $rl, $i, $lnd, $ani);

					};

				}, // end of map fnc

				list : function($rm, $rl, $li, $lnd, $i, $ani){

					$li.on('click', function(){

						$m.regions.actions.onclick($i);

					}).on('mouseenter', function(){

						$m.regions.actions.onmouseenter($rm, $rl, $li, $i, $lnd, $ani);

					}).on('mouseleave', function(){

						$m.regions.actions.onmouseleave($rm, $rl, $i, $lnd, $ani);

					});

				} // end of list fnc

			}, // end of listeners fnc

			actions : {

				onclick : function($i){

					//alert('svg = ' + $m.s.svg);
					// if ie8
						//$map.attr("fill", "red");

					// else
						// TweenMax

					//console.log('click $i = ' + $i);

					//$map.attr("fill", "red");

					//$li.css({'color' : '#000000'});

					$m.s.atvReg = $i; // set the current region reference -> used for mouseenter code below...

					$m.chefs.popData($i); // populate the chef section with data from the selected region...

					if($m.s.$ltIe9){ // change to if($m.s.$ltIe9){

						$('.chef-container')
							.find('ul')
							.attr({'data-seg' : '1'});

					} // end of if statement

				}, // end of onclick

				onmouseenter : function($rm, $rl, $li, $i, $lnd, $ani){

					// set DORMANT states...
					//TweenMax.to($rm.find('li'), $ani, {'opacity' : '0'}); // ALL land masses are faded out
					$rm.find('li').stop().animate({'opacity' : '0'}, 250); // using jQuery animate instead of the TweenMax code above as it would not work with IE8
					TweenMax.to($rl.find('li'), $ani, {'color' : $m.s.col.lytGray}); // ALL list items are faded out

					// set ENTER state...
					//TweenMax.to($lnd, $ani, {'opacity' : '1'}); // current land mass set to full opacity
					$lnd.stop().animate({'opacity' : '1'}, 250); // using jQuery animate instead of the TweenMax code above as it would not work with IE8
					TweenMax.to($li, $ani, {'color' : $m.s.col.medBrown}); // current list item set to brown

					//TweenMax.to($si, ($ani * 5), {'left' : ($i * -900)+ 'px'});

					$('body').css({'cursor' : 'pointer'}); // change the cursor to pointer (makes the land mass svg / vml elements seem un-block like)

				}, // end of onclick

				onmouseleave : function($rm, $rl, $i, $lnd, $ani){

					var $atvReg = $m.s.atvReg;
			
					// set DORMANT states...
					//TweenMax.to($lnd, $ani, {'opacity' : '0'}); // ALL land masses are faded out
					$lnd.stop().animate({'opacity' : '0'}, 250); // using jQuery animate instead of the TweenMax code above as it would not work with IE8
					TweenMax.to($rl.find('li'), $ani, {'color' : $m.s.col.medGray}); // ALL list items are faded out

					// set ACTIVE state...
					//TweenMax.to($rm.find($('li[data-num="' + $atvReg + '"]')), $ani, {'opacity' : '1'}); // active land mass set to full opacity
					$rm.find($('li[data-num="' + $atvReg + '"]')).stop().animate({'opacity' : '1'}, 250); // using jQuery animate instead of the TweenMax code above as it would not work with IE8
					TweenMax.to($rl.find($('li[data-num="' + $atvReg + '"]')), $ani, {'color' : $m.s.col.medBrown}); // active list item set to brown

					$('body').css({'cursor' : 'default'}); // change the cursor back to default

				} // end of onclick

			} // end of actions obj

		}, // end of create map fnc

/*
  __  _              _  _      _       
 / _|(_) _ _   __ _ | |(_) ___| |_  ___
|  _|| || ' \ / _` || || |(_-<|  _|(_-<
|_|  |_||_||_|\__,_||_||_|/__/ \__|/__/

*/

		finalists : {

			init : function(){

				var $fc = $('.finalists-container');

				$m.finalists.listeners($fc);
				$m.finalists.popData.init($fc);

			}, // end of init fnc

			listeners : function($fc){

				var $ani = $m.s.ani;

				$fc.on('click', '.nominee', function(){

					//console.log('nominee clicked!');

					$m.finalists.actions.onclick($(this));

				}).on('mouseenter', '.nominee', function(){

					//console.log('nominee entered!');

					$m.finalists.actions.onmouseenter($(this), $ani);

				}).on('mouseleave', '.nominee', function(){

					//console.log('nominee leave!');

					$m.finalists.actions.onmouseleave($(this), $ani);

				});

			},  // end of listeners

			actions : {

				onclick : function($this){

					var $chf = $this.attr('data-chef');

					$m.s.modal.chf = $chf; // add the chef reference to the modal object (for using the left and right buttons on the modal UI)
					$m.s.modal.state = 'finalists';

					$('.modal').find('.data')
						.css({'min-height' : '790px'})
						.html($m.modal.populate.finalists($chf));

					$m.modal.actions.rndBtn.state.finalists($chf, 10); // modify the states of the left and right buttons to active / inactive if need be

					$m.modal.position('finalists');

				}, // end of onclick fnc

				onmouseenter : function($this, $ani){

					var $img = $this.find('.image'),
						$shd = $this.find('.shadow');

					TweenMax.to($img, $ani, {'top' : '0', 'scale' : '1.1'});
					TweenMax.to($shd, $ani, {'opacity' : '1', 'scale' : '1.1'});

				}, // end of onmouseenter

				onmouseleave : function($this, $ani){

					var $img = $this.find('.image'),
						$shd = $this.find('.shadow');

					TweenMax.to($img, $ani, {'top' : '20px', 'scale' : '1'});
					TweenMax.to($shd, $ani, {'opacity' : '0.5', 'scale' : '1'});

				} // end of onmouseleave

			}, // end of actions obj

			popData : {

				init : function($fc){

					var $finDat = $m.s.finDat,
						$finDatLen = $finDat.length,
						$html = '',
						$i;

					for($i = 0; $i < $finDatLen; $i++){

						//console.log('--> bio = ' + $finDat[$i].bio);
						//console.log('--> details = ' + $finDat[$i].details);

						$html += '<li class="nominee" data-chef="' + $i + '">' +
									'<div class="image" style="background-position: ' + ($i * -80) + 'px 0"></div>' +
									'<div class="shadow"></div>' +
									'<div class="copy-block">' +
										'<h3>' + $finDat[$i].chefName + '</h3>' +
										'<h3 class="restaurant">(' + $finDat[$i].restaurant + ')</h3>' +
										$m.finalists.popData.paraLoop($finDat[$i].bio) +
										'<h3>Final’s Dish</h3>' +
										$m.finalists.popData.paraLoop($finDat[$i].details) +
										'<div class="gradient"></div>' +
									'</div>' +
								'</li>';

					} // end of for loop

					$fc.html($html);

				}, // end of init fnc

				paraLoop : function($dat){

					var $datLen = $dat.length,
						$html = '',
						$i;

					for($i = 0; $i < $datLen; $i++){

						$html += '<p>' + $dat[$i] + '</p>';

					} // end of for loop

					return $html;

				} // end of paraLoop fnc

			} // end of popData fnc

		}, // end of finalists obj

/*
     _           __     
 __ | |_   ___  / _| ___
/ _|| ' \ / -_)|  _|(_-<
\__||_||_|\___||_|  /__/

*/

		chefs : {

			init : function($i){

				var $chfCon = $('.chef-container');

				$m.chefs.popData($i, $chfCon);
				$m.chefs.listeners($chfCon);

			}, // end of init fnc

			popData : function($i, $chfCon){

				var $wth = 0, // the ul width that will be the exact length to hold all of the created chef li's...
					$li  = '', // shell for housing the list data
					$ani = $m.s.ani,
					$json = $m.s.json.entry,
					$j, $entDat, $regLen, $chfLen, $ran, $ul, $srlCon; // nulls to populate later
				
				if(isNaN($i)){ // if $i has not been defined then this is the first time that the chefs are being populated... in that regard chefs ALL regions will reside inside the ul via random population

					$ran = true;

				}else{

					$ran = false;

				} // end of if statement

				$m.s.modal.random = $ran;

				if($ran){ // if $i has not been defined then this is the first time that the chefs are being populated... in that regard chefs ALL regions will reside inside the ul
					
					$i = 0; // set $i to zero as chefs in ALL regions will be displayed
					
					$regLen = $json.length; // set the region loop length to be = to the anount of regions in the data set

				}else{ // if $i has been defined then we will populate teh chefs from the used selected region... $i will = the region array reference with the loop length being $i + 1 so that it will run only once

					$chfCon = $('.chef-container'); // set the DOM reference as it will not be pulled though from the init()
					
					$regLen = $i + 1; // set the region loop length to run the loop only ONCE!

					/*$('.modal')
						.find('.buttons')
						.find('.direction')
						.css({'display' : 'block'});*/

				} // end of if statement

				// the chef population for the ul is based on two for loops... the first one based on looping $i is for the initial load when we populate the ul with chefs from ALL regions in the ul
				// in that regard we start at zero and loop though each region set in the array
				// if there is only a single specific region set to loop though $i will = the region array reference with the loop length being $i + 1 so that it will run only once
				for($i; $i < $regLen; $i++){

					$entDat = $json[$i].chefs; // get the data from selected region

					// set non random parameters...
					$chfLen = $entDat.length; // find the loop length for the entry in the current region
					$j = 0; // loop will start at the begining of the array

					if($ran){

						$j = $m.chefs.randomNum(0, ($chfLen - 2)); // loop will start at the begining of the array
						$chfLen = $j + 2;

					} // end of if statement

					//console.log('$dat = ' + $dat);

					for($j; $j < $chfLen; $j++){ // loop though the region data and populate the li...

						$li +=  '<li data-region="' + $i + '" data-chef="' + $j + '">' + // open li element
								'<div class="shadow"></div>' +
								//'<img src="img/_temp-placeholder-.jpg" alt="' + $dat[$j][8] + '">' +
								//'<div class="image" style="background-position:' + (0 * -100) + 'px 0;"></div>' +
								// '<div class="image"></div>' +
								'<img class="image" src="img/entrants/' +  $entDat[$j][14] + '.jpg">' +
								'<h3>' + $entDat[$j][1] + '</h3>';

						if($entDat[$j][5] !== ''){ // if there is A DISH NAME stipulated in the entry data...

							$li +=  '<h4>' + $entDat[$j][5] + '</h4>';

						}else{ // if there is NO DISH NAME stipulated in the entry data...

							$li +=  '<h4>' + $entDat[$j][7] + '</h4>'; // then subsitute the description for the cut name

						} // end of if statement

						if($entDat[$j][8] !== ''){ // if there is A DESCRIPTION stipulated in the entry data...

							$li +=  '<span>' + $entDat[$j][8] + '</span>';

						}else{ // if there is NO DESCRIPTION stipulated in the entry data...

							// $li +=  '<span>' + $entDat[$j][1] + ' ' + $entDat[$j][2] + '</span>'; // then subsitute the description for the chef name

						} // end of if statement

						$li +=  '<div class="gradient"></div>' + // set as DOM element and not pseudo element due to IE8
								'</li>'; // close li element

						$wth++; // +1 onto the ul width as the li counter increases during the two loop sequences...

					} // end of for loop

				} // end of for loop

				$wth = ($wth + 2) * 235; // find the new width of the ul by multiplying the li width (235px) be the ammount of li

				$m.s.ulWth = $wth; // store the ul width in the global settings to reference when animating the dynamic scroll with TweenMax

				if($wth > 960){ // if there are more than 4 li inside the chef-container

					$m.s.chefScroll = true; // then allow the ul to scroll
					
					$chfCon
						.find('.scroll')
						.css({'display' : 'block'}); // show the scroll buttons

				}else{

					$m.s.chefScroll = false; // do not allow the ul to scroll

					$chfCon
						.find('.scroll')
						.css({'display' : 'none'}); // hide the scroll buttons

				} // end of if statement

				$ul = $chfCon.find('ul'); // select the DOM element

				$ul.css({'width' : $wth + 'px'}) // set the length of the ul to match the number of li taht it will house
					.html($li); // add in the $li content generated from the for loop

				if(!$ran){ // if this is not the fist chef population then we need to tween the scroll container back into place as well as fade in the chef entries into view

					$m.chefs.loader.addAnimation($chfCon);
					$srlCon = $chfCon.find('.scroll-container');

					TweenMax.to($srlCon, ($ani * 5), {'scrollLeft' : -235}); // send the scroll container back to the start of the list (leaving a bit of padding as per usual)

					for($i = 0; $i < 3; $i++){ // loop through the first three chef entries and fade them into view (stops the harsh append transition - as it sometimes looks like the content has not been repopulated with the new region data)

						TweenMax.from($srlCon.find($('li[data-chef="' + $i + '"]')), $ani, {'opacity' : '0', 'delay' : ($ani / 2 * $i)}); // fade in from 0% to 100% opacity - adding in a slight delay that is half the animation length to get a slight stagnation effect
						
						/* TweenMax.fromTo($srlCon.find($('li[data-chef="' + $i + '"]')), $ani * 3, {
							'opacity' : '0',
							'transform': 'scale(0.5)'
						},{
							'opacity' : '1',
							'transform': 'scale(1)',
							'delay' : ($ani / 4 * $i)
						}); */

						TweenMax.delayedCall(0.5, $m.chefs.loader.removeAnimation, [$chfCon]);

					} // end of for loop

					$m.s.modal.chfLen = $chfLen; // add the chef length to the modal object for future reference (using the left and right buttons on the modal UI)

				} // end of if statement

			}, // end of popChef fnc

			loader: {

				addAnimation: function($chfCon){

					$chfCon.addClass('loading');
					
				},

				removeAnimation: function($chfCon){

					$chfCon.removeClass('loading');
					
				}

			}, // end of loader

			randomNum : function($from, $to){

				return Math.floor(Math.random() * ($to - $from + 1) + $from);

			}, // end of randomNum fnc

			listeners : function($chfCon){

				var $ani = $m.s.ani,
					$ltIe9 = $m.s.ltIe9;

				if(!$ltIe9){

					$chfCon
						/*.on('touchstart', function(){ // if the $chfCon is effected by a touch then do not execute the dynamic mouse scrolling from the 'mousemove' function below...

							$m.s.chefScroll = false; // ...instead change the dynamic scroll boolean to false...

							$(this)
								.find('.scroll-container')
								.css({'overflow-x' : 'scroll'}); // ...and set the scroll container to scroll in the x-axis so that the content can be panned with a finger and clicking on a li will not jump the ul to the dynamic scroll location

						})*/
						.on('mousemove', function($e){

							if($m.s.chefScroll && !$m.s.touch){ // if the need to scroll has been set to true (or touch is not enabled) then func the scoll function...

								$m.chefs.actions.tweenScroll($e, $chfCon, $ani);

							} // end of if statement

						});

					$chfCon.find('.rnd-btn')
						.on('touchstart', function(){

							$m.chefs.actions.touch.ontouchstart($(this), $chfCon, $ani);

						});

				}else{

					$chfCon.find('.rnd-btn')
						.on('mouseenter', function(){

							$m.chefs.actions.ltIe9.onmouseenter($(this));

						})
						.on('mouseleave', function(){

							$m.chefs.actions.ltIe9.onmouseleave($(this));

						})
						.on('click', function(){

							$m.chefs.actions.ltIe9.onclick($(this), $chfCon, $ani);

						});
				} // end of if statement

				$chfCon.find('ul')
					.on('click', 'li', function(){

						$m.chefs.actions.li.onclick($(this), $ani);

					})
					.on('mouseenter', 'li', function(){

						$m.chefs.actions.li.onmouseenter($(this), $ani);

					})
					.on('mouseleave', 'li', function(){

						$m.chefs.actions.li.onmouseleave($(this), $ani);

					});
				
			}, // end of listeners fnc

			actions : {

				tweenScroll : function($e, $chfCon, $ani){

					var $mPos = $e.pageX - $chfCon.offset().left,
						$xPer = $mPos / 960,
						$wth = $m.s.ulWth,
						$scrlPos = $xPer * ($wth - 960),
						$scrlCon  = $chfCon.find('.scroll-container'),
						$scrl;

					if($mPos < 50){

						$scrl = $chfCon.find('.scroll[data-dir="left"]');

						//console.log('hide left');

						TweenMax.to($scrl, $ani, {'opacity' : '0', onComplete : hideComplete});

					}else if($mPos > 910){

						$scrl = $chfCon.find('.scroll[data-dir="right"]');

						//console.log('hide right');

						TweenMax.to($scrl, $ani, {'opacity' : '0', onComplete : hideComplete});

					}else{

						$scrl = $chfCon.find('.scroll');

						$scrl.css({'display' : 'block'});

						TweenMax.to($chfCon.find('.scroll'), $ani, {'opacity' : '1'});

					} // end of if statement

					function hideComplete(){

						$scrl.css({'display' : 'none'});

					} // end of enterComplete fnc

					TweenMax.to($scrlCon, ($ani * 5), {'scrollLeft' : $scrlPos});

				}, // end of tweenScroll fnc

				li : {

					onclick : function($this, $ani){

						var $reg = $this.attr('data-region'),
							$chf = $this.attr('data-chef'),
							// $src = $this.find('img').attr('src'),
							$mod = $('.modal');

						$m.s.modal.reg = $reg; // add the region reference to the modal object (for using the left and right buttons on the modal UI)
						$m.s.modal.chf = $chf; // add the chef reference to the modal object (for using the left and right buttons on the modal UI)
						$m.s.modal.state = 'entries';

						$mod.find('.data')
							.css({'min-height' : '0'})
							.html($m.modal.populate.entries($reg, $chf));

						$m.modal.actions.rndBtn.state.entries($chf, $m.s.modal.chfLen); // modify the states of the left and right buttons to active / inactive if need be

						$m.modal.position('entries');

					}, // end of onclick fnc

					onmouseenter : function($this, $ani){

						TweenMax.to($this.find('.image'), $ani, {
							'top' : '-20px'
							//'boxShadow':'0px 20px 30px 0 rgba(0, 0, 0, 0.25)'
						});

						TweenMax.to($this.find('.shadow'), $ani, {
							'opacity' : '1'
						});

					}, // end of onmouseenter fnc

					onmouseleave : function($this, $ani){

						TweenMax.to($this.find('.image'), $ani, {
							'top' : '0'
							//'boxShadow':'0px 5px 15px 0 rgba(0, 0, 0, 0.5)'
						});

						TweenMax.to($this.find('.shadow'), $ani, {
							'opacity' : '0.5'
						});

					} // end of onmouseleave fnc

				}, // end of li obj

				ltIe9 : {

					onmouseenter : function($this){

						/*TweenMax.to($this, $ani, {
							'background-color' : $m.s.col.medBrown,
							'border' : '1px solid white'
						});*/

						$this.css({ // the above TweenMax does not work in IE8 and is now changed via straignt css with jQuery
								'background-color' : $m.s.col.medBrown,
								'border' : '1px solid white'
							});

					}, // end of onmouseenter fnc

					onmouseleave : function($this){

						/*TweenMax.to($this, $ani, {
							'background-color' : $m.s.col.medGray,
							'border' : '1px solid ' + $m.s.col.drkGray
						});*/

						$this.css({ // the above TweenMax does not work in IE8 and is now changed via straignt css with jQuery
								'background-color' : $m.s.col.medGray,
								'border' : '1px solid ' + $m.s.col.drkGray
							});

					}, // end of onmouseleave fnc

					onclick : function($this, $chfCon, $ani){

						var $dir = $this.parent().attr('data-dir'),
							$scrlCon  = $chfCon.find('.scroll-container'),
							$curSeg = $scrlCon.attr('data-seg'),
							$totSeg = ($m.s.ulWth / 235) - 4; // <----- minus 4 for the content on screen????

						if($dir === 'left'){

							if($curSeg > 0){

								$curSeg--;

							} // end of if statement

						}else{

							if($curSeg < $totSeg){

								$curSeg++;

							} // end of if statement

						} // end of if statement

						TweenMax.to($scrlCon, ($ani * 5), {'scrollLeft' : ($curSeg * 235)});

						$scrlCon.attr({'data-seg' : $curSeg});

					} // end of onclick

				}, // end of ltIe9 onj

				touch : {

					ontouchstart : function($this, $chfCon, $ani){

						var $dir = $this.parent().attr('data-dir'),
							$scrlCon = $chfCon.find('.scroll-container');

						if($dir === 'left'){

							//console.log('***LEFT***');

							TweenMax.to($scrlCon, $ani, {'scrollLeft' : '-=235'});

						}else{

							//console.log('***RIGHT***');

							TweenMax.to($scrlCon, $ani, {'scrollLeft' : '+=240'});

						} // end of if statement

					} // end of ontouchstart fnc

				} // end of touch obj

			} // end of actions obj

		}, // end of chefs obj

/*
                _        _ 
 _ __   ___  __| | __ _ | |
| '  \ / _ \/ _` |/ _` || |
|_|_|_|\___/\__,_|\__,_||_|
                           
*/

		modal : {

			init : function(){

				var $mod = $('.modal');

				$m.modal.listeners($mod);

			}, // end of init fnc

			listeners : function($mod){

				var $ani = $m.s.ani;

				$mod.find('.rnd-btn')
					.on('mouseenter', function(){

						$m.modal.actions.rndBtn.onmouseenter($(this), $ani);

					})
					.on('mouseleave', function(){

						$m.modal.actions.rndBtn.onmouseleave($(this), $ani);

					});

				// -----

				$mod.find('.close')
					.on('click', function(){

						$m.modal.actions.closeBtn.onclick($(this), $mod, $ani);

					});

				// -----

				$mod.find('.left')
					.on('click', function(){

						if($m.s.modal.state === 'entries'){

							$m.modal.actions.leftBtn.onclick.entries($mod, $ani);

						}else if($m.s.modal.state === 'finalists'){

							$m.modal.actions.leftBtn.onclick.finalists($mod, $ani);

						} // end of if statement

					});

				// -----

				$mod.find('.right')
					.on('click', function(){

						if($m.s.modal.state === 'entries'){

							$m.modal.actions.rightBtn.onclick.entries($mod, $ani);

						}else if($m.s.modal.state === 'finalists'){

							$m.modal.actions.rightBtn.onclick.finalists($mod, $ani);

						} // end of if statement

					});

			}, // end of listeners fnc

			actions : {

				rndBtn : {

					onmouseenter : function($this, $ani){

						$this.css({
								'background-color' : $m.s.col.medBrown,
								'border' : '1px solid white'
							}, 250);

						/*if(!$m.s.ltIe9){ // TweenMax does not work in this situation with IE8 so animate for newer browsers...

							TweenMax.to($this, $ani, {
								'background-color' : $m.s.col.medBrown,
								'border' : '1px solid white'
							});

						}else{ // ...and set css with jQuery

							$this.css({
									'background-color' : $m.s.col.medBrown,
									'border' : '1px solid white'
								});

						} // end of if statement*/

					}, // end of onmouseenter fnc

					onmouseleave : function($this, $ani){

						$this.css({
								'background-color' : $m.s.col.medGray,
								'border' : '1px solid ' + $m.s.col.drkGray
							}, 250);

						/*if(!$m.s.ltIe9){ // TweenMax does not work in this situation with IE8 so animate for newer browsers...

							TweenMax.to($this, $ani, {
								'background-color' : $m.s.col.medGray,
								'border' : '1px solid ' + $m.s.col.drkGray
							});

						}else{ // ...and set css with jQuery

							$this.css({
									'background-color' : $m.s.col.medGray,
									'border' : '1px solid ' + $m.s.col.drkGray
								});

						} // end of if statement*/

					}, // end of onmouseleave fnc

					state : {

						entries : function($chf, $chflen){

							var $btns = $('.modal').find('.buttons'),
								$left = $btns.find('.left'), // get left button
								$right = $btns.find('.right');// get right button

							//console.log('random value from global settings = ' + $m.s.modal.random);

							if($m.s.modal.random){

								//console.log('random number = true!');

								$left.css({'display' : 'none'});
								$right.css({'display' : 'none'});

								return ''; // break the statement as no modifications to the left and right buttons are needed (as they are now hidden)

							} // end of if statement

							$left.css({'display' : 'block'});
							$right.css({'display' : 'block'});

							if($chf <= 0){

								$left.css({'opacity' : '0.25'}); // change to inactive
								$right.css({'opacity' : '1'}); // change to active

							}else if($chf >= ($chflen - 1)){

								$left.css({'opacity' : '1'}); // change to active
								$right.css({'opacity' : '0.25'}); // change to inactive

							}else{

								$left.css({'opacity' : '1'}); // change to active
								$right.css({'opacity' : '1'}); // change to active

							} // end of if statement

						}, // end of entries fnc

						finalists : function($chf, $chflen){

							var $btns = $('.modal').find('.buttons'),
								$left = $btns.find('.left'), // get left button
								$right = $btns.find('.right');// get right button

							$left.css({'display' : 'block'});
							$right.css({'display' : 'block'});

							if($chf <= 0){

								$left.css({'opacity' : '0.25'}); // change to inactive
								$right.css({'opacity' : '1'}); // change to active

							}else if($chf >= ($chflen - 1)){

								$left.css({'opacity' : '1'}); // change to active
								$right.css({'opacity' : '0.25'}); // change to inactive

							}else{

								$left.css({'opacity' : '1'}); // change to active
								$right.css({'opacity' : '1'}); // change to active

							} // end of if statement

						} // end of finalists fnc

					} // end of state obj

				}, // end of rndBtn obj

				closeBtn : {

					onclick : function($this, $mod, $ani){

						TweenMax.to($mod, $ani, {'opacity' : '0', onComplete : clickComplete});

						function clickComplete(){

							$mod.css({'display' : 'none'});

						} // end of clickComplete fnc

					}, // end of onclick fnc

				}, // end of close obj

				leftBtn : {

					onclick : {

						entries : function($mod, $ani){

							var	$reg = $m.s.modal.reg, // get the region reference from the modal object
								$chf = $m.s.modal.chf, // get the chef reference from the modal object
								$modDat = $mod.find('.data');

							if($chf <= 0){ // if there is no more chef entries to pass in --> i.e. the end of the line then do no NOTHING!

								return '';

							} // end of if statement

							$chf--; // add one onto the chef reference to get new value

							$m.s.modal.chf = $chf; // store that new value back into the modal object

							TweenMax.to($modDat, $ani, {'left' : '-20px', 'opacity' : '0', onComplete : clickComplete}); // animate the content off to the left

							function clickComplete(){

								$modDat
									.css({'min-height' : '0'})
									.html($m.modal.populate.entries($reg, $chf)); // populate the modal data

								TweenMax.set($modDat, {'left' : '20px'}); // set the new content off to the right
								TweenMax.to($modDat, $ani, {'left' : '0', 'opacity' : '1'}); // animate the content in from the right

							} // end of clickComplete fnc

							$m.modal.actions.rndBtn.state.entries($chf); // modify the states of the left and right buttons to active / inactive if need be
						
						}, // end of entries fnc

						finalists : function($mod, $ani){

							var	$chf = $m.s.modal.chf, // get the chef reference from the modal object
								$modDat = $mod.find('.data');

							if($chf <= 0){ // if there is no more chef entries to pass in --> i.e. the end of the line then do no NOTHING!

								return '';

							} // end of if statement

							$chf--; // add one onto the chef reference to get new value

							$m.s.modal.chf = $chf; // store that new value back into the modal object

							TweenMax.to($modDat, $ani, {'left' : '-20px', 'opacity' : '0', onComplete : clickComplete}); // animate the content off to the left

							function clickComplete(){

								$modDat
									.css({'min-height' : '790px'})
									.html($m.modal.populate.finalists($chf)); // populate the modal data

								TweenMax.set($modDat, {'left' : '20px'}); // set the new content off to the right
								TweenMax.to($modDat, $ani, {'left' : '0', 'opacity' : '1'}); // animate the content in from the right

							} // end of clickComplete fnc

							$m.modal.actions.rndBtn.state.finalists($chf, 10); // modify the states of the left and right buttons to active / inactive if need be

						} // end of finalists fnc

					} // end of onclick obj

				}, // end of left obj

				rightBtn : {

					onclick : {

						entries : function($mod, $ani){

							var	$reg = $m.s.modal.reg, // get the region reference from the modal object
								$chf = $m.s.modal.chf, // get the chef reference from the modal object
								$chflen = $m.s.modal.chfLen, // get the chef length reference from the modal object
								$modDat = $mod.find('.data');

							if($chf >= ($chflen - 1)){ // if there is no more chef entries to pass in --> i.e. the end of the line then do no NOTHING!

								return '';

							} // end of if statement

							$chf++; // add one onto the chef reference to get new value

							$m.s.modal.chf = $chf; // store that new value back into the modal object

							TweenMax.to($modDat, $ani, {'left' : '20px', 'opacity' : '0', onComplete : clickComplete}); // animate the content off to the right

							function clickComplete(){

								$modDat
									.css({'min-height' : '0'})
									.html($m.modal.populate.entries($reg, $chf)); // populate the modal data

								TweenMax.set($modDat, {'left' : '-20px'}); // set the new content off to the left
								TweenMax.to($modDat, $ani, {'left' : '0', 'opacity' : '1'}); // animate the content in from the left

							} // end of clickComplete fnc

							$m.modal.actions.rndBtn.state.entries($chf, $chflen); // modify the states of the left and right buttons to active / inactive if need be

						}, // end of entries fnc

						finalists : function($mod, $ani){

							var	$chf = $m.s.modal.chf, // get the chef reference from the modal object
								$chflen = 10, // get the chef length reference from the modal object
								$modDat = $mod.find('.data');

							if($chf >= ($chflen - 1)){ // if there is no more chef entries to pass in --> i.e. the end of the line then do no NOTHING!

								return '';

							} // end of if statement

							$chf++; // add one onto the chef reference to get new value

							$m.s.modal.chf = $chf; // store that new value back into the modal object

							TweenMax.to($modDat, $ani, {'left' : '20px', 'opacity' : '0', onComplete : clickComplete}); // animate the content off to the right

							function clickComplete(){

								$modDat
									.css({'min-height' : '790px'})
									.html($m.modal.populate.finalists($chf)); // populate the modal data

								TweenMax.set($modDat, {'left' : '-20px'}); // set the new content off to the left
								TweenMax.to($modDat, $ani, {'left' : '0', 'opacity' : '1'}); // animate the content in from the left

							} // end of clickComplete fnc

							$m.modal.actions.rndBtn.state.finalists($chf, 10); // modify the states of the left and right buttons to active / inactive if need be

						} // end of finalists fnc

					} // end of onclick obj

				}, // end of right obj	
			
			}, // end of actions obj

			position : function($loc){

				//console.log('location = ' + $loc);

				var $mod = $('.modal'),
					$ani = $m.s.ani,
					$off;

				if($loc === 'entries'){

					$off = $('.map-container').offset();

				}else if($loc === 'finalists'){

					$off = $('.finalists-container').offset();

				} // end of if statement

				$mod.css({
					'display' : 'block',
					//'top' : $off.top + 'px'
				});

				TweenMax.to($mod, $ani, {'opacity' : '1', 'top' : $off.top + 'px'});


			}, // end of position fnc

			populate : {

				entries : function($reg, $chf){

					var $entDat = $m.s.json.entry[$reg].chefs[$chf],
						$html;

					console.log('reg = ' + $reg + ' chf = ' + $chf);

					$html = '<div class="image" style="background-image:url(img/entrants/' +  $entDat[14] + '.jpg);"></div>' +
							// '<div class="image logo" data-sprite="' + $entDat[12] + '"></div>' +
							//'<div class="image" style="background-position:' + $bgPos + 'px 0px"></div>' +
							'<div class="main-heading">' + $entDat[5];

					if($entDat[6] !== ''){ // if there is A COURSE stipulated in the entry data...

						$html += ' <span class="course oneWord">(' + $entDat[6] + ')</span></div>';

					}else{ // if there is NO COURSE stipulated in the entry data...

						$html += '</div>';

					} // end of if statement
							
					$html += '<h6>Cut Used</h6>' +
							'<div>' + $entDat[7] + '</div>';

					if($entDat[8] !== ''){ // if there is NO DESCRIPTION stipulated in the entry data...

						$html += '<h6>Dish Description</h6>' +
								'<div>' + $entDat[8] + '</div>';

					} // end of if statement

					$html += '<h6>Entrant Name</h6>' +
							'<div>' + $entDat[2] + ' ' + $entDat[3] + ' ' + '<span class="title">(' + $entDat[4] + ')</span>' + '</div>' +
							'<h6>Restaurant</h6>' +
							'<ul>' +
								'<li class="break name">' + $entDat[1] + '</li>' +
								'<li class="bullet break extra-address">' +
									'<ul>' +
										'<li>' + $entDat[9] + '</li>' +
										'<li>' + $entDat[10] + '</li>' +
										'<li>' + $entDat[11] + '</li>' +
									'</ul>' +
								'</li>' +
								'<li class="bullet phone">Ph: ' + $entDat[12] + '</li>';

					if($entDat[13]){

						$html += '<li class="bullet web">Web: <a class="address" href="http://' + $entDat[13] + '" target="_blank">Click here</a></li>';

					} // end of if statement

					$html += '</ul>';

					return $html;

				}, // end of enries fnc

				finalists : function($chf){

					var $finDat = $m.s.finDat,
						$html;

					$html = '<div class="image chef" style="background-position: ' + ($chf * -250) + 'px 0"></div>' +
							'<div class="image logo finalist" data-sprite="' + $finDat[$chf].cut + '"></div>' +
							//'<div class="image finalist"></div>' +
							'<div class="image dish" style="background-position: ' + ($chf * -250) + 'px -350px"></div>' +
							'<h2 class="finalist-chef">' + $finDat[$chf].chefName + '</h2>' +
							'<h3 class="finalist-restaruent">(' + $finDat[$chf].restaurant + ' - ' +
								'<a class="website" href="' + $finDat[$chf].url[1] + '" target="_blank">' + $finDat[$chf].url[0] + '</a>' +
							')</h3>' +
							'<span class="finalist-bio">' + $m.finalists.popData.paraLoop($finDat[$chf].bio) + '</span>' +
							'<h2 class="finalist-dish">Dish</h2>' +
							'<span class="finalist-details">' + $m.finalists.popData.paraLoop($finDat[$chf].details) + '</span>' +
							//'<h2 class="finalist-judge">Judges comment</h2>' +
							'<span class="judge-details">' + $m.finalists.popData.paraLoop($finDat[$chf].judge) + '</span>';

					return $html;

				} // end of finalists fnc

			} // end of populate fnc
		
		}, // end of modal obj

/*
  __             _                   
 / _| ___  __ _ | |_  _  _  _ _  ___ 
|  _|/ -_)/ _` ||  _|| || || '_|/ -_)
|_|  \___|\__,_| \__| \_,_||_|  \___|
                                     
*/

		feature : {

			init : function(){

				var $fi = $('.feature-image');

				$m.feature.listeners($fi);

			}, // end of init fnc

			listeners : function($fi){

				var $ani = $m.s.ani;

				$fi.on('mouseenter', function(){

					//console.log('feature image = enter');

					$m.feature.actions.onmouseenter($fi, $ani);

				}).on('mouseleave', function(){

					//console.log('feature image = leave');

					$m.feature.actions.onmouseleave($fi, $ani);

				});

			}, // end of listeners fnc

			actions : {

				onmouseenter : function($fi, $ani){

					TweenMax.to($fi.find('.snippet0'), $ani, {'left' : '0'});
					TweenMax.to($fi.find('.snippet1'), $ani, {'top' : '0'});
					TweenMax.to($fi.find('.snippet2'), $ani, {'top' : '70px'});
					TweenMax.to($fi.find('.snippet3'), $ani, {'top' : '0'});
					TweenMax.to($fi.find('.snippet4'), $ani, {'top' : '100px'});
					TweenMax.to($fi.find('.snippet5'), $ani, {'top' : '0'});
					TweenMax.to($fi.find('.snippet6'), $ani, {'top' : '0'});
					TweenMax.to($fi.find('.snippet7'), $ani, {'left' : '690px'});
					TweenMax.to($fi.find('.snippet8'), $ani, {'top' : '150px'});

				}, // end of onmouseenter

				onmouseleave : function($fi, $ani){

					TweenMax.to($fi.find('.snippet0'), $ani, {'left' : '-117px'});
					TweenMax.to($fi.find('.snippet1'), $ani, {'top' : '-70px'});
					TweenMax.to($fi.find('.snippet2'), $ani, {'top' : '200px'});
					TweenMax.to($fi.find('.snippet3'), $ani, {'top' : '-100px'});
					TweenMax.to($fi.find('.snippet4'), $ani, {'top' : '200px'});
					TweenMax.to($fi.find('.snippet5'), $ani, {'top' : '-100px'});
					TweenMax.to($fi.find('.snippet6'), $ani, {'top' : '200px'});
					TweenMax.to($fi.find('.snippet7'), $ani, {'left' : '840px'});
					TweenMax.to($fi.find('.snippet8'), $ani, {'top' : '200px'});

				} // end of onmouseleave

			} // end of actions obj

		}, // end of feature obj

/*
         _                       
__ __ __(_) _ _   _ _   ___  _ _ 
\ V  V /| || ' \ | ' \ / -_)| '_|
 \_/\_/ |_||_||_||_||_|\___||_|  

*/

		winner : {

			init : function(){

				var $wc = $('.winner-container');

				$m.winner.listeners($wc);

			}, // end of init fnc

			listeners : function($wc){

				var $sel = $wc.find('.selector'),
					$sli = $wc.find('.slider'),
					$meal = $sli.children('.meal'),
					$port = $sli.children('.portrait');

				$sel.on('mouseenter', 'li', function(){

					var $this = $(this);

					if($this.hasClass('portrait')){ $m.winner.actions.showImage.portrait($meal, $port, $this); }
					else{ $m.winner.actions.showImage.meal($meal, $port, $this); } // end of if statement

				});

			}, // end of listeners

			actions : {

				showImage : {

					meal : function($meal, $port, $this){

						console.log('show-meal');



						TweenMax.to($meal, 1, {'left' : '0'});
						TweenMax.to($port, 1, {'left' : '-125px', 'opacity' : '0.5'});
						
						TweenMax.to($this, 0.5, {'background-color' : 'rgb(145, 124, 79)'});
						TweenMax.to($this.siblings('.portrait'), 0.5, {'background-color' : 'rgb(255, 255, 255)'});

					}, // end of meal

					portrait : function($meal, $port, $this){

						console.log('show-portrait');

						TweenMax.to($meal, 1, {'left' : '250px'});
						TweenMax.to($port, 1, {'left' : '0', 'opacity' : '1'});

						TweenMax.to($this, 0.5, {'background-color' : 'rgb(145, 124, 79)'});
						TweenMax.to($this.siblings('.meal'), 0.5, {'background-color' : 'rgb(255, 255, 255)'});

					} // end of portrait

				} // end of showImage

			} // end of actions

		} // end of winner obj

	}; // end of module obj

	(function(){

		// $m.init();
		$m.json('entry');

	})();

}); // end of document ready...















