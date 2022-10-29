import './components/garden-container/garden-container';
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('everything-garden')
class EverythingGarden extends LitElement {
    render() {
        return html `
        <garden-container></garden-container>
        `;
    }
}