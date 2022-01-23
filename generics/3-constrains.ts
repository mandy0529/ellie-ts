interface IEmployee {
  pay(): void;
}

class FullTimeEmployee implements IEmployee {
  pay() {
    eval('console').log('full time');
  }
  workFullTime() {}
}

class PartTimeEmployee implements IEmployee {
  pay() {
    eval('console').log('part time');
  }

  workPartTime() {}
}

// generic으로 하지않았을 때에는 pay를 해준다음 workparttime함수가 나오질않는다. 그래서 generic으로 고치게 되면
function payBad(employee: IEmployee): IEmployee {
  employee.pay();
  return employee;
}

// 이런식으로 고칠 수 있고, 다른함수도 잘 사용할 수 있게 된다.
function pay<T extends IEmployee>(employee: T): T {
  employee.pay();
  return employee;
}

const minji = new FullTimeEmployee();
const gan = new PartTimeEmployee();

const minjiAfterPay = pay(minji);
const ganAfterPay = pay(gan);

minjiAfterPay.workFullTime();
ganAfterPay.workPartTime();

eval('console').log(minji);
