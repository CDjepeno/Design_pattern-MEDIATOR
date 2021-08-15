import { IControlTowerMediator } from '../interfaces/IControlTowerMediator';
import { Boieng747 } from './Boeing747';
import { Bombardier } from './Bombardier';
import { Falcon200 } from './Falcon200';
export class ConcreteMediator implements IControlTowerMediator {
  boeing747: Boieng747 
  bombardier: Bombardier
  falcon200: Falcon200
  
  constructor(b1: Boieng747, b2: Bombardier, b3: Falcon200) {
    this.boeing747 = b1
    this.boeing747.setMediator(this)
    this.bombardier = b2 
    this.bombardier.setMediator(this)
    this.falcon200 = b3
    this.falcon200.setMediator(this)
  }

  notify(sender: Object, event: string) {
    switch (event) {
      case "takeOff boeing7477":
        return this.boeing747.takeOff()  
        break;
      case "landing boeing7477":
        return this.boeing747.landing()  
        break;
      case "takeOff Bombardier":
        return this.boeing747.takeOff()  
        break;
      case "landing Bombardier":
        return this.boeing747.landing()  
        break;
      case "takeOff Falcon200":
        return this.boeing747.takeOff()  
        break;
      case "landing Falcon200":
        return this.boeing747.landing()  
        break;
    
      default:
        break;
    }
  
  }
}