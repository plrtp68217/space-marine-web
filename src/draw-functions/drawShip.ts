import { Ship } from "../entities/Ship.js";

export function drawShip(ship: Ship, context: CanvasRenderingContext2D): void {
    context.fillStyle = 'white';
    context.fillRect(ship.coordinates.x, ship.coordinates.y, 10, 10);
}