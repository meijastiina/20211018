document.getElementById('submitButton').onclick = function() {
    // Haetaan elementit
    let elements = document.getElementsByClassName('required');
    // Luodaan flagimuuttuja, jossa pidetään kirjaa siitä, onko tarkistuksessa ilmaantunu virheitä
    let inputsOK = true;
    // Loopataan elementit läpi
    for (let i = 0; i < elements.length; i++) {
        // Tarkistetaan käsiteltävänä olevan elementin sisältö
        if (elements[i].value == '') {
            // Virheviesti jos tyhjä
            console.log("Tyhjä kenttä");
            elements[i].classList.add('red');
            elements[i].parentElement.parentElement.getElementsByClassName('errorMessage')[0].style="display:inline";
            // Asetetaan flagimuuttuja falseksi
            inputsOK = false;
        } else {
            // Kenttä ok -> piilotetaan punaiset kehykset ja virheviesti
            elements[i].classList.remove('red');
            elements[i].parentElement.parentElement.getElementsByClassName('errorMessage')[0].style="display: none;";
        }
    }
    return inputsOK;
}