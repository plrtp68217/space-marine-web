import { Bullet } from "../../../entities/Bullet";

export function moveBullets(bullets: Bullet[], deltaTime: number): void {
    for (let bullet of bullets) {
        bullet.coordinates.y -= deltaTime;
    }
}