import { Coordinates } from './Coordinates.js';

export class Ship {
  coordinates: Coordinates;

  constructor(coordinates: Coordinates) {
    this.coordinates = coordinates;
  }
}