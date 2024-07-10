import {Position} from "./Position";
import {OrientationEnum} from "../enums/OrientationEnum";

export class Zombie {
    private _position: Position;
    private _orientation: OrientationEnum;

    constructor(position: Position, orientation: OrientationEnum) {
        this._position = position;
        this._orientation = orientation;
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
}