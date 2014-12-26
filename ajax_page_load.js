(function ($) {
    Drupal.behaviors.ajax_page_load = {
        attach: function (context, settings) {

            // Actions to make link Twitter Bootstrap Modal
            var APLtrigger = Drupal.settings.jquery_ajax_load.APLtrigger;
            var APLtarget = Drupal.settings.jquery_ajax_load.APLtarget;


            $(APLtrigger).once(function () {
                //
                var html_string = $(this).attr('href');
                $(this).data('href', '/jquery_ajax_load/get' + html_string);

                $(this).attr('data-target', APLtarget);
                $(this).attr('data-toggle', 'hide-and-replace');
            });

            $('[data-toggle="hide-and-replace"]').bind('click', function (e) {
                $('#hide-and-replace').remove();

                e.preventDefault();
                var target = $(this).data('target');
                var href = $(this).data('href');

                $(target).hide();

                // Insert an empty div in front of target element
                if (!$('#hide-and-replace').length) {
                    $(target).before('<div id="hide-and-replace"></div>');
                    $('#hide-and-replace').addClass('loading');
                }

                // Start loading data into empty div
                $('#hide-and-replace').load(href, function () {
                    $(this).removeClass('loading').prepend('<div class="container head"><a class="restore" data-toggle="restore-content">lukk</a></div>');

                    $('[data-toggle="restore-content"]').bind('click', function (e) {
                        e.preventDefault();
                        
                        $(target).show();
                        $('#hide-and-replace').remove();
                    })

                })


            });


        }
    }
}(jQuery))