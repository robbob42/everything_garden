import './components/garden/garden-container';
import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('everything-garden')
class EverythingGarden extends LitElement {
    static styles = css`
        .container {
            display: grid;
            place-items: center;
        }
    `;
    render() {
        return html `
        <div class="container">
            <garden-container></garden-container>
        </div>
        `;
    }
}