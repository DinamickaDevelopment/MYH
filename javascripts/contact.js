$(window).ready(function () {
    $('input.placeholderimit').on('focus', hidePlace);
    $('input.placeholderimit').on('blur', showPlace);

    function hidePlace() {
        $(this).parent().find('label.placeholderobj').hide();
    }
    function showPlace() {
        if($(this)[0].value == ''){$(this).parent().find('label.placeholderobj').show();
}
    }
});