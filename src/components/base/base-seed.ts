import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import '@cds/core/button/register.js';
import Timer from "tiny-timer";

@customElement('base-seed')
export class BaseSeed extends LitElement {

    @property({type: String})
    seedName: string | undefined;

    @property({type: String})
    seedColor: string | undefined;

    @property({type: Number})
    seedProductionTime: number = 0;

    @state()
    protected _displayCharacter: String | undefined = ".";

    static styles = css`
        .seed-button {
            --border-width: 1px;
            --text-transform: none;
            --padding: 5px;
            outline: 'none';
            outline-width: 0ch;
        }
    `;

    plant() {
        const checkHalf = (ms: number) => {
            if (ms / this.seedProductionTime <= .5) {
                this._displayCharacter = this.seedName?.substring(0,1).toLowerCase();
            }
        }

        const timerComplete = () => {
            this._displayCharacter = this.seedName?.substring(0,1).toUpperCase();
        }

        const timer = new Timer();
        timer.on('tick', checkHalf)
        timer.on('done', timerComplete);
        timer.start(this.seedProductionTime);
    }

    render() {
        return html`
            <cds-icon-button
                action="outline" 
                class="seed-button" 
                style="--border-color: ${this.seedColor}; --color: ${this.seedColor}"
                aria-label="Plant ${this.seedName}"
                @click = "${this.plant}"
            >
            (${this._displayCharacter})
            </cds-icon-button>
        `;
    }
}