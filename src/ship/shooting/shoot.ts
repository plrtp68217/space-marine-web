import { Ship } from "../../entities/Ship.js";
import { Bullet } from "../../entities/Bullet.js";
import { Coordinates } from "../../entities/Coordinates.js";

function addShipBullet(bullets: Bullet[], ship: Ship): void {
    const bulletX = ship.coordinates.x ;
    const bulletY = ship.coordinates.y ;
    const bullet_coordinates = new Coordinates(bulletX, bulletY);
    const bullet = new Bullet(bullet_coordinates, 5);
    bullets.push(bullet);
}

let shipShootingInterval: number | NodeJS.Timeout | undefined ;

export function startShipShootingInterval(bullets: Bullet[], ship: Ship): void {
    if (!shipShootingInterval) shipShootingInterval = setInterval(() => addShipBullet(bullets, ship), 300);
}

export function stopShipShootingInterval(): void {
    clearInterval(shipShootingInterval);
    shipShootingInterval = undefined;
}