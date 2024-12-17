jQuery(document).ready(function(){stickyHeader();stickySections();loadShowcaseImages();lazyLoadStickyThemes();smoothScroll();comparePlans();switchPlans();mimicDomainTyping();if(!isTouchDevice()){paralax()}autoplayVideo();if("undefined"===typeof textReview||!textReview.isTextReviewMode()){fixWidows()}showToolTips();toggleMobileNavigation()});jQuery(window).load(function(){fixPlanHeights();fixBenefitsHeight();fixProductsHeight();fixFeaturesLineBreak()});jQuery(window).resize(function(){fixPlanHeights();fixBenefitsHeight();fixProductsHeight();fixFeaturesLineBreak()});function stickyHeader(){var e=".lp-headline .lp-container";var i="#headline-cta";if(jQuery(".masterbar > .x-nav").length){return}jQuery(e).waypoint({handler:function(e){if(jQuery(".masterbar").hasClass("flip-masterbar-transparency")){jQuery(".masterbar").css("transition","none");if(e==="down"){jQuery(".masterbar").toggleClass("is-invisible is-transparent")}if(e==="up"){jQuery(".masterbar ").toggleClass("is-invisible is-transparent")}}}});jQuery(i).waypoint(function(){jQuery(".masterbar ").toggleClass("is-fixed")},{offset:"-70px"})}function stickySections(){var e=jQuery;e('[data-toggle~="sticky"]').each(function(){var i=e(this);var t=i.prev("section, div");var n=i.next("section, div");if(1!==i.length||1!==t.length||1!==n.length){return}new Waypoint.Inview({element:t,exited:function(e){if(!i.is(":visible")){i.removeClass("is-sticky was-sticky-down")}else if(e==="down"){i.addClass("is-sticky");i.removeClass("was-sticky-down")}},enter:function(e){if(!i.is(":visible")){i.removeClass("is-sticky was-sticky-down")}else if(e==="up"){i.removeClass("is-sticky was-sticky-down")}}});new Waypoint.Inview({element:n,enter:function(e){if(!i.is(":visible")){i.removeClass("is-sticky was-sticky-down")}else if(e==="down"){i.removeClass("is-sticky");i.addClass("was-sticky-down")}},exited:function(e){if(!i.is(":visible")){i.removeClass("is-sticky was-sticky-down")}else if(e==="up"){i.addClass("is-sticky");i.removeClass("was-sticky-down")}}})})}function lazyLoadStickyThemes(e){var i=false;var t=jQuery(e||".lp-sticky-themes");if(1!==t.length){return}new Waypoint.Inview({element:jQuery(t),enter:function(e){if(!i){i=true;affixStickyThemes(t);lazyLoadImages(t.find("img[data-img-url]"))}}})}function lazyLoadImages(e){var i=jQuery(window),t=jQuery("html, body");var n=t.hasClass("webp")?"webp":"jpg",a=hasRetinaSupport()||i.width()>1440;jQuery(e).each(function(e,i){var t=jQuery(i);var o=t.attr("data-img-url");var s=a&&t.hasClass("has-2x")?"-2x":"";o=o+s+"."+n;t.attr("src",o);var r=new Image;r.onload=function(){hookImageAnimation(t.closest(".lp-image-animator"))};r.src=o})}function hookImageAnimation(e){var i=jQuery(e);if(1!==i.length){return}new Waypoint.Inview({element:i,entered:function(e){if(e==="up"){i.removeClass("animate-down");i.addClass("animate-up visible")}else if(e==="down"){i.removeClass("animate-up");i.addClass("animate-down visible")}}})}function affixStickyThemes(e){var i=jQuery(window);if(i.width()<=960){return}var t=jQuery(e);var n=t.find(".lp-sticky-themes-affix");var a=t.prev("section");var o=t.next("section");if(1!==t.length||1!==n.length){return}else if(1!==a.length||1!==o.length){return}new Waypoint.Inview({element:a,exited:function(e){if(e==="down"){n.css({"bottom":"auto","position":"fixed","top":n[0].getBoundingClientRect().top})}},enter:function(e){if(e==="up"){n.css({"top":"auto","bottom":"auto","position":"absolute"})}}});new Waypoint.Inview({element:o,enter:function(e){if(e==="down"){n.css({"top":"auto","position":"absolute","bottom":window.innerHeight-n[0].getBoundingClientRect().bottom})}},exited:function(e){if(e==="up"){n.css({"top":0,"position":"fixed"})}}})}function comparePlans(){var e=jQuery("#plans");var i=e.find("#plans-compare-link");var t=e.find(".plans-table");if(!e.length||!i.length||!t.length){return}i.on("click",function(i){if(t.hasClass("is-expanded")){t.removeClass("is-expanded");$("html, body").animate({scrollTop:e.offset().top},500)}else{t.addClass("is-expanded")}setTimeout(fixPlanHeights,100);i.stopImmediatePropagation();i.preventDefault()})}function switchPlans(){jQuery(".plan-view-switcher a").on("click",function(){jQuery(this).removeClass("is-active");jQuery(this).siblings().addClass("is-active");jQuery(".plans-compare").each(function(){jQuery(this).toggleClass("is-active")});return false})}jQuery("body").on("click",function(){if(window.tooltipOpen){hideToolTip()}hideMobileNavigation()});function paralax(){var e=jQuery(window);jQuery('section[data-type="background"]').each(function(){var i=jQuery(this);jQuery(window).scroll(function(){var t=-(e.scrollTop()/i.data("speed"));var n="50% "+t+"%";i.css({backgroundPosition:n})})})}function smoothScroll(){var e=45;if(isTouchDevice())e=0;jQuery(".is-local-anchor").on("click",function(i){i.preventDefault();var t=this.hash;var t=jQuery(t);var n=t.offset().top-e;jQuery("html, body").stop().animate({"scrollTop":n},900,"swing")})}function loadShowcaseImages(){var e=false,i=false;fileExtension=".jpg",retina="";i=hasRetinaSupport();if(jQuery("html, body").hasClass("webp")){fileExtension=".webp"}jQuery(".showcase-examples img, .showcase-browser img").each(function(e,t){fileURL=jQuery(t).attr("data-img-url");if(i&&jQuery(t).hasClass("has-2x"))retina="-2x";else{retina=""}jQuery(t).attr("src",fileURL+retina+fileExtension)})}function hasRetinaSupport(){var e="(-webkit-min-device-pixel-ratio: 1.5),	        (min--moz-device-pixel-ratio: 1.5),	        (-o-min-device-pixel-ratio: 3/2),	        (min-resolution: 1.5dppx)";if(window.devicePixelRatio>1)return true;if(window.matchMedia&&window.matchMedia(e).matches)return true;return false}function isTouchDevice(){return"ontouchstart"in window||"onmsgesturechange"in window};function mimicDomainTyping(){if(jQuery("#domains").length){var e=new Waypoint.Inview({element:jQuery("#domains")[0],enter:function(e){animateDomain()}})}}function animateDomain(){jQuery(".lp-domains__domain-url").typed({stringsElement:jQuery("#domain-strings").length?jQuery("#domain-strings"):null,strings:["infocusphotographers.com","cortadocoffeesf.com","leahrand.com","avayoung.blog","mightyleaftearoom.com"],typeSpeed:30,backDelay:2e3,backSpeed:10,loop:true,loopCount:3})}function isIE(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1?parseInt(e.split("msie")[1]):false}function isApple(){return!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)}function autoplayVideo(){if(jQuery(".video-overlay").length){if(!isApple()&&!(isIE()&&isIE()<9)&&window.innerWidth>680){var e=jQuery(".video-overlay").attr("data-file");videoElement="<video autoplay loop >";videoElement+='<source src="'+e+'.mp4" type="video/mp4">';videoElement+='<source src="'+e+'.webm" type="video/webm">';videoElement+='<source src="'+e+'.ogv" type="video/ogv">';videoElement+="</video>";jQuery(".video-overlay").append(videoElement)}else{var i=jQuery(".lp-headline").attr("data-fallbackclass");jQuery(".lp-headline").addClass(i)}}}function fixWidows(e){var i=jQuery;var t=i.extend({},{minWidth:320,minWords:3,maxWordLength:15,useNonBreakingHyphens:true,rtlEnable:false,selectors:[".no-widows","h2, h3, h4",".description p",".lp-benefits__illustration p"],negate:[".allow-widows"]},e||window.fixWidowsConfig||{});t.minWidth=Math.max(0,t.minWidth);t.minWords=Math.max(1,t.minWords);t.maxWordLength=Math.max(10,t.maxWordLength);if(!t.selectors.length||!e&&-1===t.selectors.indexOf(".no-widows")){t.selectors.push(".no-widows")}if(!t.negate.length||!e&&-1===t.negate.indexOf(".allow-widows")){t.negate.push(".allow-widows")}if(window.innerWidth<t.minWidth){return}else if(!t.rtlEnable&&i('html[dir="rtl"]').length){return}var n=new RegExp("^\\s+|\\s+$","g");var a=new RegExp("[<>]|&#?[a-z0-9]+;","i");var o=new RegExp("\\s+");var s=new RegExp("\\<[^<>]*\\>","g");var r=new RegExp("\\<tag:([0-9]+)\\>","g");var l=new RegExp("\\s+(\\S{1,"+t.maxWordLength+"})"+"\\s+(\\S{1,"+t.maxWordLength+"})"+"$","g");var c=new RegExp("\\s+(\\S+)\\s+(\\S+)$","g");var d=new RegExp("(\\S{1,"+t.maxWordLength+"})"+"-(\\S{1,"+t.maxWordLength+"})","g");var u=new RegExp("(\\S+)-(\\S+)","g");i(t.selectors.join(",")).not(t.negate.join(",")).each(function(){var e=i(this);var f=e.html();var h=[];var p=a.test(f);f=f.replace(n,"");f=f.replace(s,function(e){h.push(e);return"<tag:"+(h.length-1)+">"});if(-1!==f.indexOf("&nbsp;")){return}else if(f.split(o).length<t.minWords){return}else if(!t.rtlEnable&&e.is('[dir="rtl"]')){return}f=f.replace(p?c:l," $1&nbsp;$2");if(t.useNonBreakingHyphens){f=f.replace(p?u:d,"$1&#8209;$2")}f=f.replace(r,function(e,i){return h[i]});e.html(f)})}function fixPlanHeights(){setHeight(".plans-table .plan-header.adjust-height");setHeight(".plans-table .pre-features p:first-child");setHeight(".plans-table .pre-features");setHeight(".plans-table .features-list");setHeight(".plans-table .post-features");setHeight(".plan-header h4");setHeight(".plan-details .content-to-align")}function fixProductsHeight(){setHeight(".lp-segment__description",980);setHeight(".lp-offers-column h3",980);setHeight(".lp-offers-partners div.box-to-align",980)}function setHeight(e,i){var t=jQuery(window);var n=jQuery(e);if(!n.length){return}i=i||n.first().closest("[data-adjust-height-breakpoint]").attr("data-adjust-height-breakpoint")||660;if(window.innerWidth>i){var a=0;n.each(function(){var e;var i=jQuery(this);i.css({"min-height":0});e=i.outerHeight(true);if(e>a){a=e}});n.each(function(){jQuery(this).css({"min-height":a+"px"})})}else{n.each(function(){jQuery(this).css({"min-height":0})})}}function showToolTips(){var e=jQuery,i=e(window),t=e("body");var n=e(".features-list__item-tooltip"),a=e(".features-list__item-tooltip-container"),o=e(".features-list__item-tooltip-content");n.each(function(){var t=e(this);t.on("click",function(e){e.stopPropagation();if(t.hasClass("is-active")){hideToolTip()}else{hideToolTip();t.addClass("is-active");var n=t.attr("id"),s=n&&window.featureTooltips?featureTooltips[n]:"";s=s?s:t.data("tooltip");o.text(s||"");if("undefined"===typeof textReview||!textReview.isTextReviewMode()){fixWidows({minWidth:660,selectors:[".features-list__item-tooltip-content"]})}var r=a.height(),l=a.width(),c=t.offset().left+18,d=t.offset().top-r/2-2,u=i.width()-(t.offset().left+t.outerWidth());if(u<300){a.addClass("is-reversed");a.offset({top:d,left:c-l-37});a.css({opacity:1})}else{a.removeClass("is-reversed");a.offset({top:d,left:c});a.css({opacity:1})}}})});t.on("click",hideToolTip)}function hideToolTip(){var e=jQuery;var i=e(".features-list__item-tooltip.is-active"),t=e(".features-list__item-tooltip-container");i.each(function(){e(this).removeClass("is-active")});t.css({opacity:0});t.offset({top:-100,left:-500})}function fixFeaturesLineBreak(){var e="features-list";var i=document.getElementsByClassName(e);var t=0;var n=0;jQuery("."+e).each(function(e,i){++t;n=i.children.length>n?i.children.length:n});for(var a=0;a<n;++a){var o=0;for(var s=0;s<t;++s){if(a<i[s].children.length){var r=i[s].children[a].offsetHeight;o=r>o?r:o}}for(var s=0;s<t;++s){if(a<i[s].children.length){i[s].children[a].style.minHeight=o+"px"}}}}function toggleMobileNavigation(){var e=jQuery("#masterbar__menu-toggle");jQuery(e).on("click",function(i){jQuery(e).toggleClass("toggled-on");jQuery("#masterbar__links").toggleClass("toggled-on");jQuery("#wpcom-logo").toggleClass("toggled-on");i.stopPropagation()})}function hideMobileNavigation(){if(jQuery("#masterbar__menu-toggle").hasClass("toggled-on")){jQuery("#masterbar__menu-toggle").removeClass("toggled-on");jQuery("#masterbar__links").removeClass("toggled-on");jQuery("#wpcom-logo").removeClass("toggled-on")}}function hijackLogoClicks(){jQuery("#wpcom-logo").on("click",function(e){e.stopPropagation()})}function fixBenefitsHeight(){if(jQuery(window).width()>660){var e=0,i=0;listIndex=0;itemIndex=0;var t,n,a;n=jQuery(".lp-benefits__list");t=new Array;for(var o=0,s=n.length;o<s;o++){a=n[o].children;for(var r=0,l=a.length;r<l;r++){i=a[r].offsetHeight;if(t[itemIndex]){if(t[itemIndex]<i){t[itemIndex]=i}}else{t.push(i)}itemIndex++}listIndex++;itemIndex=0}listIndex=0;itemIndex=0;for(var o=0,s=n.length;o<s;o++){a=n[o].children;for(var r=0,l=a.length;r<l;r++){a[r].style.minHeight=t[itemIndex]+"px";itemIndex++}listIndex++;itemIndex=0}}}