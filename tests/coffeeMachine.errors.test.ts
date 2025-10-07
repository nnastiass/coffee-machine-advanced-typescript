import  {CoffeeMachine} from '../src/coffeeMachine'
import  {Drink} from '../src/drink'

describe('CoffeeMachine errors', () => {
    it('throws error at too much sugar', () => {
        const machine = new CoffeeMachine();
    
        const drink = new Drink("Coffee", 2, false,7, "small");
        const wrapper=() => machine.serve(drink, 2.10, false, 10)
        expect(wrapper).toThrow( 'Too much sugar');
      });

      it('throws error at too much sugar 2.0', () => {
        const machine = new CoffeeMachine();
    
        const drink = new Drink("Coffee", 2, false,7, "small");
        try {
            machine.serve(drink, 2.10, false, 10)
        } catch (error){
            expect(error).toEqual(new Error('Too much sugar'))
        }
      });

      it('throws error not enough money', () => {
        const machine = new CoffeeMachine();
    
        const drink = new Drink("Coffee", 2, false,0, "small");
        const wrapper=() => machine.serve(drink, 1.50, false, 10)
        expect(wrapper).toThrow( 'Not enough money');
      });
});
