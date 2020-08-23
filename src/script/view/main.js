import DataSource from './../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");

    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.input)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = results => {
        clubListElement.list = results;
    }

    const fallbackResult = message => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;