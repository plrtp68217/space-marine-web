import { Coordinates } from './Coordinates.js';

export class Enemy {
  coordinates: Coordinates;

  constructor(coordinates: Coordinates) {
    this.coordinates = coordinates;
  }
}