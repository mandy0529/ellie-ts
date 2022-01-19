{
  // make coffee라는 method를 커피머신을 데우고, 콩을 갈고, 콩을 추출하는 과정으로 나누어서 추상화한다면 우리가 애새끼를 깔때 커피를 만드는 과정이 4-5?개나 나오므로 복잡할 수 있다.
  // 그래서 콩을 갈고, 커피머신을 데우고, 콩을 추출하는 과정은 private으로 쓰므로서 더 구체적인 추상화를 해줄 수 있다.

  type CoffeeType = {
    shot: number;
  };

  interface IMakingCoffee {
    make(shot: number): CoffeeType;
  }

  interface IProBaristarCoffee {
    make(shot: number): CoffeeType;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class MakingCoffee implements IMakingCoffee, IProBaristarCoffee {
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

  class BeginnerMaker {
    constructor(private machine: IMakingCoffee) {}
    make() {
      const coffee = this.machine.make(2);
      eval('console').log(
        coffee,
        'beginner coffee 🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹'
      );
    }
  }

  class ProMaker {
    constructor(private machine: IProBaristarCoffee) {}
    make() {
      const coffee = this.machine.make(3);
      eval('console').log(
        coffee,
        'pro coffee 🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻🤶🏻'
      );
      this.machine.fillCoffeeBeans(300);
      this.machine.clean();
    }
  }

  const coffeeMachine: MakingCoffee = MakingCoffee.makeCoffee(1);
  const begginer = new BeginnerMaker(coffeeMachine);
  const pro = new ProMaker(coffeeMachine);
  //   begginer.make();
  pro.make();
}
