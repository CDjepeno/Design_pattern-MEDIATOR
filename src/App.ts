import { Boieng747 } from './classes/Boeing747';
import { Bombardier } from './classes/Bombardier';
import { ConcreteMediator } from './classes/ConcretMediator';
import { Falcon200 } from './classes/Falcon200';
export class App {
  static main1() {
    const boeing = new Boieng747()
    const bombardier = new Bombardier()
    const falcon = new Falcon200()

    const mediator = new ConcreteMediator(boeing, bombardier, falcon)

    return bombardier.takeOff()
  }

  static main2() {
    const boeing = new Boieng747()
    const bombardier = new Bombardier()
    const falcon = new Falcon200()

    const mediator = new ConcreteMediator(boeing, bombardier, falcon)

    return bombardier.landing() 
  }

  static main3() {
    const boeing = new Boieng747()
    const bombardier = new Bombardier()
    const falcon = new Falcon200()

    const mediator = new ConcreteMediator(boeing, bombardier, falcon)

    return boeing.takeOff() 
  }
  static main4() {
    const boeing = new Boieng747()
    const bombardier = new Bombardier()
    const falcon = new Falcon200()

    const mediator = new ConcreteMediator(boeing, bombardier, falcon)

    return boeing.landing() 
  }

}