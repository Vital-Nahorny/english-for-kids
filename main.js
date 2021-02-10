(()=>{"use strict";(()=>{function t(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],a=!0,i=!1,o=void 0;try{for(var n,c=t[Symbol.iterator]();!(a=(n=c.next()).done)&&(e.push(n.value),!r||e.length!==r);a=!0);}catch(t){i=!0,o=t}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return e}}(t,r)||a(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}function o(a,i,o,n){var c,s=null;try{s=document.createElement(a)}catch(t){throw new Error("Unable to create HTMLElement! Give a proper tag name")}i&&(c=s.classList).add.apply(c,e(i.split(" "))),o&&Array.isArray(o)?o.forEach((function(t){return t&&s.appendChild(t)})):o&&"object"===r(o)?s.appendChild(o):o&&"string"==typeof o&&(s.innerHTML=o),n&&n.appendChild(s);for(var d=arguments.length,l=new Array(d>4?d-4:0),u=4;u<d;u++)l[u-4]=arguments[u];return l.length&&l.forEach((function(r){var e=t(r,2),a=e[0],i=e[1];""===i&&s.setAttribute(a,""),a.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck|src|alt/)?s.setAttribute(a,i):s.dataset[a]=i})),s}var n=function t(r){var e=r.word,a=r.translation,i=r.image,n=r.audioSrc;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.word=e,this.translation=a,this.image=i,this.audioSrc=n,this.frontHeader=o("div","card-header","".concat(this.word)),this.backHeader=o("div","card-header","".concat(this.translation)),this.btnRotate=o("div","btn-rotate"),this.btnRotate.style.backgroundImage="url(img/rotate.svg)",this.front=o("div","front",[this.frontHeader,this.btnRotate]),this.front.style.backgroundImage="url(".concat(i,")"),this.back=o("div","back",this.backHeader),this.back.style.backgroundImage="url(".concat(i,")"),this.div=o("div","card",[this.front,this.back]),this.container=o("div","card-container",this.div)};const c=[["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes","Emotions","Food","Transport"],[{category:"Action (set A)",word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{category:"Action (set A)",word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{category:"Action (set A)",word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{category:"Action (set A)",word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{category:"Action (set A)",word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{category:"Action (set A)",word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{category:"Action (set A)",word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{category:"Action (set A)",word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{category:"Action (set B)",word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{category:"Action (set B)",word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{category:"Action (set B)",word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{category:"Action (set B)",word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{category:"Action (set B)",word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{category:"Action (set B)",word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{category:"Action (set B)",word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{category:"Action (set B)",word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{category:"Animal (set A)",word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{category:"Animal (set A)",word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{category:"Animal (set A)",word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{category:"Animal (set A)",word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{category:"Animal (set A)",word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{category:"Animal (set A)",word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{category:"Animal (set A)",word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{category:"Animal (set A)",word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{category:"Animal (set B)",word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{category:"Animal (set B)",word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{category:"Animal (set B)",word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{category:"Animal (set B)",word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{category:"Animal (set B)",word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{category:"Animal (set B)",word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{category:"Animal (set B)",word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{category:"Animal (set B)",word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{category:"Clothes",word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{category:"Clothes",word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{category:"Clothes",word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{category:"Clothes",word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{category:"Clothes",word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{category:"Clothes",word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{category:"Clothes",word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{category:"Clothes",word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{category:"Emotions",word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{category:"Emotions",word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{category:"Emotions",word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{category:"Emotions",word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{category:"Emotions",word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{category:"Emotions",word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{category:"Emotions",word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{category:"Emotions",word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{category:"Food",word:"apple",translation:"яблоко",image:"img/apple.jpg",audioSrc:"audio/apple.mp3"},{category:"Food",word:"milk",translation:"молоко",image:"img/milk.jpg",audioSrc:"audio/milk.mp3"},{category:"Food",word:"banana",translation:"банан",image:"img/banana.jpg",audioSrc:"audio/banana.mp3"},{category:"Food",word:"bread",translation:"хлеб",image:"img/bread.jpg",audioSrc:"audio/bread.mp3"},{category:"Food",word:"cake",translation:"торт",image:"img/cake.jpg",audioSrc:"audio/cake.mp3"},{category:"Food",word:"cheese",translation:"сыр",image:"img/cheese.jpg",audioSrc:"audio/cheese.mp3"},{category:"Food",word:"ice cream",translation:"мороженое",image:"img/icecream.jpg",audioSrc:"audio/icecream.mp3"},{category:"Food",word:"orange",translation:"апельсин",image:"img/orange.jpg",audioSrc:"audio/orange.mp3"}],[{category:"Transport",word:"airplane",translation:"самолёт",image:"img/airplane.jpg",audioSrc:"audio/airplane.mp3"},{category:"Transport",word:"bicycle",translation:"велосипед",image:"img/bicycle.jpg",audioSrc:"audio/bicycle.mp3"},{category:"Transport",word:"bus",translation:"автобус",image:"img/bus.jpg",audioSrc:"audio/bus.mp3"},{category:"Transport",word:"car",translation:"машина",image:"img/car.jpg",audioSrc:"audio/car.mp3"},{category:"Transport",word:"motorcycle",translation:"мотоцикл",image:"img/motorcycle.jpg",audioSrc:"audio/motorcycle.mp3"},{category:"Transport",word:"ship",translation:"корабль",image:"img/ship.jpg",audioSrc:"audio/ship.mp3"},{category:"Transport",word:"train",translation:"поезд",image:"img/train.jpg",audioSrc:"audio/train.mp3"},{category:"Transport",word:"truck",translation:"грузовик",image:"img/truck.jpg",audioSrc:"audio/truck.mp3"}]];function s(t){var r=new Audio;r.src="./audio/".concat(t,".mp3"),r.play()}function d(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return l(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}function u(t,r){for(var e=0;e<r.length;e++){var a=r[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function g(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var m=document.querySelector(".burger__list"),p=document.querySelector(".main-page"),y=document.querySelector(".category-page"),h=document.querySelector("#myswitcher"),f=document.querySelector(".score"),b=document.querySelector(".btns-container"),v=function(){function t(){var r=this;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,"generateMainPage",(function(){r.clearPage(),r.gameIsOn&&r.endGame(),c[0].forEach((function(t,r){o("div","main-card",o("div",null,t),p,["id","".concat(r)]).style.backgroundImage="url(img/".concat(r,".jpg)")})),r.menuItemStatus()})),g(this,"openMenuCard",(function(t){var e=t.target.closest(".main-card");if(e){r.currentCategory=e.firstElementChild.textContent;var a=+e.id;r.clearPage(),r.generateCategoryPage(a)}})),g(this,"openMenuItem",(function(t){var e=t.target.closest(".burger__item");if(e)if(r.currentCategory=e.textContent,"Main menu"===e.textContent)r.generateMainPage();else if("Statistics"===e.textContent)r.generateStatisticPage();else{var a=c[0].indexOf(e.textContent);r.generateCategoryPage(a)}})),g(this,"rotateCard",(function(t){var e=t.target.closest(".btn-rotate");if(e){var a=t.target.closest(".card"),i=e.previousSibling.textContent;r.statisticArr.find((function(t){return t.word===i})).trained+=1,a.classList.add("rotated"),a.addEventListener("mouseleave",(function(){a.classList.remove("rotated")}))}})),g(this,"cardEventHandler",(function(t){if("front"===t.target.classList.value){var e,a=t.target,i=a.firstElementChild.textContent;if(r.isPlay){var n=a.closest(".card"),c=r.statisticArr.find((function(t){return t.word===r.playWords[0]}));if(!n.classList.contains("card-checked")&&r.gameIsOn)if(i===r.playWords[0]){r.score.correct+=1,c.correct+=1;var d=c.correct+c.incorrect;if(c.percent=Math.floor(100*c.correct/d),f.prepend(o("div","star-correct")),n.classList.toggle("card-checked"),r.playWords.shift(r.playWords[0]),(e=new Audio).src="./audio/correct.mp3",e.play(),0===r.playWords.length)if(setTimeout(r.generateMainPage,3e3),0===r.score.error)r.endGame(),function(){var t=new Audio;t.src="./audio/success.mp3",t.play()}(),o("div","win",null,y);else{var l=r.score.error;r.endGame(),function(){var t=new Audio;t.src="./audio/failure.mp3",t.play()}(),o("div","failure","You made ".concat(l," errors."),y)}else setTimeout(s,500,r.playWords[0])}else{r.score.error+=1,c.incorrect+=1;var u=c.correct+c.incorrect;c.percent=Math.floor(100*c.correct/u),f.prepend(o("div","star-wrong")),function(){var t=new Audio;t.src="./audio/error.mp3",t.play()}()}}else s(i),r.statisticArr.find((function(t){return t.word===i})).trained+=1;localStorage.statistic=JSON.stringify(r.statisticArr)}})),g(this,"gameMode",(function(){r.isPlay=!r.isPlay,r.categoryCards.length>0&&(r.categoryCards.forEach((function(t){t.div.classList.toggle("card-cover")})),r.isPlay?o("button","btn-start",null,b,["type","button"]):(b.innerHTML="",f.innerHTML=""),r.gameIsOn&&(r.endGame(),r.generateMainPage()))})),g(this,"endGame",(function(){r.gameIsOn=!r.gameIsOn,r.score.correct=0,r.score.error=0,r.playWords=[],r.categoryCards=[],f.innerHTML="",y.innerHTML="",b.innerHTML=""})),g(this,"btnEventHandler",(function(t){"btn-start"===t.target.classList.value&&r.gameStart(),"btn-repeat"===t.target.classList.value&&s(r.playWords[0])})),this.isPlay=!1,this.gameIsOn=!1,this.categoryCards=[],this.playWords=[],this.currentCategory=null,this.menuItems=null,this.score={correct:0,error:0},this.statisticArr=null,this.currSortColl=null,this.isSortUp=!0,this.columnNames=["Categories","Words","Translation","Trained","Correct","Incorrect","%"]}var r,e;return r=t,(e=[{key:"init",value:function(){return this.menuItems=document.querySelectorAll(".burger__item"),this.subscribeEventListeners(),this}},{key:"subscribeEventListeners",value:function(){m.addEventListener("click",this.openMenuItem),p.addEventListener("click",this.openMenuCard),y.addEventListener("click",this.rotateCard),y.addEventListener("click",this.cardEventHandler),b.addEventListener("click",this.btnEventHandler),h.addEventListener("change",this.gameMode)}},{key:"generateCategoryPage",value:function(t){var r=this;this.clearPage(),this.gameIsOn&&this.endGame(),c[t+1].sort((function(){return Math.random()-.5})).forEach((function(t){var e=new n(t);r.categoryCards.push(e),r.playWords.push(e.word),r.isPlay&&e.div.classList.toggle("card-cover"),y.append(e.container)})),this.isPlay&&o("button","btn-start",null,b,["type","button"]),this.menuItemStatus()}},{key:"generateStatisticPage",value:function(){var t=this;this.clearPage();var r=o("div","stat-buttons",null,p),e=o("button","btn-reset","Reset",r,["type","button"]);o("button","btn-repeat-words","Repeat difficult words",r,["type","button"]).addEventListener("click",(function(){return t.generateRepeatPage()})),e.addEventListener("click",(function(){localStorage.statistic&&localStorage.removeItem("statistic"),t.loadStatistic(),t.generateStatisticPage()}));var a=o("div","table-wrapper",null,p),i=o("table","table-stat",null,a,["id","table"]),n=o("thead",null,null,i),c=o("tr",null,null,n);this.columnNames.forEach((function(t){o("th",null,t,c)}));var s=o("tbody",null,null,i);this.statisticArr.forEach((function(t){var r=Object.values(t);r.splice(3,2);var e=o("tr",null,null,s);r.forEach((function(t){o("td",null,String(t),e)}))})),n.addEventListener("click",(function(r){return t.sortRows(r)})),this.menuItemStatus()}},{key:"generateRepeatPage",value:function(){var t=this,r=this.statisticArr.filter((function(t){return t.percent>0&&t.percent<100}));r.sort((function(t,r){return t.percent-r.percent})),r=r.slice(0,8),this.clearPage(),0===r.length?(o("div","message","No cards for repeat.",y),setTimeout(this.generateMainPage,2e3)):r.forEach((function(r){var e=new n(r);t.categoryCards.push(e),t.playWords.push(e.word),t.isPlay&&e.div.classList.toggle("card-cover"),y.append(e.container)})),this.isPlay&&o("button","btn-start",null,b,["type","button"])}},{key:"sortRows",value:function(t){var r,e=t.target.closest("th"),a=document.querySelectorAll("th"),i=e.cellIndex,o=document.querySelector("#table"),n=Array.from(o.rows).slice(1);this.currSortColl===i&&(this.isSortUp=!this.isSortUp),a.forEach((function(t){t.classList.remove("sort-up","sort-down")})),this.isSortUp?(i>=3?n.sort((function(t,r){return r.cells[i].innerHTML-t.cells[i].innerHTML})):n.sort((function(t,r){return t.cells[i].innerHTML>r.cells[i].innerHTML?1:-1})),e.classList.add("sort-down")):(i>=3?n.sort((function(t,r){return t.cells[i].innerHTML-r.cells[i].innerHTML})):n.sort((function(t,r){return t.cells[i].innerHTML<r.cells[i].innerHTML?1:-1})),e.classList.add("sort-up")),this.currSortColl=i,(r=o.tBodies[0]).append.apply(r,d(n))}},{key:"gameStart",value:function(){0!==this.categoryCards.length&&(this.gameIsOn=!this.gameIsOn,b.innerHTML="",o("button","btn-repeat",null,b,["type","button"]),this.playWords.sort((function(){return Math.random()-.5})),s(this.playWords[0]))}},{key:"loadStatistic",value:function(){var t;localStorage.statistic?this.statisticArr=JSON.parse(localStorage.statistic):(this.statisticArr=(t=[]).concat.apply(t,d(c.slice(1))),this.statisticArr.forEach((function(t){var r=t;r.trained=0,r.correct=0,r.incorrect=0,r.percent=0})))}},{key:"clearPage",value:function(){this.categoryCards=[],this.playWords=[],p.innerHTML="",y.innerHTML="",b.innerHTML=""}},{key:"menuItemStatus",value:function(){var t=this;this.menuItems.forEach((function(r){r.textContent===t.currentCategory?r.classList.add("active"):r.classList.remove("active")}))}}])&&u(r.prototype,e),t}();window.addEventListener("DOMContentLoaded",(function(){var t,r,e,a,i,o;t=document.querySelector(".burger__overlay"),r=document.querySelector(".header__burger"),e=document.querySelector(".burger__menu"),a=document.querySelector("body"),i=document.querySelectorAll(".burger__item"),o=document.querySelector(".header__burger-icon"),r.addEventListener("click",(function(){o.classList.toggle("is-active"),e.classList.toggle("open"),e.classList.toggle("hide"),t.classList.toggle("unvisible"),a.classList.toggle("overflow")})),t.addEventListener("click",(function(){r.click()})),i.forEach((function(t){return t.addEventListener("click",(function(){r.click()}))}));var n=new v;n.init().generateMainPage(),n.loadStatistic()}))})()})();