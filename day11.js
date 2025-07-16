// Own Single Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head=newNode;
    }

    insertAtEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}

// ✅ Example usage
const list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtBeginning(5);
list.printList(); // Output: 10 -> 20 -> 30


// reverse a linked list

function reverseList(head){
    let prev = null;
    let current = head ;
    while(current){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;

    }
    return prev;
}

//  Detect a Cycle in a Linked List
// Logic: Use Floyd's Cycle Detection Algorithm 

function hasCycle(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast=fast.next.next;
        if(fast===slow) return true;
    }
    return false ;
}

// remove duplicates in sorted Linked List

function removeDuplicates(head){
    let current = head;
    while(current && current.next){
        if(current.value === current.next.value){
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }

    }
    return head;
}
//  middle of the node
function findMiddleNode(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}