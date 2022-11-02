import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../base/base-plot';
import '../base/base-seed';

@customElement('tab-main')
export class TabMain extends LitElement {
    static styles = css`
        .main-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .container {
            display: flex;
            justify-content: center;
            gap: 20px;
        }
    `;

    @property()
    inventory = {};

    render() {
        console.log(this.inventory);
        return html`
            <div class="main-container">
                <div class="container">
                    <base-plot></base-plot>
                </div>
                <div class="container">
                    <base-seed></base-seed>
                </div>
            </div>
        `;
    }
}