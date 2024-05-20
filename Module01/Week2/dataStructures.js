// -- Stack
// Stack adalah struktur data yang menyimpan daftar elemen

class Stack {
  constructor() {
    this.items = [];
  }

  // push method
  push(element) {
    this.items.push(element);
  }

  // pop method
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // peek method
  peek() {
    return this.items[this.items.length - 1];
  }

  // isEmpty method
  isEmpty() {
    return this.items.length === 0;
  }

  // printStack method
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Create a stack object
let stack = new Stack();

// Pushing elements into the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack elements: " + stack.printStack()); // Printing the stack elements
console.log("Popped element: " + stack.pop()); // Popping element from the stack
console.log("Stack elements after pop: " + stack.printStack()); // Printing the stack elements after popping
console.log("Top element of stack: " + stack.peek()); // Peek top element of the stack

// Method push(element) digunakan untuk menambahkan elemen ke dalam stack.
// Method pop() digunakan untuk menghapus dan mengembalikan elemen teratas dari stack.
// Method peek() digunakan untuk melihat elemen teratas dari stack tanpa menghapusnya.
// Method isEmpty() digunakan untuk memeriksa apakah stack kosong atau tidak.
// Method printStack() digunakan untuk mencetak semua elemen dalam stack.

// -- Queue
// Antrian mengikuti metodologi First-In-First-Out (FIFO), artinya data yang pertama kali dimasukkan akan diakses pertama kali pula.
class Queue {
  constructor() {
    this.items = [];
  }

  // Menambahkan elemen ke antrian
  enqueue(element) {
    this.items.push(element);
  }

  // Menghapus elemen dari antrian dan mengembalikan elemen tersebut
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Mengembalikan elemen pertama dari antrian tanpa menghapusnya
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // Memeriksa apakah antrian kosong atau tidak
  isEmpty() {
    return this.items.length === 0;
  }

  // Mengembalikan jumlah elemen dalam antrian
  size() {
    return this.items.length;
  }

  // Menghapus semua elemen dari antrian
  clear() {
    this.items = [];
  }

  // Mengembalikan elemen-elemen antrian sebagai string
  print() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Contoh penggunaan
let queue = new Queue();
console.log(queue.isEmpty()); // Output: true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // Output: 10

queue.dequeue();
console.log(queue.print()); // Output: 20 30
console.log(queue.size()); // Output: 2

// -- Set
// Set -> menyimpan kumpulan nilai unik dari jenis apa pun, baik nilai primitif (seperti string atau integer) atau referensi objek (seperti array atau fungsi).

let mySet = new Set();

// add
mySet.add("a");
mySet.add("b");
mySet.add("c");

// delete
mySet.delete("b");

// has
console.log(mySet.has("a")); // Output: true
console.log(mySet.has("b")); // Output: false

// clear
mySet.clear();

// size
console.log(mySet.size); // Output: 0

// entries
let newSet = new Set(["apple", "banana", "orange"]);
let entries = newSet.entries();
console.log(entries.next().value); // Output: [ 'apple', 'apple' ]
console.log(entries.next().value); // Output: [ 'banana', 'banana' ]

// forEach
let fruits = new Set(["apple", "banana", "orange"]);
fruits.forEach(function (value) {
  console.log(value);
});
// Output:
// apple
// banana
// orange

// -- Hash
// Hash -> seperti daftar yang berisi kunci dan nilainya. Kita bisa memasukkan kunci ke dalam tabel hash dan kemudian mendapatkan nilainya dengan cepat.

// *hash collision ada 4 : linear probing, chaining, resize array, double hashing

// study case : kita akan membuat aplikasi sederhana untuk menyimpan data daftar belanjaan.

// *linear probing -> ketika ada tabrakan, kita akan mencoba slot berikutnya dalam tabel hash hingga menemukan slot yang kosong.
class HashTableLinear {
  constructor(size) {
    this.size = size;
    this.keys = new Array(size).fill(null);
    this.values = new Array(size).fill(null);
  }

  hash(key) {
    return key.length % this.size; // Hash sederhana untuk panjang kunci
  }

  put(key, value) {
    let index = this.hash(key);
    while (this.keys[index] !== null) {
      index = (index + 1) % this.size;
    }
    this.keys[index] = key;
    this.values[index] = value;
  }

  get(key) {
    let index = this.hash(key);
    while (this.keys[index] !== key) {
      index = (index + 1) % this.size;
    }
    return this.values[index];
  }
}

let shoppingListLinear = new HashTableLinear(10);
shoppingListLinear.put("apple", 2);
shoppingListLinear.put("banana", 5);
console.log(shoppingListLinear.get("apple")); // Output: 2
console.log(shoppingListLinear.get("banana")); // Output: 5

// *chaining -> ketika ada tabrakan, kita akan menambahkan nilai baru ke dalam linked list pada slot yang sama.
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTableChaining {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  hash(key) {
    return key.length % this.size; // Hash sederhana untuk panjang kunci
  }

  put(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = new Node(key, value);
    } else {
      let currentNode = this.table[index];
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(key, value);
    }
  }

