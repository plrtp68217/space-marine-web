import { Ship } from "../../entities/Ship";

export function moveEnemys(enemys: Ship[], deltaTime: number) {
    for (let enemy of enemys) {
        enemy.coordinates.y += enemy.speed * deltaTime;
    }
}