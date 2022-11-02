import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@cds/core/button/register.js';

@customElement('base-seed')
export class BaseSeed extends LitElement {
    static styles = css`
        .seed-button {
            --border-width: 1px;
            --text-transform: none;
            --padding: 5px;    
            --border-color: rgb(71.25, 67.5, 3);
            --color: rgb(71.25, 67.5, 3);
            outline: 'none';
            outline-width: 0ch;
        }
    `;
    render() {
        return html`
            <cds-icon-button action="outline" class="seed-button">
            (n)
            </cds-icon-button>
        `;
    }
}