import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('tab-inventory')
export class TabInventory extends LitElement {
    render() {
        return html`
            <p>Inventory goes here</p>
        `;
    }
}