{
  interface IApple<A, P> {
    air: () => A;
    pro: () => P;
  }

  class AppleDevider<A, P> implements IApple<A, P> {
    constructor(public macAir: A, public macPro: P) {}

    air() {
      return this.macAir;
    }

    pro() {
      return this.macPro;
    }
  }

  const objApple: IApple<{}, string> = new AppleDevider(
    {owner: 'minji', new: 'm1'},
    'ipad pro'
  );
  const macApple: IApple<number, string> = new AppleDevider(1, 'mac air');
  const padPro: IApple<boolean, string> = new AppleDevider(true, 'ipad pro');

  eval('console').log(objApple);
  eval('console').log(macApple);
  eval('console').log(padPro);
}
