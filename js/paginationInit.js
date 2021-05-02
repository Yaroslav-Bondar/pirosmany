$(function() {
    $('.pagination').pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme',
        hrefTextPrefix: 'page-',
        hrefTextSuffix: '.html',
        nextText: ' ',
    });
});