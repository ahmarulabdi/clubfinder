class ClubItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set item(item) {
        this._item = item;
        this.render();
    }

    render() {
        this.innerHTML = `
        <img class="fan-art-club" src="${this._item.fanArt}" alt="Fan Art">
        <div class="club-info">
            <h2>${this._item.name}</h2>
            <p>${this._item.description}</p>
    </div>`;
    }
}

customElements.define('club-item', ClubItem);