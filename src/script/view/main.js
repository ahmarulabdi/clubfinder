const main = function () {
    let searchElement = document.querySelector("#searchElement");
    let buttonSearchElement = document.querySelector("#searchButtonElement");
    let clubListElement = document.querySelector("#clubList");

    let onButtonSearchClicked = function () {
        let dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
    };

    let renderResult = function (results) {
        clubListElement.innerHTML = "";
        results.forEach(function (club) {
            let name = club.name;
            let fanArt = club.fanArt;
            let description = club.description;

            let clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
                '<div class="club-info">\n' +
                '<h2>' + name + '</h2>\n' +
                '<p>' + description + '</p>' +
                '</div>';
            clubListElement.appendChild(clubElement);
        })
    };

    let fallbackResult = function (message) {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};