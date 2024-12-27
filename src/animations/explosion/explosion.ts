import { Explosion } from "../../entities/Explosion.js";
import { Coordinates } from "../../entities/Coordinates.js";

export function startExplosion(explosions: Explosion[], coordinates: Coordinates, duration: number): void {
    const startTime = performance.now();
    const explosion = new Explosion(coordinates, startTime, duration);
    explosions.push(explosion);
}

export function updateExplosions(explosions: Explosion[]): void {
    const currentTime = performance.now();

    // Удаляем завершенные анимации
    explosions = explosions.filter(explosion => {
        const elapsedTime = currentTime - explosion.startTime;
        return elapsedTime < explosion.duration;
    }); // переделать (без смены ссылки на массив/ мб не надо)
}

export function drawExplosions(context: CanvasRenderingContext2D, explosions: Explosion[]): void {
    const currentTime = performance.now();

    explosions.forEach(explosion => {
        const elapsedTime = currentTime - explosion.startTime;
        const progress = elapsedTime / explosion.duration;

        // Пример: рисуем круги с изменяющимся радиусом и прозрачностью
        const radius = 50 * progress; // Радиус увеличивается со временем
        const opacity = 1 - progress; // Прозрачность уменьшается со временем

        context.beginPath();
        context.arc(explosion.coordinates.x, explosion.coordinates.y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 0, 0, ${opacity})`;
        context.fill();
    });
}
