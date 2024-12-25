import { Ship } from "../../entities/Ship.js";
import { Bullet } from "../../entities/Bullet.js";
import { Coordinates } from "../../entities/Coordinates.js";

let shipShootingInterval: number | NodeJS.Timeout;

function addShipBullet(bullets: Bullet[], ship: Ship): void {
    const bulletX = ship.coordinates.x ;
    const bulletY = ship.coordinates.y ;
    const bullet_coordinates = new Coordinates(bulletX, bulletY);
    const bullet = new Bullet(bullet_coordinates);
    bullets.push(bullet);
}

export function startShipShootingInterval(bullets: Bullet[], ship: Ship): void {
    if (shipShootingInterval) {
        clearInterval(shipShootingInterval);
      }
    shipShootingInterval = setInterval(() => addShipBullet(bullets, ship), 300);
}

export function stopShipShootingInterval(): void {
    clearInterval(shipShootingInterval);
}