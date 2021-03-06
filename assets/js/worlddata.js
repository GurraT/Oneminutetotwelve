// Get input on worldpopulation from World bank
fetch(
        'https://api.worldbank.org/v2/country/1W/indicator/SP.POP.TOTL/?format=json&date=2010:2020&per_page=5000')
    .then(function(response) {
        return response.json();
    }).then(function(popdata) {
        appendpopData(popdata);
    }).catch(function(err) {
        alert('error: ' +
        err); //send error-alert if code not working
    });
sumWorldPop = 0;

function appendpopData(popdata) {
    document.getElementById("Worldpop").innerHTML = (popdata[1][1]
        .value / 1000000000).toFixed(2) + '  billion people ';
}
// Get input on mean life expectence from World bank 
fetch(
        "https://api.worldbank.org/v2/en/country/1W/indicator/SP.DYN.LE00.IN?format=json&per_page=100&source=2&date=2010:2020")
    .then(function(resp) {
        return resp.json();
    }).then(function(agedata) {
        appendageData(agedata);
    }).catch(function(err) {
        alert('error: ' +
        err); //send error-alert if code not working
    });

function appendageData(agedata) {
    document.getElementById("ageData").innerHTML = agedata[1][2].value
        .toFixed(1);
}
// // Get input on procentage of world people living on less 1.9$ a day from World bank 
fetch(
        "https://api.worldbank.org/v2/en/country/1W/indicator/SI.POV.DDAY?format=json&per_page=100&source=2&date=2010:2020")
    .then(function(res) {
        return res.json();
    }).then(function(povertydata) {
        appendagePovertyData(povertydata);
    }).catch(function(err1) {
        alert('error: ' +
        err1); //send error-alert if code not working
    });

function appendagePovertyData(povertydata) {
    document.getElementById("povertyData").innerHTML = povertydata[1][
        3
    ].value.toFixed(2);
}