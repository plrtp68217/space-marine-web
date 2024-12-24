import { Bullet } from "../../../entities/Bullet";

export function moveBullets(bullets: Bullet[]): void {
    for (let bullet of bullets) {
        bullet.coordinates.y -= 1
    }
}