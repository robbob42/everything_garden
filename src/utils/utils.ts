import Inventory from '../classes/Inventory';
import Seed from '../classes/Seed';


export function initInventory() {
    const inventory = new Inventory();

    initSeeds().forEach(seed => {
        inventory.addSeed(seed);
    });

    return inventory;
}

function initSeeds() {
    var seeds: Seed[] = [];
    seeds = [
        ...seeds,
        new Seed({name: 'Navigation Seed', productionTime: 6000})
    ];

    return seeds;
}

export function stringToColor(str: string) {
    // Returns string formatted 'rgb(0-256, 0-256, 0-256)'
    let hash = 0;
    if (str.length === 0) return str;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 255;
  
        // Lesson the red and blue values
        const darkener = (value) / 2;
        const brightenedValue = value - darkener;
        rgb[i] = brightenedValue;
    }
  
    const maxAry = [...rgb]
    const brightest = Math.max(...maxAry); // get the max of the array
    maxAry.splice(maxAry.indexOf(brightest), 1); // remove max from the array
    const second = Math.max(...maxAry); // get the 2nd max
  
    rgb.splice(rgb.indexOf(brightest), 1, brightest + ((255 - brightest) / 4));
    rgb.splice(rgb.indexOf(second), 1,  second + ((255 - second) / 4));
  
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }
  