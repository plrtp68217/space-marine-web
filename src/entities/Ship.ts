import { LinearMovement } from '../actions/LinearMovement.js';
import { Coordinates } from './Coordinates.js';

export class Ship extends LinearMovement{
  coordinates: Coordinates;

  constructor(coordinates: Coordinates) {
    super(coordinates)
    this.coordinates = coordinates;
  }
}