  get(key) {
    const index = this.hash(key);
    let currentNode = this.table[index];
    while (currentNode !== null) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

let shoppingListChaining = new HashTableChaining(10);
shoppingListChaining.put("apple", 2);
shoppingListChaining.put("banana", 5);
console.log(shoppingListChaining.get("apple")); // Output: 2
console.log(shoppingListChaining.get("banana")); // Output: 5

// *resize array -> ketika jumlah elemen dalam tabel hash melebihi batas tertentu (misalnya, faktor beban atau load factor), kita perlu membuat tabel hash baru yang lebih besar untuk menghindari tabrakan yang terlalu sering.
class HashTable {
  constructor() {
    this.size = 10;
    this.count = 0;
    this.keys = new Array(this.size).fill(null);
    this.values = new Array(this.size).fill(null);
    this.loadFactor = 0.7; // Faktor beban 0.7 dipilih karena memberikan keseimbangan yang baik antara penggunaan memori dan kinerja dalam tabel hash. Dengan nilai ini, tabel hash jarang mencapai kapasitas maksimumnya, menghindari tabrakan berlebihan, dan tetap efisien dalam penggunaan memori serta kinerja.
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  resize() {
    if (this.count / this.size >= this.loadFactor) {
      const newSize = this.size * 2;
      const newKeys = new Array(newSize).fill(null);
      const newValues = new Array(newSize).fill(null);

      for (let i = 0; i < this.size; i++) {
        if (this.keys[i] !== null) {
          const newIndex = this.hash(this.keys[i]);
          newKeys[newIndex] = this.keys[i];
          newValues[newIndex] = this.values[i];
        }
      }

      this.size = newSize;
      this.keys = newKeys;
      this.values = newValues;
    }
  }
}

// *double hashing -> metode penanganan tabrakan di mana, ketika ada tabrakan, kita menggunakan fungsi hash tambahan untuk mencari slot kosong dalam tabel hash.
class HashTable {
  constructor() {
    this.size = 10;
    this.keys = new Array(this.size).fill(null);
    this.values = new Array(this.size).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  hash2(key) {
    // Fungsi hash tambahan harus independen dari hash utama
    // Contoh sederhana: menggunakan panjang key sebagai tambahan hash
    return key.length % this.size;
  }

  put(key, value) {
    let index = this.hash(key);
    let step = this.hash2(key);

    while (this.keys[index] !== null) {
      index = (index + step) % this.size;
    }

    this.keys[index] = key;
    this.values[index] = value;
  }
}

// *implementasi hash dalam object
let hashObj = {};

// Menambahkan elemen ke hash
hashObj["apple"] = { name: "Apple", price: 2 };
hashObj["banana"] = { name: "Banana", price: 3 };

// Mengakses elemen hash
console.log(hashObj["apple"]); // Output: { name: 'Apple', price: 2 }
console.log(hashObj["banana"]); // Output: { name: 'Banana', price: 3 }

// *implementasi has dalam Map
let hashMap = new Map();

// Menambahkan elemen ke hash
hashMap.set("apple", { name: "Apple", price: 2 });
hashMap.set("banana", { name: "Banana", price: 3 });

// Mengakses elemen hash
console.log(hashMap.get("apple")); // Output: { name: 'Apple', price: 2 }
console.log(hashMap.get("banana")); // Output: { name: 'Banana', price: 3 }

// -- Linked List
// Linked list terdiri dari simpul-simpul di mana setiap simpul berisi sebuah data dan referensi (tautan) ke simpul berikutnya dalam daftar.

// *single linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Penggunaan
const sll = new SingleLinkedList();
sll.add(1);
sll.add(2);
sll.add(3);
sll.display();

// *double linked list
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Penggunaan
const dll = new DoubleLinkedList();
dll.add(1);
dll.add(2);
dll.add(3);
dll.display();

// *circular linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.tail.next = this.head; // Menyambungkan tail ke head
  }

  display() {
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

// Penggunaan
const cll = new CircularLinkedList();
cll.add(1);
cll.add(2);
cll.add(3);
cll.display();

// *circular double linked list
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class CircularDoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.head.prev = this.tail;
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.tail.next = this.head;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    }
  }

  display() {
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

// Penggunaan
const cdll = new CircularDoubleLinkedList();
cdll.add(1);
cdll.add(2);
cdll.add(3);
cdll.display();
