$(document).ready(function() {
    function translateHello() {
        const langCode = $('#language_code').val();
        $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`, function(data) {
            $('#hello').text(data.hello);
        });
    }

    $('#btn_translate').click(translateHello);

    $('#language_code').keypress(function(event) {
        if (event.which == 13) {
            translateHello();
        }
    });
});
