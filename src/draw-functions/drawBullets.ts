import { Bullet } from "../entities/Bullet.js";

export function drawBullets(bullets: Bullet[], context: CanvasRenderingContext2D): void {
    for (let bullet of bullets) {
        context.fillStyle = 'white';
        context.fillRect(bullet.coordinates.x, bullet.coordinates.y, bullet.size, bullet.size);
    }
}