import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('garden-body')
export class GardenBody extends LitElement {
    render() {
        return html`
            <p>Here's where the game goes</p>
        `;
    }
}