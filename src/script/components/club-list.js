import './club-item.js';

class ClubList extends HTMLElement {
    set list(list) {
        this._list = list;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._list.forEach( club => {
            const clubElement = document.createElement("club-item");

            clubElement.item = club;
            this.appendChild(clubElement);
        })
    }

    renderError(message) {
        this.innerHTML = `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('club-list', ClubList);