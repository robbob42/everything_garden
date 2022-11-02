import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('garden-header')
export class GardenHeader extends LitElement {
    static styles = css`
        header {
            background: var(--cds-global-color-construction-900);
            color: var(--cds-global-color-gray-0);
            text-align: center;
            padding: var(--δ4)!important;
        }
        .text {
            font-family: var(--cds-global-typography-font-family);
            margin-top: 0;
            margin-bottom: 0;
        }
        .message {
            font-size: var(--cds-global-typography-message-font-size);
            font-weight: var(--cds-global-typography-message-font-weight);
            line-height: var(--cds-global-typography-message-line-height);
            letter-spacing: var(--cds-global-typography-message-letter-spacing);
        }
        .secondary {
            font-size: var(--cds-global-typography-secondary-font-size);
            font-weight: var(--cds-global-typography-secondary-font-weight);
            line-height: var(--cds-global-typography-secondary-line-height);
            letter-spacing: var(--cds-global-typography-secondary-letter-spacing);
        }
    `;
    render() {
        return html`
            <div class="container">
                <header class="body-header" >
                    <p class="text message">Everything Garden</p>
                    <p class="text secondary">
                        Grow everything!
                        <br />Just grab a seed
                        <br />and plant it!
                    </p>
                </header>
            </div>
        `;
    }
}