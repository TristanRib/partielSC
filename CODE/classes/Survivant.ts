import {OrientationEnum} from "../enums/OrientationEnum";
import {Position} from "./Position";

export class Survivant {
    private _position: Position;
    private _orientation: OrientationEnum;
    private _sante: number;

    constructor(position: Position, orientation: OrientationEnum, sante: number) {
        this._position = position;
        this._orientation = orientation;
        this._sante = sante;
    }

    get position(): Position {
        return this._position;
    }

    set position(value: Position) {
        this._position = value;
    }

    get orientation(): OrientationEnum {
        return this._orientation;
    }

    set orientation(value: OrientationEnum) {
        this._orientation = value;
    }

    get sante(): number {
        return this._sante;
    }

    set sante(value: number) {
        this._sante = value;
    }

    public explorer(move: number): void {
        switch (this._orientation) {
            case OrientationEnum.Nord:
                this.position.y = this.position.y - move;
                break;
            case OrientationEnum.Est:
                this.position.x = this.position.x + move;
                break;
            case OrientationEnum.Sud:
                this.position.y = this.position.y + move;
                break;
            case OrientationEnum.Ouest:
                this.position.x = this.position.x - move;
                break;
            default:
                throw ("Orientation non connue.")
        }
    }

    public rencontrerZombie(nombre: number): void {
        for (let i = 0; i < nombre; i++) {
            this.prendDesCoups();
        }
    }

    private prendDesCoups(): void {
        this._sante -= 5;
    }
}