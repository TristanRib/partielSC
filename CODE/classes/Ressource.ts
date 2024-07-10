export class Ressource {
    private readonly _nom: String;
    private _quantite: number;

    constructor(nom: String, quantite: number) {
        this._nom = nom;
        this._quantite = quantite;
    }

    get nom(): String {
        return this._nom;
    }

    get quantite(): number {
        return this._quantite;
    }

    set quantite(value: number) {
        this._quantite = value;
    }
}