function Node(value) {
  this.value = value;
  this.next = null;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

let curr = head;
while (curr) {
  console.log(curr.value);
  curr = curr.next;
}
