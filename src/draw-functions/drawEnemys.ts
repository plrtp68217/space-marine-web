import { Ship } from "../entities/Ship.js";

const enemyImg = new Image();
enemyImg.src = '/src/enemys/images/enemyShip.png'


function drawEnemy(enemy: Ship, context: CanvasRenderingContext2D): void {
    context.drawImage(enemyImg, enemy.coordinates.x, enemy.coordinates.y, enemy.width, enemy.height);

}

export function drawEnemys(enemys: Ship[], context: CanvasRenderingContext2D) {
    for (let enemy of enemys) {
        drawEnemy(enemy, context);
    }
}