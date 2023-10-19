class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [null];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length - 1;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this._heap[1];
    }

    push(value) {
        this._heap.push(value);
        this._siftUp();
    }

    pop() {
        const poppedValue = this.peek();
        const bottom = this.size();
        if (bottom > 1) {
            this._swap(1, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    _parent(i) {
        return Math.floor(i/2);
    }

    _left(i) {
        return i * 2;
    }

    _right(i) {
        return i * 2 + 1;
    }

    _hasLeft(i) {
        return this._left(i) <= this.size();
    }

    _hasRight(i) {
        return this._right(i) <= this.size();
    }

    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    _compare(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }

    _siftUp() {
        let node = this.size();
        while (node > 1 && this._compare(node, this._parent(node))) {
            this._swap(node, this._parent(node));
            node = this._parent(node);
        }
    }

    _siftDown() {
        let node = 1;
        while (
            (this._hasLeft(node) && this._compare(this._left(node), node)) ||
            (this._hasRight(node) && this._compare(this._right(node), node))
            ) {
            let maxChild = (this._hasRight(node) && this._compare(this._right(node), this._left(node))) ? 
                this._right(node) : 
                this._left(node);
            if (this._compare(node, maxChild)) break;
            else {
                this._swap(node, maxChild);
                node = maxChild;
            }
        }
    }
}

function solution(n, works) {
    const pq = new PriorityQueue((a, b) => a > b);
    
    for (let work of works){
      pq.push(work);
    }
    
    while (n > 0){
      let maxWork = pq.pop();
      if (maxWork <= 0){
          break;
      }
      pq.push(maxWork - 1);
      n--;
    }
    
    let answer = 0;
    
    while (!pq.isEmpty()){
      let work = pq.pop();
      answer += work * work;
    }
    
   return answer;
}