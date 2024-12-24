import { LinearMovement } from '../actions/LinearMovement.js';
import { Coordinates } from './Coordinates.js';

export class Ship extends LinearMovement{
  coordinates: Coordinates;
  isDragging: boolean;

  constructor(coordinates: Coordinates, isDragging: boolean = false) {
    super(coordinates)
    this.coordinates = coordinates;
    this.isDragging = isDragging;
  }
}