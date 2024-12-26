import { Ship } from "../entities/Ship.js";

function drawEnemy(enemy: Ship, context: CanvasRenderingContext2D): void {
    context.fillStyle = 'white';
    context.fillRect(enemy.coordinates.x, enemy.coordinates.y, enemy.width, enemy.height);
}

export function drawEnemys(enemys: Ship[], context: CanvasRenderingContext2D) {
    for (let enemy of enemys) {
        drawEnemy(enemy, context);
    }
}