{
  type CoffeeType = {
    shot: number;
  };

  interface IMakingCoffee {
    make(shot: number): CoffeeType;
  }

  class MakingCoffee implements IMakingCoffee {
    private coffeeBean: number = 300;
    private static perShot: number = 10;

    constructor(private shot: number) {}

    static makeCoffee(shot: number): MakingCoffee {
      return new MakingCoffee(shot);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw Error(' ❌ coffee bean value shoud be greater than 0');
      }
      this.coffeeBean += beans;
    }

    make(shot: number): CoffeeType {
      this.heat();
      this.grind(shot);
      return this.extract(shot);
    }

    clean(): void {
      eval('console').log(
        '🤶🏻pro maker section🤶🏻 :cleaning the coffee machine. . .  '
      );
    }
    private heat() {
      eval('console').log(`heating coffee machine`);
    }

    private grind(shot: number) {
      if (this.coffeeBean < this.shot * MakingCoffee.perShot) {
        throw Error('❌ not enough coffee bean for making your coffee');
      }
      this.coffeeBean -= this.shot * MakingCoffee.perShot;
      eval('console').log(`grinding for ${shot} coffee. . . `);
    }

    private extract(shot: number) {
      eval('console').log(`extracting for ${shot} coffee. . . `);
      return {shot};
    }
  }

  class LatteMachine extends MakingCoffee {
    constructor(shot: number, public machineNumber: number) {
      super(shot);
    }
    private steamMilk(): void {
      eval('console').log('steaming some milk . . .');
    }
    make(shot: number): CoffeeType {
      const latte = super.make(shot);
      this.steamMilk();
      return {...latte, shot: 7};
    }
  }

  class SweetSugarCoffee extends MakingCoffee {
    private sugar(): void {
      eval('console').log('added sugar . . .');
    }

    make(shot: number): CoffeeType {
      const sugar = super.make(shot);
      this.sugar();
      return {...sugar, shot: 5};
    }
  }

  const allCoffeeRecipe: IMakingCoffee[] = [
    new MakingCoffee(5),
    new LatteMachine(5, 101),
    new SweetSugarCoffee(5),
  ];
  allCoffeeRecipe.forEach((item) => {
    eval('console').log('---------------------------');
    item.make(1);
  });
}
