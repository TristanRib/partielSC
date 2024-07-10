export class Carte {
    private readonly _taille: number;

    constructor(taille: number) {
        this._taille = taille;
    }

    get taille(): number {
        return this._taille;
    }
}