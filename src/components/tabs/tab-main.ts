import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('tab-main')
export class TabMain extends LitElement {
    render() {
        return html`
            <p>Plots go here</p>
        `;
    }
}