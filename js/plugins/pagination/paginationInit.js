/**
* init for simplePagination.js
* Author: Flavius Matis - http://flaviusmatis.github.com/
* URL: https://github.com/flaviusmatis/simplePagination.js
*/
$(function() {
    $('.pagination').pagination({
        items: 8,
        itemsOnPage: 1,
        cssStyle: 'mytheme',
        // hrefTextPrefix: 'page-',
        // hrefTextSuffix: '.html',
        edges: 1,
        displayedPages: 4,
        nextText: ' ',
        prevText: ' ',
    });
});