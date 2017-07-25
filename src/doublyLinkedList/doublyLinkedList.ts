/**
 * Linked list node
 */
export interface DoublyLinkedListNode<T> {
  value: T
  next?: DoublyLinkedListNode<T>
  prev?: DoublyLinkedListNode<T>
}

/**
 * Linked list for items of type T
 */
export class DoublyLinkedList<T> {
  public head?: DoublyLinkedListNode<T> = undefined;
  public tail?: DoublyLinkedListNode<T> = undefined;

  /**
   * Adds an item in O(1)
   **/
  add(value: T) {
    const node: DoublyLinkedListNode<T> = {
      value,
      next: undefined,
      prev: undefined,
    }
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
  }

  /**
   * FIFO removal in O(1)
   */
  dequeue(): T | undefined {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      this.head.prev = undefined;
      if (!this.head) {
        this.tail = undefined;
      }
      return value;
    }
  }

  /**
   * LIFO removal in O(1)
   */
  pop(): T | undefined {
    if (this.tail) {
      const value = this.tail.value;
      this.tail = this.tail.prev;
      this.tail.next = undefined;
      if (!this.tail) {
        this.head = undefined;
      }
      return value;
    }
  }

  /**
   * Returns an iterator over the values
   */
  *values<T>() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}
