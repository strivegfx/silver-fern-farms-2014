/*jshint devel: true*//*global Modernizr: true*//*global Raphael: true*//*global TweenMax: true*///if(Raphael){
//alert('yes');
//}
$(document).ready(function(){var e={init:{entry:function(){console.log("run entry init functions...");e.s.ltIe9=e.ltIe9();e.regions.init();e.inputType.listeners.mouse();e.chefs.init();e.modal.init()}},s:{json:{},touch:!1,ani:.25,atvReg:null,modal:{state:"",random:"",region:"",chef:"",chefLen:""},col:{drkGray:"rgb(27, 27, 27)",medGray:"rgb(77, 77, 77)",lytGray:"rgb(204, 204, 204)",drkBrown:"rbg(49, 39, 24)",medBrown:"rgb(155, 126, 84)"},finDat:[{chefName:"Adam Rickett",restaurant:"Pravda Café",url:["pravdacafe.co.nz","http://www.pravdacafe.co.nz/"],cut:"reserve",bio:["I have grown up working in kitchens since the age of fifteen. I spent the first few years of my career working in small gastro pubs just outside of north London. I moved to Cornwall when I was seventeen and went to Cornwall College St Austell to get my qualifications. Since then I have worked in all avenues of the kitchen world, from pubs to cafes to catering companies to production kitchens to fine dining restaurants.","I originally came to New Zealand for a years working holiday, shortly after then I found myself working for the Nourish Group who quickly invested in me and made me Head Chef at Pravda. I have been in the country for five years and am now a resident. I have fallen in love with the country and have felt most at home since moving to Wellington and getting involved with the amazing hospitality scene that resides in the city."],dish:"Final’s Dish",details:["Silver Fern Farms Reserve beef tataki with white soy ponzu, pickled enoki and toasted grains.","I entered the competition simply because I love a good excuse to do something new, in this instance the main purpose was to showcase the Silver Fern Farms product. To get into the final alongside such prestigious chefs from around the country is very humbling.","To truly showcase the quality and flavour of the beef I wanted to present it in it’s purest form, for me this is raw. I have drawn from recent travels around Europe and Japan to create a balanced dish with the Silver Fern Farms product at the centre."],judge:["“The meat was absolutely the hero but beautifully balanced by accompanying elements. This dish was as close to perfection as anything we have tried in this country.” <strong>– Judge</strong>"]},{chefName:"Alex Strobach",restaurant:"O’Connell Street Bistro",url:["oconnellstbistro.com","http://oconnellstbistro.com/"],cut:"cervena-venison",bio:["German born Alex Strobach arrived in New Zealand after working at the prestigious Gleneagles Hotel in Scotland. Alex worked at the French Café as Sous Chef before joining O’Connell Street Bistro as Head Chef in October 2012."],dish:"Final’s Dish",details:["Silver Fern Farms Cervena venison loin, crème fraiche spatzle, sautéed rainbow chard, mushrooms & green peppercorn jus.","Alex is a mad keen hunter & fisherman & his dish reflects his German heritage & incorporates his passion for hunting."],judge:["“A simple but considered compilation of textures, a deep sauce made for the best possible marriage. To quote Rachel Hunter -Amazzzingg!” <strong>– Judge</strong>"]},{chefName:"Andrew Clarke",restaurant:"Victoria Street Bistro",url:["victoriastreetbistro.co.nz","http://www.victoriastreetbistro.co.nz/"],cut:"silere",bio:["Andrew Clarke is a renowned chef in the Waikato and has made his name in some of the city’s most prominent restaurants. He began his career in 1996 at Gails of Tamahere before moving on to Tables on the River where he rose to the position of Sous Chef. Seeking to broaden his abilities, Andrew then spent a number of years in Melbourne working under celebrity British chef Justin Derrick in the Marque Hotel, and as Chef de Partie in Treasury Restaurant at the Sebel.","Andrew returned to Hamilton taking up a position at Balcony Restaurant where he was eventually appointed as Head Chef. In 2007 Andrew opened OneZB and over the following three years was awarded three beef and lamb plates, as well as the 2008 regional title in the Monteith’s Wild Food Challenge and national runner up in the Corban’s Perfect Wine and Food Match.","Since opening Victoria Street Bistro, Andrew has won the 2011 Mercedez Benz Great Waikato Food Challenge and placed in the final three in the televised national finals of the Monteith’s Beer and Wild Food Challenge.  At Victoria Street Bistro, Andrew combines his culinary gifts with the front of house leadership of expert restaurateur Julia Clarke to create Hamilton’s premiere dining experience.","Andrew’s culinary directions are inspired by a number of nationalities. He describes himself as unbiased in his ethnic influences with the old world style of Italy and France sitting happily alongside the exciting flavours of Asia and the Middle East. Much of his passion is derived from the joy experienced in creating these flavours from quality New Zealand produce which he rates as the equal of anywhere in the world. Andrew’s menus pay homage to classic flavour combinations, but he is always investigating new and innovative techniques to keep his food at the cutting edge."],dish:"Final’s Dish",details:["SILERE alpine origin merino rump with honey braised spare rib, macadamia dukkah, black lentil dhal, swede, carrot purée and spring greens."],judge:["“Moroccan fusion with Kiwi undertones and a mix of modern and ethnic twists in a classical setting. Stunning!” <strong>– Judge</strong>"]},{chefName:"Craig Hendry",restaurant:"Gantleys",url:["gantleys.co.nz","http://www.gantleys.co.nz/"],cut:"hereford",bio:["I was lucky enough to grow up on a small Scottish Island where the population has never been more than 3000. My family have always been involved with aspects of small holdings and game hunting and most of the produce back then was locally sourced. I often remember coming home and a basket of langoustines being left on the doorstep from locals out fishing.  This is where my inspiration comes from for home-grown food cooked well and enjoyed with the family.","I moved to Glasgow to start my career where I worked in numerous establishments learning the trade from experienced chefs. This was a very different flavour to what I was used to, fast paced and big numbers coming through the door, it was exhilarating yet you had no other life.","As good an experience as this was I decided to travel and broaden my horizons throughout Europe and Australia before finally what felt like coming home to New Zealand. I have been a Chef in Queenstown for over ten years working at some of the top restaurants here, including formative years at Wai Restaurant. It’s where I met my wife and where we raise our young family including the five chickens roaming free in the garden. I feel privileged to live here, with the many opportunities to cook great food locally sourced and beautiful local wines to accompany."],dish:"Final’s Dish",details:["Silver Fern Farms Hereford braised beef rib and beef fillet, blue cheese beignet, pan jus and seasonal vegetables.","The inspiration for the dish came from the beef rib and trying to match that to flavours and textures that I thought would accompany it well. I have always thought the beef rib is a great cut and under utilised.  By pairing it with the more common fillet, the customer gets to enjoy a variation of cooking techniques on one dish."],judge:["“This dish is reason enough alone to revisit this restaurant which for too long has languished in the shadows of Queenstown’s burgeoning dining environment.” <strong>– Judge</strong>"]},{chefName:"Greg Piner",restaurant:"Pier 24",url:["hotelstclair.com","http://www.hotelstclair.com/category/pier-24-dining/"],cut:"cervena-venison",bio:["I have worked in some of New Zealand’s top hotels in Queenstown, including Blanket Bay and the award winning St Moritz Grand Mercure.","My current position is Head Chef at Pier 24 at St Clair Beach Resort under executive chef, Michael Coughlin.","My home on the West Coast was built for entertaining groups to my cooking demos, which I was doing right up until my move to Dunedin.  I spent 12 years in Queenstown, chefing at different hotels and restaurants, from Blanket Bay to being executive chef at NZSKI.com. I was also product development manager for the Mediterranean Group in Queenstown, sourcing new food and product that top chefs in Queenstown could use.","My travels lead me to work at the Christchurch casino, and then on to Auckland to Mikano under Wawrick Brown. I was also a private chef for Sir Bob Jones while on his trip to the West Coast.  I was chef for the Williams Porsche race team for 2008 and I had involvement with Lake Brunner Lodge on the West Coast planning new menus and putting a new spin on things.",'One of my biggest loves is using fresh New Zealand products, and keeping the food simple.  Seafood is my background and I enjoy coming up with new ideas that think outside the square. The people you meet are important when you are a chef, having a good relationship with guests, "nothing’s a problem". I also enjoy surfing, snowboarding, travel and have made my way in to "Top Gear" magazine for my love of cars. I am also a gourmet traveller, Accor traveller and featured on an Australian travel television programme as a guest chef.'],dish:"Final’s Dish",details:["Chargrilled Silver Fern Farms Cervena venison loin, green pepper corn and sage pesto, leek and black pudding tart, glazed beetroot, blood orange jus.","I entered the awards, to showcase what a great product we get to work with everyday. Being in the finals is a great reward for all the hard work that the Pier 24 team have put into the dish – it’s an amazing feeling."],judge:["“The dish pushed the diner to experience a dish which went well beyond the usual venison offerings and it did this in a refined and clever way.” <strong>– Judge</strong>"]},{chefName:"Mat Mclean",restaurant:"Palate",url:["palaterestaurant.co.nz","http://palaterestaurant.co.nz/"],cut:"reserve",bio:["Mat Mclean has established a reputation as one of New Zealand’s leading chefs and his restaurant Palate is regarded as one of this country’s best restaurants.","Mat is a chef with highly developed technical skills, who’s committed to cooking with seasonal, local produce. He is not afraid to experiment with flavours and textures.","Few regional restaurants have quite the same level of panache as Palate which, since opening its doors in 2005, has clearly shown a commitment to good food and wine, great service and overall quality.","He gained his professional qualifications at the Waikato Polytechnic and was awarded a scholarship to work in the UK. From 1998 to 2001 he gained invaluable work experience in London at Prue Leith’s Restaurant in Notting Hill (1 Michelin star) and at the Capital Hotel in Knightbridge (2 Michelin stars).","During 2002 and 2003 Mat was Executive Chef at Otto’s Restaurant in Auckland (Mat was awarded Metro Restaurant of the Year during his tenure here). In 2004 Mat travelled to Melbourne and worked as Head Chef at the Middle Bite and Bar (a 1 hat restaurant).","Upon his return to New Zealand he opened Palate Restaurant in February 2005.","Mat has been a Beef and Lamb Ambassador since 2009."],dish:"Final’s Dish",details:["Silver Fern Farms Reserve eye fillet and slow cooked short rib, smoked kumara, shitaki salad, baby turnip, soy chilli butter."],judge:["“A creative dish that showed the skills of the chef perfectly from picture perfect presentation to a mouth-watering and ultimately satisfying last mouthful.” <strong>– Judge</strong>"]},{chefName:"Robert Richardson",restaurant:"Molten",url:["molten.co.nz","http://molten.co.nz/"],cut:"silere",bio:["I have worked in a number of leading New Zealand restaurants such as Icon @ Te Papa with Peter Thornley, The Hunting Lodge with Geoff Scott and Martin Bosley’s and Kermadec to name a few.","I’m a big believer of using seasonal produce sourced directly from the grower and allowing the produce to star i.e. not letting the chef’s muck around with it too much!"],dish:"Final’s Dish",details:["Slow-roasted SILERE alpine origin merino lamb rump with eggplant purée, peas, fior di latte & white anchovy.","The SILERE lamb rump is slow roasted at a low temperature, and features accompanying produce which is at its peak this time of year – peas and eggplant. The peas are dressed with a mixture of mint, basil, parsley and lemon to add flavour and brightness to the dish. The fior di latte adds another textural element, while the white anchovy fillets and lamb are a classic pairing throughout the Mediterranean."],judge:["“It was mouth-wateringly good, a triumph of skill and innovation that resulted in an honest and appetising, well-orchestrated symphony of taste and texture.” <strong>– Judge</strong>"]},{chefName:"Scott Corbett",restaurant:"Pepper Tree Restaurant",url:["peppertreerestaurant.co.nz","http://www.peppertreerestaurant.co.nz/"],cut:"sff-venison",bio:["I was drawn to the Coromandel over a decade ago for its fishing, beaches and the idea of a cold beer while enjoying them both.","My passion for local ingredients, combined with the region’s abundance of fresh seafood, game & produce has resulted in the creativity of dishes that have been multi-award winning.","My simple, no fuss philosophy combined with creativity has made for much success at the Pepper Tree."],dish:"Final’s Dish",details:["“One Bittersweet Fallow”:","Silver Fern Farms Cervena venison cutlet served medium-rare with blackberry & tamarillo jelly, venison liver paté, almond crusted kumara, walnuts, witlof salad and syrah jus.","This has been a great opportunity to create a unique dish not normally offered on our restaurant menus."],judge:["“It was sublime, perfect balance and really well done. Not just good but very, very good.” <strong>– Judge</strong>"]},{chefName:"Sebastian Koburg",restaurant:"Saggio Di Vino",url:["saggiodivino.co.nz","http://www.saggiodivino.co.nz/"],cut:"silere",bio:["I was born in Berlin literally a stones throw from the wall and grew up with four siblings and down to earth food from my catholic mother - who was the one who put me in a kitchen in the first place.","I met my partner, a maitre´ d, 14 years ago and started to travel & work extensively through Europe and Asia, including work experience from cooking in Swiss Alp resorts to being the concert tour chef of the Red Hot Chilli Peppers.","My son Levin, now 6 years old, who was made in New Zealand but born in Berlin, was one reason we came back to New Zealand for a change of lifestyle.","I have been working as Head Chef at Saggio di vino for 18 months now and enjoying the huge palate of mother-natures products this country has to offer."],dish:"Final’s Dish",details:["SILERE alpine origin merino french lamb rack – pan fried and baked in the oven till medium.   Sweet & sour kumara - diced and cooked with shallots, chilli, lime leaves, New Zealand honey, chardonnay vinegar and finished with coriander. Braised chicory with olive oil, butter, orange and juniper berries and sage jus cooked out of beef bones and lamb trimmings & fresh sage.","The inspiration for my dish comes from the meat itself - lamb with the slightly sweet taste accompanied by honey, sage and shallots sweetness and the slightly sour and bitter taste accompanied by vinegar and chicory. There is also a spring and summer warm kick from kaffir leaves and coriander. I chose the lamb rack because I like it when guests have to use their hands to eat and really touch the meat."],judge:["“Visually and aromatically this was gorgeous; you could smell the plate of food as it travelled from kitchen to table rich, lifted, savoury and delicious.” <strong>– Judge</strong>"]},{chefName:"Shaun Clouston",restaurant:"Logan Brown",url:["loganbrown.co.nz","http://www.loganbrown.co.nz/"],cut:"reserve",bio:["Head Chef of Wellington’s Logan Brown Restaurant & Bar since 2006,   Shaun studied and worked in New Zealand for several years, including four years at Logan Brown in the late nineties, before moving to Sydney where, during five years, he cooked at La Grillade, Infusion@333 and Wildfire restaurants.  In 2006, Shaun was approached by Logan Brown Restaurant owners, Steve Logan and Alister Brown, to rejoin the restaurant as their Head Chef.  In 2008 Shaun became a business partner at Logan Brown.","Shaun’s philosophy on food and cooking is to serve classical but skilfully cooked dishes, using good techniques, to create a consistent result every time; and using the best local, seasonal ingredients you can get your hands on. Paramount to all of this is the use of ethical and environmentally friendly producers and suppliers.","Logan Brown has earned its reputation as one of New Zealand’s finest restaurants by staying consistent to the philosophy of cooking generous, full-flavoured and honest food – a philosophy which Shaun also shares.   “And we are far more seasonal in New Zealand than in other parts of the world, where most products are available year round, so we have a constantly evolving menu here” - as new ingredients come into season we tweak and introduce new dishes to the menu, often on a weekly basis."],dish:"Final’s Dish",details:["Silver Fern Farms Reserve beef rump cooked medium rare, with slowly braised short rib marinated in pear juice and soy. Served with grilled barley cake and Korean inspired flavours.","For this Reserve beef dish, I used two of my favorite beef cuts, the rump cap and short rib. I have been inspired by Korean chefs that I have worked with in my travels and really loved the fresh flavours of Kim Chi, sesame leaf and black garlic. The Reserve rump cap was simply cooked to medium rare to showcase its flavour and tenderness. The short rib was marinated in pear juice and soy beforebeen slowly braised.  Then served with a grilled barley cake and a combination of the previously mention Korean inspired flavours."],judge:["“It was very clear we were being served Reserve beef rump and short rib that had been treated with appropriate understanding and respect.” <strong>– Judge</strong>"]}]},json:function(t){var n="json/"+t+".json";$.getJSON(n,function(n){console.log("successfully got "+t+" data");console.log(n);e.s.json[t]=n;e.init[t]()}).fail(function(){console.log("failed to get "+t+" data")})},svgTest:function(){return Modernizr.svg?!0:!1},ltIe9:function(){var e=$("html").hasClass("lt-ie9");return e},inputType:{listeners:{touch:function(){$("body").on("touchstart.usingTouch",function(){e.inputType.actions.touch()})},mouse:function(){$("body").on("mousemove.usingMouse",function(){e.inputType.actions.mouse()})}},actions:{touch:function(){var t=$(".chef-container");e.s.touch=!0;t.find(".scroll-container").css({"overflow-x":"scroll"});t.find(".scroll").css({"pointer-events":"auto"});$("body").off(".usingTouch");e.inputType.listeners.mouse()},mouse:function(){var t=$(".chef-container");e.s.touch=!1;$(".chef-container").find(".scroll-container").css({"overflow-x":"hidden"});t.find(".scroll").css({"pointer-events":"none"});$("body").off(".usingMouse");e.inputType.listeners.touch()}}},regions:{init:function(){var t=new Raphael("paper",500,500),n=e.s.json.entry,r=n.length,i={fill:"gray",stroke:"none",opacity:"0"},s=$(".map-container"),o=s.find(".region-map"),u=s.find(".region-list"),a=e.s.ani,f,l,c,h,p;for(f=0;f<r;f++){l=n[f].path;c=t.path(l).attr(i);h=u.find($('li[data-num="'+f+'"]'));p=o.find(".land-mass").find($('li[data-num="'+f+'"]'));e.regions.listeners.map(c,o,u,h,p,f,a);e.regions.listeners.list(o,u,h,p,f,a)}},listeners:{map:function(t,n,r,i,s,o,u){t.node.onclick=function(){e.regions.actions.onclick(o)};t.node.onmouseover=function(){e.regions.actions.onmouseenter(n,r,i,o,s,u)};t.node.onmouseout=function(){e.regions.actions.onmouseleave(n,r,o,s,u)}},list:function(t,n,r,i,s,o){r.on("click",function(){e.regions.actions.onclick(s)}).on("mouseenter",function(){e.regions.actions.onmouseenter(t,n,r,s,i,o)}).on("mouseleave",function(){e.regions.actions.onmouseleave(t,n,s,i,o)})}},actions:{onclick:function(t){e.s.atvReg=t;e.chefs.popData(t);e.s.$ltIe9&&$(".chef-container").find("ul").attr({"data-seg":"1"})},onmouseenter:function(t,n,r,i,s,o){t.find("li").stop().animate({opacity:"0"},250);TweenMax.to(n.find("li"),o,{color:e.s.col.lytGray});s.stop().animate({opacity:"1"},250);TweenMax.to(r,o,{color:e.s.col.medBrown});$("body").css({cursor:"pointer"})},onmouseleave:function(t,n,r,i,s){var o=e.s.atvReg;i.stop().animate({opacity:"0"},250);TweenMax.to(n.find("li"),s,{color:e.s.col.medGray});t.find($('li[data-num="'+o+'"]')).stop().animate({opacity:"1"},250);TweenMax.to(n.find($('li[data-num="'+o+'"]')),s,{color:e.s.col.medBrown});$("body").css({cursor:"default"})}}},finalists:{init:function(){var t=$(".finalists-container");e.finalists.listeners(t);e.finalists.popData.init(t)},listeners:function(t){var n=e.s.ani;t.on("click",".nominee",function(){e.finalists.actions.onclick($(this))}).on("mouseenter",".nominee",function(){e.finalists.actions.onmouseenter($(this),n)}).on("mouseleave",".nominee",function(){e.finalists.actions.onmouseleave($(this),n)})},actions:{onclick:function(t){var n=t.attr("data-chef");e.s.modal.chf=n;e.s.modal.state="finalists";$(".modal").find(".data").css({"min-height":"790px"}).html(e.modal.populate.finalists(n));e.modal.actions.rndBtn.state.finalists(n,10);e.modal.position("finalists")},onmouseenter:function(e,t){var n=e.find(".image"),r=e.find(".shadow");TweenMax.to(n,t,{top:"0",scale:"1.1"});TweenMax.to(r,t,{opacity:"1",scale:"1.1"})},onmouseleave:function(e,t){var n=e.find(".image"),r=e.find(".shadow");TweenMax.to(n,t,{top:"20px",scale:"1"});TweenMax.to(r,t,{opacity:"0.5",scale:"1"})}},popData:{init:function(t){var n=e.s.finDat,r=n.length,i="",s;for(s=0;s<r;s++)i+='<li class="nominee" data-chef="'+s+'">'+'<div class="image" style="background-position: '+s*-80+'px 0"></div>'+'<div class="shadow"></div>'+'<div class="copy-block">'+"<h3>"+n[s].chefName+"</h3>"+'<h3 class="restaurant">('+n[s].restaurant+")</h3>"+e.finalists.popData.paraLoop(n[s].bio)+"<h3>Final’s Dish</h3>"+e.finalists.popData.paraLoop(n[s].details)+'<div class="gradient"></div>'+"</div>"+"</li>";t.html(i)},paraLoop:function(e){var t=e.length,n="",r;for(r=0;r<t;r++)n+="<p>"+e[r]+"</p>";return n}}},chefs:{init:function(t){var n=$(".chef-container");e.chefs.popData(t,n);e.chefs.listeners(n)},popData:function(t,n){var r=0,i="",s=e.s.ani,o=e.s.json.entry,u,a,f,l,c,h,p;isNaN(t)?c=!0:c=!1;e.s.modal.random=c;if(c){t=0;f=o.length}else{n=$(".chef-container");f=t+1}for(t;t<f;t++){a=o[t].chefs;l=a.length;u=0;if(c){u=e.chefs.randomNum(0,l-2);l=u+2}for(u;u<l;u++){i+='<li data-region="'+t+'" data-chef="'+u+'">'+'<div class="shadow"></div>'+'<img class="image" src="img/entrants/'+a[u][14]+'.jpg">'+"<h3>"+a[u][1]+"</h3>";a[u][5]!==""?i+="<h4>"+a[u][5]+"</h4>":i+="<h4>"+a[u][7]+"</h4>";a[u][8]!==""&&(i+="<span>"+a[u][8]+"</span>");i+='<div class="gradient"></div></li>';r++}}r=(r+2)*235;e.s.ulWth=r;if(r>960){e.s.chefScroll=!0;n.find(".scroll").css({display:"block"})}else{e.s.chefScroll=!1;n.find(".scroll").css({display:"none"})}h=n.find("ul");h.css({width:r+"px"}).html(i);if(!c){e.chefs.loader.addAnimation(n);p=n.find(".scroll-container");TweenMax.to(p,s*5,{scrollLeft:-235});for(t=0;t<3;t++){TweenMax.from(p.find($('li[data-chef="'+t+'"]')),s,{opacity:"0",delay:s/2*t});TweenMax.delayedCall(.5,e.chefs.loader.removeAnimation,[n])}e.s.modal.chfLen=l}},loader:{addAnimation:function(e){e.addClass("loading")},removeAnimation:function(e){e.removeClass("loading")}},randomNum:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},listeners:function(t){var n=e.s.ani,r=e.s.ltIe9;if(!r){t.on("mousemove",function(r){e.s.chefScroll&&!e.s.touch&&e.chefs.actions.tweenScroll(r,t,n)});t.find(".rnd-btn").on("touchstart",function(){e.chefs.actions.touch.ontouchstart($(this),t,n)})}else t.find(".rnd-btn").on("mouseenter",function(){e.chefs.actions.ltIe9.onmouseenter($(this))}).on("mouseleave",function(){e.chefs.actions.ltIe9.onmouseleave($(this))}).on("click",function(){e.chefs.actions.ltIe9.onclick($(this),t,n)});t.find("ul").on("click","li",function(){e.chefs.actions.li.onclick($(this),n)}).on("mouseenter","li",function(){e.chefs.actions.li.onmouseenter($(this),n)}).on("mouseleave","li",function(){e.chefs.actions.li.onmouseleave($(this),n)})},actions:{tweenScroll:function(t,n,r){function l(){f.css({display:"none"})}var i=t.pageX-n.offset().left,s=i/960,o=e.s.ulWth,u=s*(o-960),a=n.find(".scroll-container"),f;if(i<50){f=n.find('.scroll[data-dir="left"]');TweenMax.to(f,r,{opacity:"0",onComplete:l})}else if(i>910){f=n.find('.scroll[data-dir="right"]');TweenMax.to(f,r,{opacity:"0",onComplete:l})}else{f=n.find(".scroll");f.css({display:"block"});TweenMax.to(n.find(".scroll"),r,{opacity:"1"})}TweenMax.to(a,r*5,{scrollLeft:u})},li:{onclick:function(t,n){var r=t.attr("data-region"),i=t.attr("data-chef"),s=$(".modal");e.s.modal.reg=r;e.s.modal.chf=i;e.s.modal.state="entries";s.find(".data").css({"min-height":"0"}).html(e.modal.populate.entries(r,i));e.modal.actions.rndBtn.state.entries(i,e.s.modal.chfLen);e.modal.position("entries")},onmouseenter:function(e,t){TweenMax.to(e.find(".image"),t,{top:"-20px"});TweenMax.to(e.find(".shadow"),t,{opacity:"1"})},onmouseleave:function(e,t){TweenMax.to(e.find(".image"),t,{top:"0"});TweenMax.to(e.find(".shadow"),t,{opacity:"0.5"})}},ltIe9:{onmouseenter:function(t){t.css({"background-color":e.s.col.medBrown,border:"1px solid white"})},onmouseleave:function(t){t.css({"background-color":e.s.col.medGray,border:"1px solid "+e.s.col.drkGray})},onclick:function(t,n,r){var i=t.parent().attr("data-dir"),s=n.find(".scroll-container"),o=s.attr("data-seg"),u=e.s.ulWth/235-4;i==="left"?o>0&&o--:o<u&&o++;TweenMax.to(s,r*5,{scrollLeft:o*235});s.attr({"data-seg":o})}},touch:{ontouchstart:function(e,t,n){var r=e.parent().attr("data-dir"),i=t.find(".scroll-container");r==="left"?TweenMax.to(i,n,{scrollLeft:"-=235"}):TweenMax.to(i,n,{scrollLeft:"+=240"})}}}},modal:{init:function(){var t=$(".modal");e.modal.listeners(t)},listeners:function(t){var n=e.s.ani;t.find(".rnd-btn").on("mouseenter",function(){e.modal.actions.rndBtn.onmouseenter($(this),n)}).on("mouseleave",function(){e.modal.actions.rndBtn.onmouseleave($(this),n)});t.find(".close").on("click",function(){e.modal.actions.closeBtn.onclick($(this),t,n)});t.find(".left").on("click",function(){e.s.modal.state==="entries"?e.modal.actions.leftBtn.onclick.entries(t,n):e.s.modal.state==="finalists"&&e.modal.actions.leftBtn.onclick.finalists(t,n)});t.find(".right").on("click",function(){e.s.modal.state==="entries"?e.modal.actions.rightBtn.onclick.entries(t,n):e.s.modal.state==="finalists"&&e.modal.actions.rightBtn.onclick.finalists(t,n)})},actions:{rndBtn:{onmouseenter:function(t,n){t.css({"background-color":e.s.col.medBrown,border:"1px solid white"},250)},onmouseleave:function(t,n){t.css({"background-color":e.s.col.medGray,border:"1px solid "+e.s.col.drkGray},250)},state:{entries:function(t,n){var r=$(".modal").find(".buttons"),i=r.find(".left"),s=r.find(".right");if(e.s.modal.random){i.css({display:"none"});s.css({display:"none"});return""}i.css({display:"block"});s.css({display:"block"});if(t<=0){i.css({opacity:"0.25"});s.css({opacity:"1"})}else if(t>=n-1){i.css({opacity:"1"});s.css({opacity:"0.25"})}else{i.css({opacity:"1"});s.css({opacity:"1"})}},finalists:function(e,t){var n=$(".modal").find(".buttons"),r=n.find(".left"),i=n.find(".right");r.css({display:"block"});i.css({display:"block"});if(e<=0){r.css({opacity:"0.25"});i.css({opacity:"1"})}else if(e>=t-1){r.css({opacity:"1"});i.css({opacity:"0.25"})}else{r.css({opacity:"1"});i.css({opacity:"1"})}}}},closeBtn:{onclick:function(e,t,n){function r(){t.css({display:"none"})}TweenMax.to(t,n,{opacity:"0",onComplete:r})}},leftBtn:{onclick:{entries:function(t,n){function o(){s.css({"min-height":"0"}).html(e.modal.populate.entries(r,i));TweenMax.set(s,{left:"20px"});TweenMax.to(s,n,{left:"0",opacity:"1"})}var r=e.s.modal.reg,i=e.s.modal.chf,s=t.find(".data");if(i<=0)return"";i--;e.s.modal.chf=i;TweenMax.to(s,n,{left:"-20px",opacity:"0",onComplete:o});e.modal.actions.rndBtn.state.entries(i)},finalists:function(t,n){function s(){i.css({"min-height":"790px"}).html(e.modal.populate.finalists(r));TweenMax.set(i,{left:"20px"});TweenMax.to(i,n,{left:"0",opacity:"1"})}var r=e.s.modal.chf,i=t.find(".data");if(r<=0)return"";r--;e.s.modal.chf=r;TweenMax.to(i,n,{left:"-20px",opacity:"0",onComplete:s});e.modal.actions.rndBtn.state.finalists(r,10)}}},rightBtn:{onclick:{entries:function(t,n){function u(){o.css({"min-height":"0"}).html(e.modal.populate.entries(r,i));TweenMax.set(o,{left:"-20px"});TweenMax.to(o,n,{left:"0",opacity:"1"})}var r=e.s.modal.reg,i=e.s.modal.chf,s=e.s.modal.chfLen,o=t.find(".data");if(i>=s-1)return"";i++;e.s.modal.chf=i;TweenMax.to(o,n,{left:"20px",opacity:"0",onComplete:u});e.modal.actions.rndBtn.state.entries(i,s)},finalists:function(t,n){function o(){s.css({"min-height":"790px"}).html(e.modal.populate.finalists(r));TweenMax.set(s,{left:"-20px"});TweenMax.to(s,n,{left:"0",opacity:"1"})}var r=e.s.modal.chf,i=10,s=t.find(".data");if(r>=i-1)return"";r++;e.s.modal.chf=r;TweenMax.to(s,n,{left:"20px",opacity:"0",onComplete:o});e.modal.actions.rndBtn.state.finalists(r,10)}}}},position:function(t){var n=$(".modal"),r=e.s.ani,i;t==="entries"?i=$(".map-container").offset():t==="finalists"&&(i=$(".finalists-container").offset());n.css({display:"block"});TweenMax.to(n,r,{opacity:"1",top:i.top+"px"})},populate:{entries:function(t,n){var r=e.s.json.entry[t].chefs[n],i;console.log("reg = "+t+" chf = "+n);i='<div class="image" style="background-image:url(img/entrants/'+r[14]+'.jpg);"></div>'+'<div class="main-heading">'+r[5];r[6]!==""?i+=' <span class="course oneWord">('+r[6]+")</span></div>":i+="</div>";i+="<h6>Cut Used</h6><div>"+r[7]+"</div>";r[8]!==""&&(i+="<h6>Dish Description</h6><div>"+r[8]+"</div>");i+="<h6>Entrant Name</h6><div>"+r[2]+" "+r[3]+" "+'<span class="title">('+r[4]+")</span>"+"</div>"+"<h6>Restaurant</h6>"+"<ul>"+'<li class="break name">'+r[1]+"</li>"+'<li class="bullet break extra-address">'+"<ul>"+"<li>"+r[9]+"</li>"+"<li>"+r[10]+"</li>"+"<li>"+r[11]+"</li>"+"</ul>"+"</li>"+'<li class="bullet phone">Ph: '+r[12]+"</li>";r[13]&&(i+='<li class="bullet web">Web: <a class="address" href="http://'+r[13]+'" target="_blank">Click here</a></li>');i+="</ul>";return i},finalists:function(t){var n=e.s.finDat,r;r='<div class="image chef" style="background-position: '+t*-250+'px 0"></div>'+'<div class="image logo finalist" data-sprite="'+n[t].cut+'"></div>'+'<div class="image dish" style="background-position: '+t*-250+'px -350px"></div>'+'<h2 class="finalist-chef">'+n[t].chefName+"</h2>"+'<h3 class="finalist-restaruent">('+n[t].restaurant+" - "+'<a class="website" href="'+n[t].url[1]+'" target="_blank">'+n[t].url[0]+"</a>"+")</h3>"+'<span class="finalist-bio">'+e.finalists.popData.paraLoop(n[t].bio)+"</span>"+'<h2 class="finalist-dish">Dish</h2>'+'<span class="finalist-details">'+e.finalists.popData.paraLoop(n[t].details)+"</span>"+'<span class="judge-details">'+e.finalists.popData.paraLoop(n[t].judge)+"</span>";return r}}},feature:{init:function(){var t=$(".feature-image");e.feature.listeners(t)},listeners:function(t){var n=e.s.ani;t.on("mouseenter",function(){e.feature.actions.onmouseenter(t,n)}).on("mouseleave",function(){e.feature.actions.onmouseleave(t,n)})},actions:{onmouseenter:function(e,t){TweenMax.to(e.find(".snippet0"),t,{left:"0"});TweenMax.to(e.find(".snippet1"),t,{top:"0"});TweenMax.to(e.find(".snippet2"),t,{top:"70px"});TweenMax.to(e.find(".snippet3"),t,{top:"0"});TweenMax.to(e.find(".snippet4"),t,{top:"100px"});TweenMax.to(e.find(".snippet5"),t,{top:"0"});TweenMax.to(e.find(".snippet6"),t,{top:"0"});TweenMax.to(e.find(".snippet7"),t,{left:"690px"});TweenMax.to(e.find(".snippet8"),t,{top:"150px"})},onmouseleave:function(e,t){TweenMax.to(e.find(".snippet0"),t,{left:"-117px"});TweenMax.to(e.find(".snippet1"),t,{top:"-70px"});TweenMax.to(e.find(".snippet2"),t,{top:"200px"});TweenMax.to(e.find(".snippet3"),t,{top:"-100px"});TweenMax.to(e.find(".snippet4"),t,{top:"200px"});TweenMax.to(e.find(".snippet5"),t,{top:"-100px"});TweenMax.to(e.find(".snippet6"),t,{top:"200px"});TweenMax.to(e.find(".snippet7"),t,{left:"840px"});TweenMax.to(e.find(".snippet8"),t,{top:"200px"})}}},winner:{init:function(){var t=$(".winner-container");e.winner.listeners(t)},listeners:function(t){var n=t.find(".selector"),r=t.find(".slider"),i=r.children(".meal"),s=r.children(".portrait");n.on("mouseenter","li",function(){var t=$(this);t.hasClass("portrait")?e.winner.actions.showImage.portrait(i,s,t):e.winner.actions.showImage.meal(i,s,t)})},actions:{showImage:{meal:function(e,t,n){console
.log("show-meal");TweenMax.to(e,1,{left:"0"});TweenMax.to(t,1,{left:"-125px",opacity:"0.5"});TweenMax.to(n,.5,{"background-color":"rgb(145, 124, 79)"});TweenMax.to(n.siblings(".portrait"),.5,{"background-color":"rgb(255, 255, 255)"})},portrait:function(e,t,n){console.log("show-portrait");TweenMax.to(e,1,{left:"250px"});TweenMax.to(t,1,{left:"0",opacity:"1"});TweenMax.to(n,.5,{"background-color":"rgb(145, 124, 79)"});TweenMax.to(n.siblings(".meal"),.5,{"background-color":"rgb(255, 255, 255)"})}}}}};(function(){e.json("entry")})()});