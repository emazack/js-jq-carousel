$(document).ready(function(){
  // selezioniamo l'elemento freccia next
  var frecciaNext = $(".next-arrow");
  // selezioniamo l'elemento freccia prev
  var frecciaPrev = $(".prev-arrow");
  // selezioni l'elemento pallina
  var pallina = $(".balls i");
  // gruppo di palline
  var gruppoPalline = $("balls")
  // gruppo di foto
  var gruppoFoto = $("img")

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
// Quando clicchi sulla pallina si seleziona
  pallina.click(
    function(){
      // seleziono la foto visibile in quel momento
      var visibleFoto = $(".fotos img.visible")
      // toglie il rosso a tutte le palline
      pallina.removeClass("selected");
      // mette il rosso alla pallina selezionata
      $(this).addClass("selected");
      //
      if ($(this).hasClass("uno")) {
        visibleFoto.removeClass("visible");
        //
        $(".fotos img.uno").addClass("visible");

      } else if ($(this).hasClass("due")) {
        visibleFoto.removeClass("visible");
        //
        $(".fotos img.due").addClass("visible");

      } else if ($(this).hasClass("tre")) {
        visibleFoto.removeClass("visible");
        //
        $(".fotos img.tre").addClass("visible");

      } else if ($(this).hasClass("quattro")) {
        visibleFoto.removeClass("visible");
        // 
        $(".fotos img.quattro").addClass("visible");
      }
    }
  )
});
