$(document).ready(function(){
  // selezioniamo l'elemento freccia next
  var frecciaNext = $(".next-arrow");
  // selezioniamo l'elemento freccia prev
  var frecciaPrev = $(".prev-arrow");
  // selezioni l'elemento pallina
  var pallina = $(".balls i");

// quando clicci sulla freccia next
  frecciaNext.click(
    function(){
      // seleziono la foto visibile in quel momento
      var visibleFoto = $(".fotos img.visible");
      // selezioniamo la pallina visibile rossa
      var selectedPallina = $(".balls i.selected");
      // se viene selezionata l'ultima foto
      if (visibleFoto.hasClass("last") === true) {
        visibleFoto.removeClass("visible");
        selectedPallina.removeClass("selected");
        $(".first").addClass("visible");
        $(".prima").addClass("selected");
      } else {
        // faccio in modo che la foto/red scompaia
        visibleFoto.removeClass("visible");
        selectedPallina.removeClass("selected");
        // rendo visibile la foto/red successiva
        visibleFoto.next().addClass("visible");
        selectedPallina.next().addClass("selected");
      }
    }
  )
// quando clicci sulla freccia frecciaPrev
frecciaPrev.click(
  function(){
    // seleziono la foto visibile in quel momento
    var visibleFoto = $(".fotos img.visible")
    //
    var selectedPallina = $(".balls i.selected");
    //
    if (visibleFoto.hasClass("first") === true) {
      visibleFoto.removeClass("visible");
      selectedPallina.removeClass("selected");
      $(".last").addClass("visible");
      $(".ultima").addClass("selected");
    } else {
      // faccio in modo che la foto scompaia
      visibleFoto.removeClass("visible");
      selectedPallina.removeClass("selected");
      // rendo visibile la foto successiva
      visibleFoto.prev().addClass("visible");
      selectedPallina.prev().addClass("selected");
    }
  }
)
});
