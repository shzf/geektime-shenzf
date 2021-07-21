/**
 *
 * Created by shenzaifang on 2021-07-17
 */
//节点类
class Node {
    constructor (data) {
        this.data = data;
        this.next = null
    }
}


/**
 * 在链表的最后  添加元素
 * @param data
 * @param head
 */
function add (data, head) {
    let node = new Node(data);
    let current = head.next || head;
    while (current.next) {
        current = current.next
    }
    current.next = node
}

/**
 * 反转 链表
 * @param head
 * @returns {*}
 */
function reverse (head) {
    let current = head;
    let prev = null;
    while (current) {
        let next = current.next;
        //反转：改变当前节点指针。若当前节点是第一个（即头节点后面的）节点，
        //则此节点的next为null，否则next指向他的上一个节点
        current.next = prev === null ? null : prev;
        prev = current;
        current = next
    }
    return prev
}


//链表类
class SinglyLinkedList {
    constructor ({head}) {
        if (head instanceof Node) {
            this.head = head //head指向头节点
        } else {
            this.head = new Node(head) //head指向头节点
        }
    }

    //在链表组后添加节点
    add (data) {
        let node = new Node(data)
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
    }

    //添加到指定位置
    addAt (index, data) {
        let node = new Node(data)
        let current = this.head
        let counter = 1
        while (current) {
            if (counter === index) {
                node.next = current.next
                current.next = node
            }
            current = current.next
            counter++
        }
    }

    //删除某个位置的节点
    removeAt (index) {
        let current = this.head
        let counter = 1
        while (current.next) {
            if (counter === index) {
                current.next = current.next.next
            }
            current = current.next
            counter++
        }
    }

    //反转链表
    reverse () {
        let current = this.head.next
        let prev = this.head
        while (current) {
            let next = current.next
            //反转：改变当前节点指针。若当前节点是第一个（即头节点后面的）节点，
            //则此节点的next为null，否则next指向他的上一个节点
            current.next = prev === this.head ? null : prev
            prev = current
            current = next
        }
        this.head.next = prev
    }
}


let list = new Node(1);

add(2, list);
add(3, list);
add(4, list);
add(5, list);

//  {"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}}}
console.log(" 反转前 ", JSON.stringify(list));

list = reverse(list);

// {"data":5,"next":{"data":4,"next":{"data":3,"next":{"data":2,"next":{"data":1,"next":null}}}}}
console.log(" 结束 ", JSON.stringify(list));


let list2 = new SinglyLinkedList({head: 1})
console.log('list2 ' +
    JSON.stringify(list2))
