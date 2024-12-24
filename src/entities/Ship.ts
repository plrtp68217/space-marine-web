import { Coordinates } from './Coordinates.js';

export class Ship {
  coordinates: Coordinates;
  width: number;
  height: number;
  isDragging: boolean;

  constructor(coordinates: Coordinates, width: number, height: number, isDragging: boolean = false,) {
    this.coordinates = coordinates;
    this.width = width;
    this.height = height;
    this.isDragging = isDragging;
  }
}