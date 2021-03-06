// Q9.
// From the following tree https://drive.google.com/uc?id=1WiTdeqPgpQlgCBgSuwRGCcjajAO3JHNw&export=download
// Visit the nodes in alphabetical order and return an array of their values in that order.
// Look in the /assets folder of this repo to see a picture of the tree
// Another text visualization of the tree could be
//            (F)
//       (D)        (J)
//    (B)  (E)   (H)  (K)
//  (A) (C)    (G) (I)
// 
// The tree is already built for you in the test code.
// 
// Example of a tree node:
// class BinaryTreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// 
// f is the root, so therefore
// traverseTreeAlphabetical(f) Should return the array 
// [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" ]

// Implement your code here
const traverseTreeAlphabetical = (node, result = []) => {
    if(!node) return []
    let f = [node]
    let result = []
    while(f.length){
        let currentNode = f.shift()
        if(currentNode.left){
            f.push(currentNode.left)
        } 
        output.push(currentNode.val)
        if(currentNode.val){
            f.push(currentNode.right)
        }
    }

    return result 

}


module.exports = traverseTreeAlphabetical
