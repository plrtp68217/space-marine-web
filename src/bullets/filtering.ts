import { Bullet } from "../entities/Bullet";



function isOnScreen(bullet: Bullet, canvas?: HTMLCanvasElement) {
  return 
}

export function removeOffscreenBullets(bullets: Bullet[]): Bullet[] {
    return bullets = bullets.filter(bullet => bullet.isOnScreen());
  }