import { IControlTowerMediator } from '../interfaces/IControlTowerMediator';
export class BaseFly {
  mediator: IControlTowerMediator

  constructor(m: IControlTowerMediator = null) {
    this.mediator = m
  }

  setMediator(m: IControlTowerMediator) {
    this.mediator = m
  }
}