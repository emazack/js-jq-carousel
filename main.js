$(document).ready(function(){
  // selezioniamo l'elemento freccia next
  var frecciaNext = $(".next-arrow");

  frecciaNext.click(
    function(){
      // seleziono la foto visibile in quel momento
      var visibleFoto = $(".fotos img.visible")
      visibleFoto.removeClass("visible");
      visibleFoto.addClass("notvisibile");
    }
  )

});
