$(document).ready(function () {
  var altura = $(".menu").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > altura) {
      $(".menu").addClass("menu-fixed");
      p();
    } else {
      $(".menu").removeClass("menu-fixed");
      p();
    }
  });

});

function p() {
  if ($(".menu-fixed").length > 0) {
    if ($("#pruebaOWO").length === 0) {
        $(".menu").append(
            $(`            <li class="nav-item" id="pruebaOWO">
                <div id="main" class=" mt-3 menu2">
                <button id="openSB" class="openbtn rounded-pill fuenteC btnCategorias " onclick="openNav()"> Filtro</button>
              </div>
              </li>`)
          );
    } 
    
  } else {
    $("#pruebaOWO").remove();
  }
}
