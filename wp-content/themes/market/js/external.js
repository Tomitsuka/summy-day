/*
 * https://github.com/mattkersley/Responsive-Menu
 */
;(function(a){var b=0;a.fn.mobileMenu=function(c){function e(a){return a.is("ul, ol")}function f(){return a(window).width()<d.switchWidth}function g(c){if(c.attr("id")){return a("#mobileMenu_"+c.attr("id")).length>0}else{b++;c.attr("id","mm"+b);return a("#mobileMenu_mm"+b).length>0}}function h(a){if(a.val()!==null){document.location.href=a.val()}}function j(b){b.css("display","none");a("#mobileMenu_"+b.attr("id")).show()}function k(b){b.css("display","");a("#mobileMenu_"+b.attr("id")).hide()}function l(b){if(e(b)){var c='<div class="td_mobile_menu_wrap"><select id="mobileMenu_'+b.attr("id")+'" class="mobileMenu">';c+='<option value="">'+d.topOptionText+"</option>";b.find("li").each(function(){var b="";var e=a(this).parents("ul, ol").length;for(i=1;i<e;i++){b+=d.indentString}var f=a(this).find("a:first-child").attr("href");var g=b+a(this).clone().children("ul, ol").remove().end().text();c+='<option value="'+f+'">'+g+"</option>"});c+="</select></div>";b.parent().append(c);a("#mobileMenu_"+b.attr("id")).change(function(){h(a(this))});j(b)}else{alert("mobileMenu will only work with UL or OL elements!")}}function m(a){if(f()&&!g(a)){l(a)}else if(f()&&g(a)){j(a)}else if(!f()&&g(a)){k(a)}}var d={switchWidth:768,topOptionText:"Select a page",indentString:"-"};return this.each(function(){if(c){a.extend(d,c)}var b=a(this);a(window).resize(function(){m(b)});m(b)})}})(jQuery);

jQuery(document).ready( function() {
    jQuery('#top-menu ul.menu').mobileMenu({
        switchWidth: 767
    });
    jQuery('#top-menu div.menu ul').mobileMenu({
        switchWidth: 767
    });
});