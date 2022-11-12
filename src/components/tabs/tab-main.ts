import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import Inventory from '../../classes/Inventory';
import Seed from '../../classes/Seed';
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

    @property({type : Inventory})
    inventory: Inventory | undefined;

    render() {
        const startingSeed: Seed[] | undefined = this.inventory?.getSeed('Navigation Seed');
        console.log(this.inventory &&  this.inventory.seeds);
        return html`
            <div class="main-container">
                <div class="container">
                    <base-plot>
                        <base-seed
                            .seedName=${startingSeed && startingSeed[0].name} 
                            .seedColor=${startingSeed && startingSeed[0].color}
                            .seedProductionTime=${startingSeed && startingSeed[0].productionTime}
                        ></base-seed>
                    </base-plot>
                </div>
                <div class="container">
                    <base-seed
                        .seedName=${startingSeed && startingSeed[0].name} 
                        .seedColor=${startingSeed && startingSeed[0].color}
                        .seedProductionTime=${startingSeed && startingSeed[0].productionTime}
                    ></base-seed>
                </div>
            </div>
        `;
    }
}