$(document).ready(function(){
  // selezioniamo l'elemento freccia next
  var frecciaNext = $(".next-arrow");
  // selezioniamo l'elemento freccia prev
  var frecciaPrev = $(".prev-arrow");

// quando clicci sulla freccia next
  frecciaNext.click(
    function(){
      // seleziono la foto visibile in quel momento
      var visibleFoto = $(".fotos img.visible")
      if (visibleFoto.hasClass("last") === true) {
        visibleFoto.removeClass("visible");
        $(".first").addClass("visible");
      } else {
        // faccio in modo che la foto scompaia
        visibleFoto.removeClass("visible");
        // rendo visibile la foto successiva
        visibleFoto.next().addClass("visible");
      }
    }
  )
// quando clicci sulla freccia frecciaPrev
frecciaPrev.click(
  function(){
    // seleziono la foto visibile in quel momento
    var visibleFoto = $(".fotos img.visible")
    if (visibleFoto.hasClass("first") === true) {
      visibleFoto.removeClass("visible");
      $(".last").addClass("visible");
    } else {
      // faccio in modo che la foto scompaia
      visibleFoto.removeClass("visible");
      // rendo visibile la foto successiva
      visibleFoto.prev().addClass("visible");
    }
  }
)
});
