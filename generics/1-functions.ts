{
  // 1. 나쁜예제1 : type 이 number면 number, string이 string 따로따로 다 타입을 미치게 만들어줘야한다.
  function checkNotNullBad(arg: number | null): number {
    if (arg === null) {
      throw new Error('this is null');
    }
    return arg;
  }

  const result = checkNotNullBad(123);
  eval('console').log(result);

  // 2. 나쁜예제 2 :type을 any로해서 ts가 type을 더이상 모르게끔 나쁜 코드를 작성한다.
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg === null) {
      throw new Error('this is null');
    }
    return arg;
  }

  const result2 = checkNotNullAnyBad(123);
  eval('console').log(result);

  // 3. 좋은 예제 generic을 이용해서 그 타입 자체를 흡수해서 string이 들어가면 그걸 반환하고, number가 들어가면 number, 토끼가 들어가면 토끼의 타입을 읽는다.
  function checkObj<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error('this is null');
    }
    return arg;
  }

  const result3: boolean = checkObj(true);
  eval('console').log(result3);
}
