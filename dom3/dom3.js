window.addEventListener("load", function () {
  var tablaZaIgra = document.getElementById("game-board");
  var brojacNaObidi = document.getElementById("attempts-count");
  var vozaci = [
    "max.jpg",
    "lewis.jpg",
    "charles.jpg",
    "lando.jpg",
    "yuki.jpg",
    "kimi.jpg",
  ];
  var spilKarti = vozaci.concat(vozaci);
  var obidi = 0;
  var svrteniKarti = [];
  var pogodeniParovi = 0;
  var tablataEZaklucena = false;
  function izmesaj(niza) {
    for (var i = niza.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = niza[i];
      niza[i] = niza[j];
      niza[j] = temp;
    }
  }
  function kreirajTabla() {
    izmesaj(spilKarti);

    for (var i = 0; i < spilKarti.length; i++) {
      var imeNaVozac = spilKarti[i];
      var karta = document.createElement("div");
      karta.classList.add("card");
      karta.dataset.driver = imeNaVozac;
      karta.innerHTML =
        '<div class="card-face card-front">' +
        '<img src="' +
        imeNaVozac +
        '" alt="F1 Driver">' +
        "</div>" +
        '<div class="card-face card-back">?</div>';
      karta.addEventListener("click", obrabotiKlikNaKarta);
      tablaZaIgra.appendChild(karta);
    }
  }
  function obrabotiKlikNaKarta(nastan) {
    var kliknataKarta = nastan.currentTarget;
    if (
      tablataEZaklucena === true ||
      kliknataKarta.classList.contains("flipped")
    ) {
      return;
    }

    kliknataKarta.classList.add("flipped");
    svrteniKarti.push(kliknataKarta);
    if (svrteniKarti.length === 2) {
      proveriPogodok();
    }
  }
  function proveriPogodok() {
    obidi++;
    brojacNaObidi.textContent = obidi;
    tablataEZaklucena = true; //
    var kartaEden = svrteniKarti[0];
    var kartaDva = svrteniKarti[1];
    if (kartaEden.dataset.driver === kartaDva.dataset.driver) {
      pogodeniParovi++;
      onevozmoziKarti();
      proveriPobeda();
    } else {
      setTimeout(prevrtiKarti, 1000);
    }
  }
  function onevozmoziKarti() {
    for (var i = 0; i < svrteniKarti.length; i++) {
      var karta = svrteniKarti[i];
      karta.removeEventListener("click", obrabotiKlikNaKarta);
    }
    resetirajPoteg();
  }
  function prevrtiKarti() {
    for (var i = 0; i < svrteniKarti.length; i++) {
      var karta = svrteniKarti[i];
      karta.classList.remove("flipped");
    }
    resetirajPoteg();
  }
  function resetirajPoteg() {
    svrteniKarti = [];
    tablataEZaklucena = false;
  }
  function proveriPobeda() {
    if (pogodeniParovi === vozaci.length) {
      setTimeout(function () {
        alert(" Gi najde site parovi vo " + obidi + " obidi.");
      }, 500);
    }
  }
  kreirajTabla();
});
