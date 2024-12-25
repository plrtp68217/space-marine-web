import { Bullet } from "../entities/Bullet";

/**
 * Функция для определения пули в области игрового поля.
 * @param bullet - Пуля.
 * @param canvas - Игровое поле.
 * @returns boolean : true - пуля в пределах поля, false - за пределами поля.
 */

function isOnScreen(bullet: Bullet, canvas: HTMLCanvasElement): boolean {
  return bullet.coordinates.y < canvas.height && bullet.coordinates.y >= 0;
}

export function removeOffscreenBullets(bullets: Bullet[], canvas: HTMLCanvasElement): void {
  for (let i = bullets.length - 1; i >= 0; i--) {
    if (!isOnScreen(bullets[i], canvas)) {
      bullets.splice(i, 1);
    }
  }
}