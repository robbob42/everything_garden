import {LitElement, html, css, nothing} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import '../garden-header/garden-header';
import '../garden-body/garden-body';
import '../tabs/tab-main';
import '../tabs/tab-inventory';
import '../tabs/tab-basket';
import '../tabs/tab-market';

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

  @state()
  protected _selectedTab: string = "main";

  render() {
    return html`
      <div class="container">
        <garden-header></garden-header>
        <garden-body>
          ${this._selectedTab === 'main' ? html`<tab-main></tab-main>` : nothing}
          ${this._selectedTab === 'inventory' ? html`<tab-inventory></tab-inventory>` : nothing}
          ${this._selectedTab === 'basket' ? html`<tab-basket></tab-basket>` : nothing}
          ${this._selectedTab === 'market' ? html`<tab-market></tab-market>` : nothing}
        </garden-body>
      </div>
    `;
  }
}
