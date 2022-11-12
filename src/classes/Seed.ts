import { stringToColor } from '../utils/utils';

export type seedOpts = {
    name: string;
    productionTime: number;
}

export default class Seed {
    private _name: string;
    private _color: string;
    private _productionTime: number;

    constructor(opts: seedOpts) {
        this._name = opts.name;
        this._color = stringToColor(opts.name);
        this._productionTime = opts.productionTime;
    }

    public get name() {
        return this._name;
    }

    public set name(newName: string) {
        this._name = newName;
    }

    public get color() {
        return this._color;
    }

    public get productionTime() {
        return this._productionTime;
    }
}