import { BaseFly } from './BaseFly';
export class Boieng747 extends BaseFly  {
  landing() {
    this.mediator.notify(this, 'landing Boeing747')
    return `Attérissage du Boeing 747`
  }

  takeOff() {
    this.mediator.notify(this, 'takeOff Boeing747')
    return `Décollage du Boeing 747`
  }

}