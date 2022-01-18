{
  class MakingCoffee {
    static perShot: number = 10; // static을 선언하게 되면 class 레벨이 된다.
    coffeeBean: number; // static을 안한건 멤버변수로 instance level | object level
    shot: number;

    constructor(coffeeBean: number, shot: number) {
      this.coffeeBean = coffeeBean;
      this.shot = shot;
    }

    static makeCoffee(coffeeBean: number, shot: number): MakingCoffee {
      return new MakingCoffee(coffeeBean, shot);
    }

    make() {
      if (this.coffeeBean < this.shot * MakingCoffee.perShot) {
        throw Error('❌ not enough coffee bean for making your coffee');
      }
      this.coffeeBean -= this.shot * MakingCoffee.perShot;
      return {
        shot: this.shot,
        coffeeBeans: this.coffeeBean,
      };
    }
  }
  const minji = MakingCoffee.makeCoffee(100, 2);
  eval('console').log(minji);
}
