import { Ship } from "../../entities/Ship.js";


export function mouseDragShip(ship: Ship) {
    ship.isDragging = true;
}

export function mouseMoveShip(event: MouseEvent, ship: Ship) {
    if (ship.isDragging) {
        ship.coordinates.x = event.clientX;
        ship.coordinates.y = event.clientY;
    }
}

export function mouseDropShip(ship: Ship) {
    ship.isDragging = false;
}