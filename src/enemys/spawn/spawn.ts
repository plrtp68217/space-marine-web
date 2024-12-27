import { Ship } from "../../entities/Ship.js";
import { Coordinates } from "../../entities/Coordinates.js";
import { getRandomIntRange } from "../../random/getRandomIntRange.js";
import { getRandomFloatRange } from "../../random/getRandomFloatRange.js";

function addEnemy(enemys: Ship[], canvas: HTMLCanvasElement): void {
    const enemySize = getRandomIntRange(30, 50);
    const enemyX = getRandomIntRange(10, canvas.width - enemySize);
    const enemyY = 0;
    const enemySpeed = getRandomFloatRange(0.2, 0.4);
    const enemy_coordinates = new Coordinates(enemyX, enemyY)
    const enemy = new Ship(enemy_coordinates, enemySize, enemySize, 2, 3, enemySpeed);
    enemys.push(enemy)
}


let spawnEnemyInterval: number | NodeJS.Timeout | undefined ;


export function startSpawnEnemyInterval(enemys: Ship[], canvas: HTMLCanvasElement): void {
    if (!spawnEnemyInterval) spawnEnemyInterval = setInterval(() => addEnemy(enemys, canvas), 800);
}

export function stopSpawnEnemysInterval(): void {
    clearInterval(spawnEnemyInterval);
    spawnEnemyInterval = undefined;
}