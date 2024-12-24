import { Ship } from "../../entities/Ship.js";


export function touchDragShip(ship: Ship) {
    ship.isDragging = true;
}

export function touchMoveShip(event: TouchEvent, ship: Ship) {
    if (ship.isDragging) {
        event.preventDefault();
        const touch = event.touches[0];
        ship.coordinates.x = touch.clientX;
        ship.coordinates.y = touch.clientY;
    }
}

export function touchDropShip(ship: Ship) {
    ship.isDragging = false;
}
