import { Enemy } from "../entities/Enemy.js";

export function drawEnemys(enemys: Enemy[], context: CanvasRenderingContext2D): void {
    for (let enemy of enemys) {
        context.fillRect(enemy.coordinates.x, enemy.coordinates.y, 10, 10)
    }
}