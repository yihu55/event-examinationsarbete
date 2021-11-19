$(document).ready(function() {
    //mer info popup
    $('.merinfo').click(function() {
        //sibling of the clicked button
        $(this).siblings('div').slideToggle(1000);
    })


    //expande imgage when hover
    $('.image').mouseover(function() {
        $(this).css({
            "width": "210px",
            "height": "160px"
        })
    })
    $('.image').mouseleave(function() {
        $(this).css({
            "width": "200px",
            "height": "150px"
        })
    })

    //formbutton

    $('#formSendButton').on('click', function(e) {
        e.preventDefault();

        $('#sending_message').html('<h3>Tack för ditt meddelande. Vi återkopplar så fort vi kan</h3>');
        $('#contact_form').hide();
        //alert("Tack för ditt meddelande. Vi återkopplar så fort vi kan")
    })




})