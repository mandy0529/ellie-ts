{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name: string) {
      this.firstName = name;
    }
    constructor(public firstName: string, private lastName: string) {}
  }
  const minji = new User('minji', 'kim');
  eval('console').log(minji.fullName);
  minji.firstName = 'gan';
  eval('console').log(minji.fullName);
}
