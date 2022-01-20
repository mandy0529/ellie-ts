{
  class minji {
    protected constructor(
      public name: string,
      public age: number,
      public job: boolean
    ) {}
  }

  class minjiBaby extends minji {
    constructor(name: string, age: number, job: boolean, newMinji: string) {
      super(name, age, job);
    }
  }
}
