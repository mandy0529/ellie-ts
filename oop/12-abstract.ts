{
  type CoffeeType = {
    shot: number;
  };

  interface IMakingCoffee {
    make(shot: number): CoffeeType;
  }

  interface SugarProvider {
    makeSugar(shot: CoffeeType): CoffeeType;
  }

  interface MilkProvider {
    makeMilk(shot: CoffeeType): CoffeeType;
  }

  // class **************************************

  class MakingCoffee implements IMakingCoffee {
    private coffeeBean: number = 300;
    private static perShot: number = 10;

    constructor(
      private shot: number,
      private sugar: SugarProvider,
      private milk: MilkProvider
    ) {}

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw Error(' ❌ coffee bean value shoud be greater than 0');
      }
      this.coffeeBean += beans;
    }

    make(shot: number): CoffeeType {
      this.heat();
      this.grind(shot);
      const coffee = this.extract(shot);
      const addedSugar = this.sugar.makeSugar(coffee);
      return this.milk.makeMilk(addedSugar);
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

  class LowSteamMilkMaker implements MilkProvider {
    private addMilk() {
      eval('console').log('⬇️ low price steamed milk from cow 🐮 . . .');
    }

    makeMilk(shot: CoffeeType): CoffeeType {
      this.addMilk();
      return shot;
    }
  }
  class HighSteamMilkMaker implements MilkProvider {
    private addMilk() {
      eval('console').log('⬆️ high price steamed milk from cow 🐮 . . .');
    }

    makeMilk(shot: CoffeeType): CoffeeType {
      this.addMilk();
      return shot;
    }
  }
  class noMilkMaker implements MilkProvider {
    private addMilk() {
      eval('console').log('❌ No milk . . .');
    }

    makeMilk(shot: CoffeeType): CoffeeType {
      this.addMilk();
      return shot;
    }
  }
  class BlackSugarMaker implements SugarProvider {
    private addSugar() {
      eval('console').log('🖤 black sugar added . . .');
    }
    makeSugar(shot: CoffeeType) {
      this.addSugar();
      return shot;
    }
  }

  class WhiteSugarMaker implements SugarProvider {
    private addSugar() {
      eval('console').log('🤍 white sugar added . . .');
    }
    makeSugar(shot: CoffeeType) {
      this.addSugar();
      return shot;
    }
  }

  class noSugarMaker implements SugarProvider {
    private addSugar() {
      eval('console').log('❌ No sugar . . .');
    }

    makeSugar(shot: CoffeeType): CoffeeType {
      this.addSugar();
      return shot;
    }
  }

  //milk type
  const lowMilk = new LowSteamMilkMaker();
  const highMilk = new HighSteamMilkMaker();
  const noMilk = new noMilkMaker();

  // sugar type
  const blackSugar = new BlackSugarMaker();
  const whiteSugar = new WhiteSugarMaker();
  const noSugar = new noSugarMaker();

  const lowCaffeLatte = new MakingCoffee(2, noSugar, lowMilk).make(2);
  const highBlackSugarLatte = new MakingCoffee(3, blackSugar, highMilk);
  const whiteSugarLatte = new MakingCoffee(4, whiteSugar, noMilk);
}
