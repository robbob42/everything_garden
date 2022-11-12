import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('base-plot')
export class BasePlot extends LitElement {
    static styles = css`
      .plot {
        border: 1px solid black;
        width: 50px;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        line-height: 50px;
        cursor: pointer;
        margin: auto;
        padding-top: 13px;
      }
      `;
    render() {
        return html`
            <div class="plot">
              <slot></slot>
            </div>
        `;
    }
}