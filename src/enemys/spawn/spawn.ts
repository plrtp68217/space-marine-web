import { Ship } from "../../entities/Ship.js";
import { Coordinates } from "../../entities/Coordinates.js";
import { getRandomIntRange } from "../../random/getRandomIntRange.js";
import { getRandomFloatRange } from "../../random/getRandomFloatRange.js";

function addEnemy(enemys: Ship[], canvas: HTMLCanvasElement): void {
    const enemyWidth = getRandomIntRange(10, 40);
    const enemyHeight= getRandomIntRange(10, 40);
    const enemyX = getRandomIntRange(10, canvas.width - enemyWidth);
    const enemyY = 0;
    const enemySpeed = getRandomFloatRange(0.2, 0.4);
    const enemy_coordinates = new Coordinates(enemyX, enemyY)
    const enemy = new Ship(enemy_coordinates, enemyWidth, enemyHeight, 5, 3, enemySpeed);
    enemys.push(enemy)
}


let spawnEnemyInterval: number | NodeJS.Timeout | undefined ;


export function startSpawnEnemyInterval(enemys: Ship[], canvas: HTMLCanvasElement): void {
    if (!spawnEnemyInterval) spawnEnemyInterval = setInterval(() => addEnemy(enemys, canvas), 300);
}

export function stopSpawnEnemysInterval(): void {
    clearInterval(spawnEnemyInterval);
    spawnEnemyInterval = undefined;
}

// -----
// import { Coordinates } from "../../entities/Coordinates";
// import { Ship } from "../../entities/Ship";

// /**
//  * Проверка на попадание пули в корабль
//  **/
// function hitChecking(ships: Ship[]): void {

// }

// /**
//  * Функция для определения элемента в области игрового поля.
//  * @param coordinates - Кординаты места, в котором зарегистрировано попадание.
//  * @param squareSize - Размер одного квадрата, из которого будет собран
//  * большой квадрат, состоящий из 9 подквадратов.
//  */
// function hitRegistration(coordinates: Coordinates, squareSize: number, deltaTime: number): void {
    
// }