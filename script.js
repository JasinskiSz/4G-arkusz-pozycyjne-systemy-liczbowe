function przelicz() {
    let liczba = document.getElementById("liczba").value;
    const paragraf = document.getElementById("wynik-obliczen");
    let wynik = "";

    // Obliczanie binarne
    // zmienić wynik na binarny
    // i zgrupować po 4 elementy
    let licznik = 0
    while (liczba > 0) {
        // co 4 wykonanie pętli dodaj spację do wyniku
        if (licznik == 4) {
            wynik = " " + wynik
            licznik = 0
        }
        wynik = liczba % 2 + wynik
        liczba = Math.floor(liczba / 2)
        // zwiększ licznik o 1 po każdym wykonaniu pętli
        licznik = licznik + 1;
    }

    // for(let i = wynik.length; i > 0; i -= 4) {
        
    // }

    // Dodanie indeksu dolnego
    wynik = wynik + "<sub>(2)</sub>"

    paragraf.innerHTML = wynik;
}