export default class BinaryTree<T> {
  public val: T;
  public left: BinaryTree<T> | null | undefined = undefined;
  public right: BinaryTree<T> | null | undefined = undefined;
  private _bfs_queue: Array<BinaryTree<T>> = [];

  static generate<T>(nodes: Array<T | null>): BinaryTree<T> | null {
    if (nodes[0] === null || nodes.length === 0) return null;

    let parentIndex = 0, parentIndexOffeset = 0;
    let offset: 1 | 2 = 1;
    const queue: Array<BinaryTree<T> | null> = [];
    queue.push(new BinaryTree<T>(nodes[0]));

    for (let i = 1; i < nodes.length; i++) {

      const node = nodes[i];

      queue[i] = node !== null ? new BinaryTree<T>(node) : null;


      parentIndex = Math.floor((i - offset) / 2) + parentIndexOffeset;
      if (nodes[parentIndex] !== null) {
        queue[parentIndex]?.left === undefined
          ? queue[parentIndex]!.left = queue[i]
          : queue[parentIndex]!.right = queue[i]
      } else {
        parentIndexOffeset++;
        i--;
        continue;
      }

      offset = offset === 1 ? 2 : 1;
    }
    return queue[0];
  }

  constructor(val: T, left?: BinaryTree<T>, right?: BinaryTree<T>) {
    this.val = val;
    left && (this.left = left);
    right && (this.right = right);
  }

  dfs(order: "pre" | "in" | "post"): Array<T> {
    switch (order) {
      case "pre":
        return [this.val].concat(this?.left?.dfs(order) || []).concat(this?.right?.dfs(order) || []);
      case "in":
        return (this?.left?.dfs(order) || []).concat([this.val]).concat(this?.right?.dfs(order) || []);
      case "post":
        return (this?.left?.dfs(order) || []).concat(this?.right?.dfs(order) || []).concat([this.val]);
    }
  }

  bfs(): Array<T> {
    this._bfs_queue.push(this);
    const result: Array<T> = [];

    while (this._bfs_queue.length) {
      const node = this._bfs_queue.shift();
      if (node) {
        result.push(node.val);
        node.left && this._bfs_queue.push(node.left);
        node.right && this._bfs_queue.push(node.right);
      }
    }

    return result;
  }

}