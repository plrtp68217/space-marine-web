import { Coordinates } from './Coordinates.js';

export class Bullet {
  coordinates: Coordinates;

  constructor(coordinates: Coordinates) {
    this.coordinates = coordinates;
  }
}