import { Coordinates } from "../entities/Coordinates";

interface IOnScreenElement {
  coordinates: Coordinates
}

/**
 * Функция для определения элемента в области игрового поля.
 * @param onScreenElement - Отслеживаемый элемент.
 * @param canvas - Игровое поле.
 * @returns boolean : true - элемент в пределах поля, false - за пределами поля.
 */

function isOnScreen(onScreenElement: IOnScreenElement, canvas: HTMLCanvasElement): boolean {
  return onScreenElement.coordinates.y < canvas.height && onScreenElement.coordinates.y >= 0;
}

export function removeOffscreenElements(onScreenElements: IOnScreenElement[], canvas: HTMLCanvasElement): void {
  for (let i = onScreenElements.length - 1; i >= 0; i--) {
    if (!isOnScreen(onScreenElements[i], canvas)) {
        onScreenElements.splice(i, 1);
    }
  }
}