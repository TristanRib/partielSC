import {Survivant} from "../CODE/classes/Survivant";
import {Position} from "../CODE/classes/Position";
import {OrientationEnum} from "../CODE/enums/OrientationEnum";

describe('Survivant', () => {
    // GIVEN
    let survivant: Survivant;

    beforeEach(() => {
        survivant = new Survivant(new Position(0,0), OrientationEnum.Nord, 100);
    });

    it('should lose hp', () => {
        // WHEN
        survivant.rencontrerZombie(5)

        // THEN
        expect(survivant.sante).toBe(75);
    });

    it('should move', () => {
        // WHEN
        survivant.orientation = OrientationEnum.Nord;
        survivant.explorer(1);

        // THEN
        expect(survivant.position.x).toBe(-1);
    });
});