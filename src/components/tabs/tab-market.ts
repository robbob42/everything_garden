import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('tab-market')
export class TabMarket extends LitElement {
    render() {
        return html`
            <p>Market goes here</p>
        `;
    }
}