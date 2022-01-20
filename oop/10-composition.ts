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
      eval('console').log(`extracting for ${shot} coffee ☕️. . . `);
      return {shot};
    }
  }

  class SteamMilkMaker extends MakingCoffee {
    private addMilk() {
      eval('console').log('steamed milk from cow 🐮 . . .');
    }

    makeMilk(shot: CoffeeType) {
      this.addMilk();
      return {
        ...shot,
      };
    }
  }

  class SugarMaker extends MakingCoffee {
    private addSugar() {
      eval('console').log('added sugar from candy 🍭 . . .');
    }
    makeSugar(shot: CoffeeType) {
      this.addSugar();
      return {...shot};
    }
  }

  class LatteMachine extends MakingCoffee {
    constructor(shot: number, private milk: SteamMilkMaker) {
      super(shot);
    }
    make(shot: number): CoffeeType {
      const coffee = super.make(shot);
      return this.milk.makeMilk(coffee);
    }
  }

  class SweetSugarCoffee extends MakingCoffee {
    constructor(shot: number, private sugar: SugarMaker) {
      super(shot);
    }

    make(shot: number): CoffeeType {
      const coffee = super.make(shot);
      return this.sugar.makeSugar(coffee);
    }
  }

  class SugarLatteCoffee extends MakingCoffee {
    constructor(
      shot: number,
      private sugar: SugarMaker,
      private milk: SteamMilkMaker
    ) {
      super(shot);
    }
    make(shot: number): CoffeeType {
      const coffee = super.make(shot);
      const addedSugar = this.sugar.makeSugar(coffee);
      return this.milk.makeMilk(addedSugar);
    }
  }

  const steamedMilk = new SteamMilkMaker(1);
  const magicSugar = new SugarMaker(1);
  const caffeeLatteWithSugar = new SugarLatteCoffee(
    1,
    magicSugar,
    steamedMilk
  ).make(1);
  eval('console').log(caffeeLatteWithSugar);
}
