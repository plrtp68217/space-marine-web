import { Bullet } from "../entities/Bullet.js";
import { Ship } from "../entities/Ship.js";
import { Coordinates } from "../entities/Coordinates.js";

function isHitted(bullet: Bullet, ship: Ship): boolean {
    if (bullet.coordinates.y > ship.coordinates.y && 
        bullet.coordinates.y < ship.coordinates.y + ship.height) {
            if (bullet.coordinates.x > ship.coordinates.x && 
                bullet.coordinates.x < ship.coordinates.x + ship.width) {
                    return true;
                }
        }
    return false;
}

interface IHit {
    coordinates: Coordinates;
    bulletIndex: number
}

export function hitRegistration(bullets: Bullet[], ships: Ship[]): IHit | void {
    for (let bullet = bullets.length - 1; bullet >= 0; bullet--) {
        for (let ship = ships.length - 1; ship >= 0; ship--) {
            if (isHitted(bullets[bullet], ships[ship])) {
                // bullets.splice(bullet, 1);
                return {
                    coordinates: bullets[bullet].coordinates,
                    bulletIndex:  bullet
                }
            }
        }
    }
}