import { Ship } from "../entities/Ship.js";

export function drawShip(ship: Ship, context: CanvasRenderingContext2D): void {
    context.fillStyle = 'white';
    context.fillRect(ship.coordinates.x - ship.width / 2, ship.coordinates.y, ship.width, ship.height);
}