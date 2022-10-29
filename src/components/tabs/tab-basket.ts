import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('tab-basket')
export class TabBasket extends LitElement {
    render() {
        return html`
            <p>Basket goes here</p>
        `;
    }
}