$(document).ready(function () {
  $("#Ime, #Prezime, #Email").on("keyup", function () {
    var imeValue = $("#Ime").val().toLowerCase();
    var prezimeValue = $("#Prezime").val().toLowerCase();
    var emailValue = $("#Email").val().toLowerCase();

    $("#myTable tr").each(function () {
      var rowIme = $(this).find("td").eq(0).text().toLowerCase();
      var rowPrezime = $(this).find("td").eq(1).text().toLowerCase();
      var rowEmail = $(this).find("td").eq(2).text().toLowerCase();

      if (
        rowIme.indexOf(imeValue) > -1 &&
        rowPrezime.indexOf(prezimeValue) > -1 &&
        rowEmail.indexOf(emailValue) > -1
      ) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
