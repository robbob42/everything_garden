import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '../garden-header/garden-header';
import '../garden-body/garden-body';

@customElement('garden-container')
export class GardenContainer extends LitElement {
  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      width: 50vw;
      min-width: 800px;
      background-color: white;
      border: 1px solid gray;
      align-items: stretch;
      box-shadow: 0.01rem 0.05rem 0.2rem 0.1rem #cccccc;
    }
  `;
  render() {
    return html`
      <div class="container">
        <garden-header></garden-header>
        <garden-body></garden-body>
      </div>
    `;
  }
}
