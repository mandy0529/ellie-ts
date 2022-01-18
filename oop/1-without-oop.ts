{
  type madeCoffee = {
    shot: number;
    hasMilk: boolean;
  };
  const COFFEE_BEAN_PER_SHOT: number = 10;
  let coffeeBeans: number = 50;

  const makeCoffee = (shot: number): madeCoffee => {
    if (coffeeBeans < shot * COFFEE_BEAN_PER_SHOT) {
      throw Error('❌ not enough coffee bean for making your coffee');
    }

    coffeeBeans -= shot * COFFEE_BEAN_PER_SHOT;
    return {
      shot,
      hasMilk: false,
    };
  };

  makeCoffee(2);
  eval('console').log(makeCoffee(2));
}
