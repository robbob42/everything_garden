import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('garden-body')
export class GardenBody extends LitElement {

    render() {
        return html`
            <p><slot></slot></p>
        `;
    }
}