{
  interface Istack {
    readonly size: number;
    pop: () => string;
    push: (value: string) => void;
  }

  type stackNode = {
    readonly value: string;
    readonly next?: stackNode;
  };

  class StackImpl implements Istack {
    private _size: number = 0;
    private head?: stackNode;
    get size() {
      return this._size;
    }

    push(value: string) {
      const node: stackNode = {value, next: this.head};
      this.head = node;
      this._size++;
    }
    pop() {
      if (this.head == null) {
        // null == undefined ##
        throw new Error('Empty stack!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl();
  eval('console').log(stack, 'stack');

  stack.push('one');
  stack.push('two');
  stack.push('three');
  stack.push('four');

  eval('console').log(stack);
  stack.pop();
  eval('console').log(stack);
}
