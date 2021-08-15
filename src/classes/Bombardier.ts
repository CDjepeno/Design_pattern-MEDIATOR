import { BaseFly } from './BaseFly';
export class Bombardier extends BaseFly  {
  landing() {
    this.mediator.notify(this, 'landing Bombardier')
    return `Attérissage du Bombardier`
  }

  takeOff() {
    this.mediator.notify(this, 'takeOff Boeing747')
    return `Décollage du Bombardier`
  }

}