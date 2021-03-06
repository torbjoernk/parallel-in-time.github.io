$(document).ready(function() {
    $('article.post-content .content > p:first').addClass('lead');

    $('div.reference > span.doi').each(function() {
        $(this).wrapInner('<a href="http://dx.doi.org/' + $(this).html() + '"></a>');
    });
    $('div.reference > span.arxivid').each(function() {
        $(this).wrapInner('<a href="//arxiv.org/abs/' + $(this).html() + '"></a>');
    });
    $('div.reference > span.mendeley').each(function() {
        var link = $(this).html();
        $(this).replaceWith('<a class="mendeley hidden-xs" role="button" href="'
            + link
            + '" title="Read on Mendeley" target="_blank">'
            + '<i class="fa fa-search"></i></a>');
    });
    $('div.reference > a.mendeley').each(function() {
        $(this).parent().prepend($(this).clone());
        $(this).remove();
    });
});
