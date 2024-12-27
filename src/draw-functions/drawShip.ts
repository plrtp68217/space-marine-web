import { Ship } from "../entities/Ship.js";

export function drawShip(ship: Ship, context: CanvasRenderingContext2D): void {
    const shipImg = new Image();
    shipImg.src = '/src/ship/images/friendShip.png'
    // context.fillRect(ship.coordinates.x - ship.width / 2, ship.coordinates.y, ship.width, ship.height);
    context.drawImage(shipImg, ship.coordinates.x - ship.width / 2, ship.coordinates.y - ship.height / 2, ship.width, ship.height);
    
}