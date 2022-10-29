import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

@customElement('garden-container')
export class GardenContainer extends LitElement {
  @property()
  version = 'STARTING';

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }
}
