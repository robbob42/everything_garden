import seed from './Seed';

export default class Inventory {
    private _seeds: seed[] = [];

    public addSeed(seed: seed) {
        this._seeds = [
            ...this._seeds,
            seed
        ]
    }

    public get seeds() {
        return this._seeds;
    }

    public getSeed(seedName: string): seed[] {
        return this._seeds.filter(seed => seed.name === seedName);
    }
}