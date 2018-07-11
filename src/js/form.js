function contactForm() {
    const $form = $('#contactForm');
    $form.attr('novalidate', true);
    const $btn = $form.find('button[type="submit"]');

    $form.on('submit', function(e) {
        e.preventDefault();

        const $inputs = $form.find('input, textarea');
        let hasError = false;

        $inputs.each(function() {
            if (!$(this)[0].checkValidity()) {
                //bledne pole
                $(this).addClass('field-error');
                hasError = true;
            } else {
                $(this).removeClass('field-error');
            }
        });

        if (!hasError) {
            $btn.attr('disabled', true);
            $btn.addClass('loading');
            $form.find('.form-message').remove();

            $.ajax({
                url : $form.attr('action'),
                method : $form.attr('method'),
                data: $form.serializeArray(),
                dataType : 'json'
            }).done(function(ret) {
                if (ret.status === 'ok') {
                    $btn.after('<div class="form-message">Twoja wiadomość została wysłana</div>');
                }
            }).always(function() {
                $btn.removeAttr('disabled');
                $btn.removeClass('loading');
            })
        }
    })
}


export { contactForm }