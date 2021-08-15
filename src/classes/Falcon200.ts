import { BaseFly } from './BaseFly';
export class Falcon200 extends BaseFly  {
  landing() {
    this.mediator.notify(this, 'landing Falcon200')
    return `Attérissage du Falcon200`
  }

  takeOff() {
    this.mediator.notify(this, 'takeOff Falcon200')
    return `Décollage du Falcon200`
  }

}