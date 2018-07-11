function header() {
    const header = $('.page-header');

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            header.addClass('page-header-fixed');
        } else {
            header.removeClass('page-header-fixed');
        }
    })
}

export { header }