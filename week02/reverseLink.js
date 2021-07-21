/**
 *  链表反转
 * Created by shenzaifang on 2021-07-21
 */

/**
 * 节点类
 */
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

let list = new Node(1);

add(2, list);
add(3, list);
add(4, list);
add(5, list);
console.log('链表 = ', JSON.stringify(list)); // 链表 =  {"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}}}

const reverseList = reverse(list);

console.log('反转后链表 = ', JSON.stringify(reverseList)); // 反转后链表 =  {"data":5,"next":{"data":4,"next":{"data":3,"next":{"data":2,"next":{"data":1,"next":null}}}}}


