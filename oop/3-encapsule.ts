{
  // private => 외부에서 접근못하게 class내에서만 아는 변수 ex) coffee한잔 만드는데 필요한 pershot은 외부에서 설정할필요가 없다.
  // protected => 아무나 외부에서 접근은 못하지만 부모 상속을받은 자식 클래스만 접근 가능
  // public => 아무것도 안붙일때 다 public이다.
  // 그리고 fillCoffeeBeans 이라는 함수를 만들어 coffeebean을 채울때 함수를 따로 만들어서 만약 누군가 -값이나 0을 추가했다면 바보같다는 에러를 날려주고, 그 외에것들은 추가할수있도록 만들어준다.
  class MakingCoffee {
    private static perShot: number = 10;
    private coffeeBean: number;
    shot: number;

    constructor(coffeeBean: number, shot: number) {
      this.coffeeBean = coffeeBean;
      this.shot = shot;
    }

    static makeCoffee(coffeeBean: number, shot: number): MakingCoffee {
      return new MakingCoffee(coffeeBean, shot);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw Error(' coffee bean value shoud be greater than 0');
      }
      this.coffeeBean += beans;
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

  const minji = new MakingCoffee(100, 2);
  eval('console').log(minji);
  minji.fillCoffeeBeans(200);
  eval('console').log(minji);
}
