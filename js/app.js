$(document).ready(function(){
    // Fonction annimation button
    $('.header_button').click(function(e){
        e.preventDefault();
        $this = $(this);
        if($this.hasClass('is-opened')){
            $this.addClass('is-closed').removeClass('is-opened');
        }else{
            $this.removeClass('is-closed').addClass('is-opened');
        }
    })
    // Fontion translation menu latéral
    $('.header_button').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('with_sideBar');
    })
});

