/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "230px";
    document.getElementById("main").style.marginLeft = "250px";
    $('#openSB').hide();
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $('#openSB').show();

  }

  // $('#target').show(); //muestro mediante id
  // $('.target').hide(); /

  function filtroMenu(c) {
    var x = document.getElementById("todo");
    var y = x.querySelectorAll("li");
    // console.log(c);
    // console.log(y);
    var i, c;
    for (i = 0; i < y.length; i++) {
        if (y[i].className == c || c == "all") {
            y[i].style.display = "inline-block";
        } else {
            y[i].style.display = "none";
        }
    }
    closeNav();
}

