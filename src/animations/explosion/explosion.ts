import { Explosion } from "../entities/Explosion";
import { Coordinates } from "../entities/Coordinates";

function startExplosion(explosions: Explosion[], coordinates: Coordinates, duration: number) {
    const startTime = performance.now();
    const explosion = new Explosion(coordinates, startTime, duration);
    explosions.push(explosion);
}

function updateExplosions(explosions: Explosion[]) {
    const currentTime = performance.now();

    // Удаляем завершенные анимации
    explosions = explosions.filter(explosion => {
        const elapsedTime = currentTime - explosion.startTime;
        return elapsedTime < explosion.duration;
    });
}

function drawExplosions(ctx: CanvasRenderingContext2D, explosions: Explosion[]) {
    const currentTime = performance.now();

    explosions.forEach(explosion => {
        const elapsedTime = currentTime - explosion.startTime;
        const progress = elapsedTime / explosion.duration;

        // Пример: рисуем круги с изменяющимся радиусом и прозрачностью
        const radius = 50 * progress; // Радиус увеличивается со временем
        const opacity = 1 - progress; // Прозрачность уменьшается со временем

        ctx.beginPath();
        ctx.arc(explosion.coordinates.x, explosion.coordinates.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 0, ${opacity})`;
        ctx.fill();
    });
}