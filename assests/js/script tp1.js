$(document).ready(function () {

  // var number = 35;

  // version avec un nombre aléatoire
  var number = Math.floor(Math.random() * (100));
  var counter = 0;

  $("button").click(function () {

    counter += 1;


    //->Math.random, pour obetnir un nombre aléatoire entre 0 et 100

    var userNumber = $("#nmbr").val();
    if ($.isNumeric(userNumber)) {

      if (userNumber > 100 || userNumber < 0) {
        alert("Le nombre doit être compris entre 0 et 100");
      }
      else {

        if (userNumber == number) {
          alert("correcte");
          alert(counter + "Nombre d'essais");
        }
        else if (userNumber > number) {
          alert("moins");
        }
        else {
          alert("plus");
        }
      }
    }
    // count = count + 1;

  });
});