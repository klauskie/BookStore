
$(function(){
    var loading = $('#loadbar').hide();
    $(document)
        .ajaxStart(function () {
            loading.show();
        }).ajaxStop(function () {
        loading.hide();
    });

    $("label.btn").on('click',function () {
        var choice = $(this).find('input:radio').val();
        $('#loadbar').show();
        $('#quiz').fadeOut();
        setTimeout(function(){
            $( "#answer" ).html(  $(this).checking(choice) );
            $('#quiz').show();
            $('#loadbar').fadeOut();
        }, 1000);
    });

    var $ans = 3;

    $.fn.checking = function(option) {
        if (option != $ans)
            return "INCORRECT";
        else
            $("#show").show(100);
        document.getElementById("answer").innerHTML = "CORRECT";

    };


});





