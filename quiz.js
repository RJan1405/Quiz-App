
let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];





const week12Data = [
    {
        question: "Why is B+ tree preferred in databases over B-trees?",
        options: ["Because it uses more memory", "Because it allows faster search and range queries", "Because it stores duplicate values", "Because it has a better deletion process"],
        correct: 1
    },
    {
        question: "If a B+ tree of order 4 has a height of 3, what is the maximum number of keys it can store?",
        options: ["64", "80", "48", "60"],
        correct: 1
    },
    {
        question: "Which of the following is true for a B+ tree but not for a B-tree?",
        options: ["It maintains sorted order of data", "It has more space complexity", "It supports better range queries", "It does not allow duplicate keys"],
        correct: 2
    },
    {
        question: "What is the advantage of B+ trees over B-trees?",
        options: ["Faster search due to storing all keys in internal nodes", "More space-efficient", "Supports range queries efficiently", "Faster deletion process"],
        correct: 2
    },
    {
        question: "What is the maximum height of a B-tree of order m storing n keys?",
        options: ["O(log m n)", "O(n)", "O(m log n)", "O(1)"],
        correct: 0
    },
    {
        question: "What happens when a node in a B-tree becomes full after insertion?",
        options: ["It remains unchanged", "It splits into two nodes", "It is deleted", "It merges with another node"],
        correct: 1
    },
    {
        question: "Which statement is true about B+ trees?",
        options: ["Leaf nodes store only indexes", "All data is stored in internal nodes", "Leaf nodes store actual data and are linked sequentially", "It is a variant of binary tree"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a reason for preferring B+ trees in databases?",
        options: ["Efficient range queries", "Better use of disk storage", "Fast lookup of exact keys", "Faster insertion than hash indexing"],
        correct: 3
    },
    {
        question: "How does B+ tree improve efficiency in databases compared to B-tree?",
        options: ["By using smaller nodes", "By allowing direct sequential access to data", "By eliminating internal nodes", "By increasing search complexity"],
        correct: 1
    },
    {
        question: "Which of the following is true for a B-tree?",
        options: ["It is a binary search tree", "All leaves are at the same level", "It is a singly linked list", "It does not support insertion"],
        correct: 1
    },
    {
        question: "Which data structure is commonly used for indexing in Indexed Sequential Files?",
        options: ["Array", "Linked List", "B-Tree", "Stack"],
        correct: 2
    },
    {
        question: "What is an Indexed Sequential File?",
        options: ["A file where records are stored randomly", 
                 "A file where records are stored sequentially and indexed for fast access", 
                 "A file without any index", 
                 "A file that only supports insertion, not deletion"],
        correct: 1
    },
    {
        question: "What is the worst-case time complexity of inserting a key in a B-tree of order m and height h?",
        options: ["O(h)", "O(m)", "O(log m n)", "O(n)"],
        correct: 0
    },
    {
        question: "What happens when a key is deleted from a leaf node in a B+ tree?",
        options: ["The key is simply removed without affecting the structure", 
                 "The leaf node merges with another node if required", 
                 "The root of the tree is deleted", 
                 "A new node is added"],
        correct: 0
    },
    {
        question: "In B+ trees, where is data stored?",
        options: ["In both internal and leaf nodes", "Only in internal nodes", "Only in leaf nodes", "Data is not stored in a B+ tree"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a valid advantage of B+ trees over B-trees?",
        options: ["They use less memory", "They provide better sequential access", "They are faster for range queries", "They maintain a balanced structure"],
        correct: 0
    },
    {
        question: "What happens during deletion in a B-tree if a node has fewer than the minimum required keys?",
        options: ["The node is deleted", "A redistribution or merging of nodes occurs", "The tree is reconstructed from scratch", "Nothing changes"],
        correct: 1
    },
    {
        question: "What is the time complexity of searching in a B-tree with n keys and order m?",
        options: ["O(n)", "O(log m n)", "O(m)", "O(1)"],
        correct: 1
    },
    {
        question: "Which of the following operations may cause a node to split in a B-tree?",
        options: ["Insertion", "Deletion", "Searching", "Traversing"],
        correct: 0
    },
    {
        question: "In a B-tree of order m, what is the maximum number of children a node can have?",
        options: ["m", "m+1", "m-1", "2m"],
        correct: 0
    }
];

const week10and11Data = [
    {
        question: "In polyphase merge sort, how many tape units are typically used?",
        options: ["k+1", "2k", "k-1", "3k"],
        correct: 0
    },
    {
        question: "Why is polyphase merge sort more efficient than cascade merge sort?",
        options: ["Requires fewer sorting passes", "Requires fewer disk accesses", "Uses parallel processing", "Requires fewer comparisons"],
        correct: 1
    },
    {
        question: "Which external sorting technique is based on the Fibonacci sequence?",
        options: ["Quick Sort", "Two-way Merge Sort", "Polyphase Merge Sort", "Radix Sort"],
        correct: 2
    },
    {
        question: "In polyphase merge sort, what determines the distribution of runs?",
        options: ["Heap size", "Number of disks", "Fibonacci sequence", "Number of I/O operations"],
        correct: 2
    },
    {
        question: "In a sort-merge join algorithm, what is the first step?",
        options: ["Splitting the records", "Sorting the records", "Merging the records", "Searching for duplicate records"],
        correct: 1
    },
    {
        question: "Which sorting method is used when data is too large to fit in main memory?",
        options: ["Merge Sort", "Bubble Sort", "External Sorting", "Insertion Sort"],
        correct: 2
    },
    {
        question: "In two-way merge sort, how many sorted sublists are merged at a time?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "What is the biggest advantage of multi-way merge sort over two-way merge sort?",
        options: ["Reduces the number of merging passes", "Uses more memory", "Increases disk fragmentation", "Decreases file size"],
        correct: 0
    },
    {
        question: "What is the key feature of cascade merge sort?",
        options: ["Uses Fibonacci series", "Uses fewer tape units", "Requires two tapes for merging", "Sorts data in memory only"],
        correct: 1
    },
    {
        question: "In external sorting, which factor is most critical?",
        options: ["Number of comparisons", "Number of disk accesses", "Sorting algorithm used", "Use of recursion"],
        correct: 1
    },
    {
        question: "What is the primary purpose of external sorting?",
        options: ["Sorting data stored in main memory", "Sorting data stored on secondary storage", "Sorting data using bubble sort", "Sorting data using recursion"],
        correct: 1
    },
    {
        question: "How does a balance-line algorithm maintain synchronization between master and transaction files?",
        options: ["Using a FIFO queue", "Using an active key", "Using a heap structure", "Using an AVL tree"],
        correct: 1
    },
    {
        question: "What is the purpose of a directory in a file system?",
        options: ["To store data records", "To store metadata about files", "To increase memory", "To delete files automatically"],
        correct: 1
    },
    {
        question: "Which data structure is best suited for implementing an indexed file system?",
        options: ["Stack", "Queue", "Hash Table", "B-Tree"],
        correct: 3
    },
    {
        question: "Which of the following is a disadvantage of hashing in file storage?",
        options: ["Collisions", "Slow retrieval", "Uses linear search", "Requires external sorting"],
        correct: 0
    },
    {
        question: "What is the main disadvantage of sequential file organization?",
        options: ["Requires large memory space", "Slower access for a single record search", "Cannot store large files", "Requires hashing"],
        correct: 1
    },
    {
        question: "What is the function of the index block in indexed allocation?",
        options: ["Stores actual data", "Points to disk blocks containing file data", "Helps in garbage collection", "Increases file size"],
        correct: 1
    },
    {
        question: "How does an operating system manage file storage in non-contiguous allocation?",
        options: ["Using sequential access", "Using linked lists or indexed allocation", "Using direct memory allocation", "Using hashing only"],
        correct: 1
    },
    {
        question: "In the indexed file system, what happens when an index table overflows?",
        options: ["The file is deleted", "A multi-level index is created", "Data is reallocated", "A new directory is created"],
        correct: 1
    },
    {
        question: "What is a major advantage of linked allocation over contiguous allocation?",
        options: ["Eliminates fragmentation", "Provides direct access", "Uses more disk space", "Slower file access"],
        correct: 0
    }
];

const week6and7Data = [
    {
        question: "What is the worst-case time complexity of Bubble Sort?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        correct: 2
    },
    {
        question: "What is a hash function used for in data structures?",
        options: ["Sorting data", "Storing dictionaries efficiently", "Compressing files", "Encrypting passwords"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a comparison-based sorting algorithm?",
        options: ["Merge Sort", "Radix Sort", "Quick Sort", "Bubble Sort"],
        correct: 1
    },
    {
        question: "In Merge Sort, how is the list divided?",
        options: ["Into equal halves recursively", "By picking a pivot element", "By comparing adjacent elements", "By selecting the maximum element each time"],
        correct: 0
    },
    {
        question: "In a binary heap, where is the parent of a node at index i located?",
        options: ["i+1", "i/2", "2i", "2i+1"],
        correct: 1
    },
    {
        question: "What is the best case time complexity of Quick Sort?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        correct: 0
    },
    {
        question: "Which data structure is used to implement a priority queue?",
        options: ["Stack", "Queue", "Heap", "Linked List"],
        correct: 2
    },
    {
        question: "Which of the following sorting algorithms follows the Divide and Conquer paradigm?",
        options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
        correct: 2
    },
    {
        question: "Which sorting algorithm has an O(n log n) worst-case complexity but uses more memory?",
        options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Heap Sort"],
        correct: 1
    },
    {
        question: "What is the key difference between a min-heap and a max-heap?",
        options: ["The number of elements stored", "The parent-child relationship", "The order of elements in an array", "The use of external memory"],
        correct: 1
    },
    {
        question: "What is a major disadvantage of using hashing with perfect hash functions?",
        options: ["Slow retrieval time", "High memory consumption", "Requires linked lists", "It is not deterministic"],
        correct: 1
    },
    {
        question: "Which of the following is an example of a stable sorting algorithm?",
        options: ["Bubble Sort", "Quick Sort", "Heap Sort", "Selection Sort"],
        correct: 0
    },
    {
        question: "Which hashing technique resolves collisions using a second hash function?",
        options: ["Linear Probing", "Quadratic Probing", "Chaining", "Double Hashing"],
        correct: 3
    },
    {
        question: "In Quick Sort, which technique is used for partitioning?",
        options: ["Merging", "Swapping", "Divide and Conquer", "Selecting a pivot element"],
        correct: 3
    },
    {
        question: "What is the main purpose of sorting in data structures?",
        options: ["To arrange elements in a specific order", "To delete elements efficiently", "To merge two lists", "To encrypt data"],
        correct: 0
    },
    {
        question: "Which hash function property is necessary to avoid clustering?",
        options: ["Uniform distribution", "Deterministic mapping", "One-to-one mapping", "Large memory space"],
        correct: 0
    },
    {
        question: "Which hashing technique resolves collisions by storing multiple keys in the same bucket?",
        options: ["Open Addressing", "Linear Probing", "Chaining", "Double Hashing"],
        correct: 2
    },
    {
        question: "Which sorting algorithm works by repeatedly swapping adjacent elements that are out of order?",
        options: ["Selection Sort", "Merge Sort", "Bubble Sort", "Quick Sort"],
        correct: 2
    },
    {
        question: "What is the time complexity of searching for an element in a hash table with perfect hashing?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: 0
    },
    {
        question: "What is the expected time complexity of hashing with chaining?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        correct: 2
    }
];

const week8and9Data = [
    {
        question: "The space complexity of Merge Sort is:",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correct: 1
    },
    {
        question: "Kruskal's Algorithm follows which approach?",
        options: ["Greedy", "Divide and Conquer", "Backtracking", "Dynamic Programming"],
        correct: 0
    },
    {
        question: "In Quick Sort, which of the following is the most crucial step affecting its efficiency?",
        options: ["Choosing the pivot", "Recursion depth", "Number of elements", "Sorting order of the input"],
        correct: 0
    },
    {
        question: "The time complexity of Bucket Sort in the best case is:",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(n²)"],
        correct: 2
    },
    {
        question: "What is the primary advantage of Merge Sort over Quick Sort?",
        options: ["Better space efficiency", "Works well with linked lists", "Faster for small datasets", "Lower worst-case time complexity"],
        correct: 3
    },
    {
        question: "What is the best-case time complexity of Quick Sort?",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        correct: 1
    },
    {
        question: "Which sorting algorithm is most suitable for sorting large numbers of phone numbers?",
        options: ["Quick Sort", "Merge Sort", "Radix Sort", "Heap Sort"],
        correct: 2
    },
    {
        question: "If Quick Sort consistently selects the median as the pivot, what is its time complexity?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correct: 1
    },
    {
        question: "In Kruskal's Algorithm, how are edges selected?",
        options: ["In random order", "Based on weight, in increasing order", "Based on weight, in decreasing order", "Based on vertex degree"],
        correct: 1
    },
    {
        question: "Why does Radix Sort work better for large numbers compared to comparison-based sorting?",
        options: ["It uses fewer comparisons", "It sorts based on digit places", "It has a better worst-case complexity", "It works only on integers"],
        correct: 1
    },
    {
        question: "The time complexity of inserting an element into a Binary Heap is:",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correct: 2
    },
    {
        question: "Which sorting algorithm is preferred when the input is almost sorted?",
        options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Merge Sort"],
        correct: 2
    },
    {
        question: "What data structure is used in Kruskal's Algorithm to detect cycles?",
        options: ["Stack", "Queue", "Union-Find", "Adjacency List"],
        correct: 2
    },
    {
        question: "In Quick Sort, what happens when a bad pivot is chosen repeatedly?",
        options: ["It runs in O(n²)", "It runs in O(n log n)", "It runs in O(n)", "It runs in O(log n)"],
        correct: 0
    },
    {
        question: "What is the worst-case time complexity of Kruskal's Algorithm?",
        options: ["O(V²)", "O(E log E)", "O(V log V)", "O(VE)"],
        correct: 1
    },
    {
        question: "Merge Sort follows which algorithmic paradigm?",
        options: ["Divide and Conquer", "Greedy", "Dynamic Programming", "Backtracking"],
        correct: 0
    },
    {
        question: "Which algorithm is best suited for real-time systems?",
        options: ["Merge Sort", "Quick Sort", "Heap Sort", "Insertion Sort"],
        correct: 3
    },
    {
        question: "Which sorting algorithm does not perform any comparisons?",
        options: ["Heap Sort", "Quick Sort", "Bucket Sort", "Merge Sort"],
        correct: 2
    },
    {
        question: "The best data structure to implement a priority queue is:",
        options: ["Stack", "Queue", "Heap", "Linked List"],
        correct: 2
    },
    {
        question: "Kruskal's Algorithm is primarily used for:",
        options: ["Finding the shortest path", "Finding the Minimum Spanning Tree", "Finding the longest path", "Sorting a graph"],
        correct: 1
    }
];

const week4and5Data = [
    {
        question: "If a graph has negative weight cycles, what will be the output of Dijkstra's algorithm?",
        options: ["Correct shortest path distances", "An error message", "An infinite loop or incorrect results", "A traversal of the graph without computing shortest paths"],
        correct: 2
    },
    {
        question: "In Depth-First Search (DFS), which data structure is typically used?",
        options: ["Queue", "Stack", "Linked List", "Hash Table"],
        correct: 1
    },
    {
        question: "When inserting a node into an AVL tree, which of the following conditions may require a double rotation?",
        options: ["Left-Left imbalance", "Right-Right imbalance", "Left-Right or Right-Left imbalance", "Only when inserting at the root"],
        correct: 2
    },
    {
        question: "If a graph is represented using an adjacency matrix, what is the time complexity of performing BFS?",
        options: ["O(1)", "O(V + E)", "O(V²)", "O(V log V)"],
        correct: 2
    },
    {
        question: "Which of the following is an example of a balanced tree?",
        options: ["Binary Search Tree", "AVL Tree", "Linked List", "Hash Table"],
        correct: 1
    },
    {
        question: "What is the time complexity for inserting a node into an AVL tree?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correct: 1
    },
    {
        question: "Which traversal technique ensures that the shortest path (in terms of edges) is found first in an unweighted graph?",
        options: ["BFS", "DFS", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
        correct: 0
    },
    {
        question: "Which AVL tree operation is the most expensive in terms of rotations?",
        options: ["Deletion", "Insertion", "Searching", "Traversal"],
        correct: 0
    },
    {
        question: "If all edge weights are equal, which shortest path algorithm is the most efficient?",
        options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "BFS", "Floyd-Warshall Algorithm"],
        correct: 2
    },
    {
        question: "Which data structure is commonly used for Breadth-First Search (BFS)?",
        options: ["Stack", "Queue", "Priority Queue", "Heap"],
        correct: 1
    },
    {
        question: "If a node with two children is deleted from an AVL tree, how is the tree restructured?",
        options: ["The node is simply removed", "The left child is always chosen as the replacement", "The in-order successor or predecessor replaces the node, followed by balancing", "The entire subtree is rebalanced"],
        correct: 2
    },
    {
        question: "Which algorithm can detect negative weight cycles in a graph?",
        options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "Prim's Algorithm"],
        correct: 1
    },
    {
        question: "What is the maximum height difference allowed between the left and right subtrees of any node in an AVL tree?",
        options: ["1", "2", "3", "No limit"],
        correct: 0
    },
    {
        question: "In a balanced tree, what operation is performed when the balance factor exceeds the allowed limit?",
        options: ["Swapping", "Rotation", "Deletion", "Reordering"],
        correct: 1
    },
    {
        question: "In an undirected graph, how many times will an edge (u, v) be explored in BFS or DFS?",
        options: ["Once", "Twice", "Thrice", "Four times"],
        correct: 1
    },
    {
        question: "What is the primary purpose of a balanced tree?",
        options: ["To reduce memory usage", "To maintain sorted order of elements", "To ensure O(log n) time complexity for operations", "To increase redundancy"],
        correct: 2
    },
    {
        question: "What is the main difference between Dijkstra's and Bellman-Ford algorithms?",
        options: ["Bellman-Ford is only applicable for directed graphs", "Dijkstra works with negative weight edges, but Bellman-Ford doesn't", "Bellman-Ford works with negative weight edges, but Dijkstra doesn't", "Both algorithms work only with positive weights"],
        correct: 2
    },
    {
        question: "In an AVL tree, which of the following rotations is applied when a node is inserted into the left subtree of the right child?",
        options: ["Left-Left (LL) Rotation", "Right-Right (RR) Rotation", "Left-Right (LR) Rotation", "Right-Left (RL) Rotation"],
        correct: 3
    },
    {
        question: "What is the time complexity of Dijkstra's algorithm using a binary heap?",
        options: ["O(V²)", "O(V + E log V)", "O(E log V)", "O(V log E)"],
        correct: 1
    },
    {
        question: "What are the two main graph traversal techniques?",
        options: ["DFS and BFS", "Inorder and Preorder", "Dijkstra and Floyd-Warshall", "Hashing and Sorting"],
        correct: 0
    }
];

const week3Data = [
    {
        question: "What is the time complexity of dequeue operation in a Queue?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n*2)"],
        correct: 0
    },
    {
        question: "How do you differentiate between an empty and full condition in a non-circular Queue implemented using arrays?",
        options: ["front == rear for both conditions", "front == -1 for empty and (rear + 1) % size == front for full", "rear == size - 1 for full and front == rear for empty", "None of the above"],
        correct: 2
    },
    {
        question: "What is a Queue in data structure?",
        options: ["A linear list in which elements can be added or removed at either end", "A linear list in which elements are added at one end and removed from the other end", "A linear list in which elements are added and removed from the same end", "None of the above"],
        correct: 1
    },
    {
        question: "Which traversal method processes the root node before its child nodes?",
        options: ["Inorder", "Preorder", "Postorder", "Level order"],
        correct: 1
    },
    {
        question: "What is the main disadvantage of a Queue implemented using arrays?",
        options: ["Fixed size", "Dynamic size", "Slow access time", "None of the above"],
        correct: 0
    },
    {
        question: "What is the output of the following sequence of operations on an empty Queue? Enqueue(1), Enqueue(2), Dequeue(), Enqueue(3), Dequeue()",
        options: ["1", "2", "3", "None of the above"],
        correct: 1
    },
    {
        question: "In a Queue implemented using an array, how do you handle the condition where the front pointer moves ahead of the rear pointer due to multiple dequeue operations?",
        options: ["Shift all elements to the left", "Reset front and rear pointers", "Do nothing, as it's a valid condition", "Increase the size of the array"],
        correct: 0
    },
    {
        question: "What is the number of leaf nodes in a complete binary tree with n internal nodes?",
        options: ["n + 1", "n", "n - 1", "2n"],
        correct: 0
    },
    {
        question: "How can you differentiate between a full and an empty circular Queue implemented with an array?",
        options: ["front == rear", "(rear + 1) % size == front", "front == -1", "(rear + 1) % size == -1"],
        correct: 1
    },
    {
        question: "Which algorithm is used for finding the shortest path in a tree?",
        options: ["Depth First Search (DFS)", "Breadth First Search (BFS)", "Dijkstra's Algorithm", "None of the above"],
        correct: 1
    },
    {
        question: "What is the inorder traversal of the following tree?",
        options: ["4, 2, 5, 1, 3", "1, 2, 4, 5, 3", "4, 5, 2, 1, 3", "1, 2, 3, 4, 5"],
        correct: 0
    },
    {
        question: "What will happen if we try to dequeue an empty Queue?",
        options: ["Underflow", "Overflow", "Both a and b", "None of the above"],
        correct: 0
    },
    {
        question: "Which of the following is an application of Queue?",
        options: ["CPU Scheduling", "Disk Scheduling", "Both a and b", "None of the above"],
        correct: 2
    },
    {
        question: "What is the height of a tree with 'n' nodes in the worst case of an unbalanced binary tree?",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        correct: 1
    },
    {
        question: "What is the initial condition of front and rear in an empty Queue implemented with an array??",
        options: ["front =-1 , rear = -1", "front =0 , rear = 0", "front = -1, rear = 0", "front = 0, rear = -1"],
        correct: 0
    }
];

const week1Data = [
    {
        question: "When an element is removed from an empty stack, what is this situation called?",
        options: ["Queue Overflow", "Queue Underflow", "Stack Overflow", "Stack Underflow"],
        correct: 3
    },
    {
        question: "Which pointer is associated with the stack structure?",
        options: ["Front", "Rear", "Top", "First"],
        correct: 2
    },
    {
        question: "What is the main objective of an abstract data type (ADT)?",
        options: ["To develop hardware components", "To define a data structure conceptually", "To perform network operations", "To execute machine-level instructions"],
        correct: 1
    },
    {
        question: "When using a stack to manage your browser's back button, which operation would you perform to go back to the previous page?",
        options: ["Push", "Pop", "Enqueue", "Dequeue"],
        correct: 1
    },
    {
        question: "You are developing a navigation system that uses depth-first search (DFS) to explore a map of connected cities. What is the time complexity of DFS, and which data structure is used for traversal?",
        options: ["O(V + E), Stack", "O(V), Queue", "O(V*2), Array", "O(E log V), Heap"],
        correct: 0
    },
    {
        question: "You have a playlist of songs that you want to play in reverse order. Which data structure should you use?",
        options: ["Stack", "Array", "Queue", "Graph"],
        correct: 0
    },
    {
        question: "You are implementing a function to check for balanced parentheses in an expression. Which data structure should be used, and what is the time complexity for this check?",
        options: ["Queue, O(n)", "Stack, O(n)", "Array, O(n)", "Linked List, O(n)"],
        correct: 1
    },
    {
        question: "Which of the following is/are linear data structures?",
        options: ["Tree", "Graph", "Queue", "Table"],
        correct: 2
    },
    {
        question: "In a social media application, you need to store the list of followers for a user. Which data structure would you use?",
        options: ["Array", "Stack", "List", "Graph"],
        correct: 2
    },
    {
        question: "In a social media application, you need to maintain a list of friends for each user. Which data structure is appropriate, and what is the time complexity for adding a friend?",
        options: ["Array, O(1)", "Linked List, O(1)", "Stack, O(1)", "Queue, O(1)"],
        correct: 1
    }
];

const week2Data = [
    {
        question: "What is the time complexity of dequeue operation in a Queue?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n*2)"],
        correct: 0
    },
    {
        question: "How do you differentiate between an empty and full condition in a non-circular Queue implemented using arrays?",
        options: ["front == rear for both conditions", "front == -1 for empty and (rear + 1) % size == front for full", "rear == size - 1 for full and front == rear for empty", "None of the above"],
        correct: 2
    },
    {
        question: "What is a Queue in data structure?",
        options: ["A linear list in which elements can be added or removed at either end", "A linear list in which elements are added at one end and removed from the other end", "A linear list in which elements are added and removed from the same end", "None of the above"],
        correct: 1
    },
    {
        question: "Which traversal method processes the root node before its child nodes?",
        options: ["Inorder", "Preorder", "Postorder", "Level order"],
        correct: 1
    },
    {
        question: "What is the main disadvantage of a Queue implemented using arrays?",
        options: ["Fixed size", "Dynamic size", "Slow access time", "None of the above"],
        correct: 0
    },
    {
        question: "What is the output of the following sequence of operations on an empty Queue? Enqueue(1), Enqueue(2), Dequeue(), Enqueue(3), Dequeue()",
        options: ["1", "2", "3", "None of the above"],
        correct: 1
    },
    {
        question: "In a Queue implemented using an array, how do you handle the condition where the front pointer moves ahead of the rear pointer due to multiple dequeue operations?",
        options: ["Shift all elements to the left", "Reset front and rear pointers", "Do nothing, as it's a valid condition", "Increase the size of the array"],
        correct: 0
    },
    {
        question: "What is the number of leaf nodes in a complete binary tree with n internal nodes?",
        options: ["n + 1", "n", "n - 1", "2n"],
        correct: 0
    },
    {
        question: "How can you differentiate between a full and an empty circular Queue implemented with an array?",
        options: ["front == rear", "(rear + 1) % size == front", "front == -1", "(rear + 1) % size == -1"],
        correct: 1
    },
    {
        question: "Which algorithm is used for finding the shortest path in a tree?",
        options: ["Depth First Search (DFS)", "Breadth First Search (BFS)", "Dijkstra's Algorithm", "None of the above"],
        correct: 1
    },
    {
        question: "What is the inorder traversal of the following tree?",
        options: ["4, 2, 5, 1, 3", "1, 2, 4, 5, 3", "4, 5, 2, 1, 3", "1, 2, 3, 4, 5"],
        correct: 0
    },
    {
        question: "What will happen if we try to dequeue an empty Queue?",
        options: ["Underflow", "Overflow", "Both a and b", "None of the above"],
        correct: 0
    },
    {
        question: "Which of the following is an application of Queue?",
        options: ["CPU Scheduling", "Disk Scheduling", "Both a and b", "None of the above"],
        correct: 2
    },
    {
        question: "What is the height of a tree with 'n' nodes in the worst case of an unbalanced binary tree?",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        correct: 1
    },
    {
        question: "What is the initial condition of front and rear in an empty Queue?",
        options: ["front = rear = -1", "front = rear = 0", "front = -1, rear = 0", "front = 0, rear = -1"],
        correct: 0
    }
];

const week1Lesson1 = [
    {
        question: "Term Data Structure refers to _________.",
        options: ["Organization of Data Element", "Coding Standards", "None of These", "Programming Language Statement"],
        correct: 0
    },
    {
        question: "Data is nothing but ____________.",
        options: ["Piece of Information", "Bunch of Information", "None of These", "Programming Statement"],
        correct: 0
    },
    {
        question: "In what kind of storage can we easily insert, delete, concatenate and rearrange sub strings?",
        options: ["Stack", "Queue", "Array", "Linked List"],
        correct: 3
    },
    {
        question: "ADT is called Abstract because ____________.",
        options: ["None of These", "It is Completely Independent Data Type", "It is Collection of Different Data Types", "Implementation Details are Hidden"],
        correct: 3
    },
    {
        question: "If elements of the data structure form a sequence of list, then it is called as ____________.",
        options: ["Linear Data Structure", "None of These", "Non-Primitive Data Structure", "Primitive Data Structure"],
        correct: 0
    }
];

const week1Lesson2 = [
    {
        question: "The smallest element of an array's index is called its ________.",
        options: ["Lower Bound", "Upper Bound", "Range", "Extraction"],
        correct: 0
    },
    {
        question: "In a circular linked list ________.",
        options: ["Components are all Linked together in some Sequential Manner", "There is no Beginning and No End", "Components are Arranged Hierarchically", "Forward and Backward Traversal Within The List is Permitted"],
        correct: 1
    },
    {
        question: "A linear collection of data elements where the linear node is given by means of pointer is ________.",
        options: ["Linked List", "Node List", "Primitive List", "None of These"],
        correct: 0
    },
    {
        question: "A linear list in which the pointer points only to the successive node is ________.",
        options: ["Singly Linked List", "Circular Linked List", "Doubly Linked List", "None of the Above"],
        correct: 0
    },
    {
        question: "Linked Lists are best suited _______.",
        options: ["For Relatively Permanent Collections of Data", "For the Size of the Structure and the data in the Structure are Constantly Changing", "Data Structure", "For None of Above Situation"],
        correct: 1
    }
];

const week1Lesson3 = [
    {
        question: "User pushes 1 element in the stack having already five elements and having stack size as 5, then stack becomes ___________.",
        options: ["Underflow", "Overflow", "Crash", "User Flow"],
        correct: 1
    },
    {
        question: "In the stack, if user tries to remove an element from the empty stack then it is called as _______.",
        options: ["Garbage Collection", "Underflow of Stack", "Empty Collection", "Overflow of Stack"],
        correct: 1
    },
    {
        question: "Process of removing element from the stack is called as _______.",
        options: ["Pop", "Delete", "Push", "Remove"],
        correct: 0
    },
    {
        question: "In the stack, process of inserting an element in the stack is called as ___________.",
        options: ["Pop", "Push", "Evaluation", "Create"],
        correct: 1
    },
    {
        question: "Stack in data structure is _________.",
        options: ["FIFO", "None of these", "LILO", "LIFO"],
        correct: 3
    }
];

const week1Lesson4 = [
    {
        question: "In stack, insertion and deletion can be done only at the _____ element.",
        options: ["Any", "Top", "(n-1)", "None of the above"],
        correct: 1
    },
    {
        question: "What data structure is used to perform recursion?",
        options: ["Queue", "Linked List", "Stack", "Double Linked List"],
        correct: 2
    },
    {
        question: "What is the type of the algorithm used in solving the 8 Queens problem?",
        options: ["Greedy", "Dynamic", "Branch and Bound", "Backtracking"],
        correct: 3
    },
    {
        question: "What data structure would you most likely see in a non-recursive implementation of a recursive algorithm?",
        options: ["Linked List", "Stack", "Queue", "Tree"],
        correct: 1
    },
    {
        question: "Which of the following statement(s) about stack data structure is/are NOT correct?",
        options: ["Stack Data Structure can be implemented using Linked List", "New Node can only be added at the top of the Stack", "Stack is the FIFO data structure", "The last node at the bottom of the stack has a NULL link"],
        correct: 2
    }
];

const week2Lesson5 = [
    {
        question: "A linear list of elements in which deletion can be done from one end (front) and insertion can take place only at the other end (rear) is known as a ?",
        options: ["Queue", "Stack", "Tree", "Linked list"],
        correct: 0
    },
    {
        question: "The data structure required for Breadth First Search on a graph is?",
        options: ["Stack", "Array", "Queue", "Tree"],
        correct: 2
    },
    {
        question: "A queue is a ?",
        options: ["FIFO (First In First Out) list", "LIFO (Last In First Out) list", "Ordered array", "Linear tree"],
        correct: 0
    },
    {
        question: "In linked list implementation of a queue, where does a new element get inserted?",
        options: ["At the head of link list", "At the tail of the link list", "At the centre position in the link list", "None"],
        correct: 1
    },
    {
        question: "In the array implementation of circular queue, which of the following operations takes worst-case linear time?",
        options: ["Insertion", "Deletion", "To empty a queue", "None"],
        correct: 3
    }
];

const week2Lesson6 = [
    {
        question: "A data structure in which elements can be inserted or deleted at/from both the ends but not in the middle is?",
        options: ["Queue", "Circular queue", "Dequeue", "Priority queue"],
        correct: 2
    },
    {
        question: "In linked list implementation of a queue, which pointer changes during an insertion into a NONEMPTY queue?",
        options: ["Only front pointer", "Only rear pointer", "Both front and rear pointer", "None of the front and rear pointer"],
        correct: 1
    },
    {
        question: "A normal queue, if implemented using an array of size MAX_SIZE, gets full when:",
        options: ["Rear = MAX_SIZE - 1", "Front = (rear + 1) mod MAX_SIZE", "Front = rear + 1", "Rear = front"],
        correct: 0
    },
    {
        question: "A variant of the linked list in which none of the nodes contain NULL pointers is?",
        options: ["Singly linked list", "Doubly linked list", "Circular linked list", "None"],
        correct: 2
    },
    {
        question: "In circular linked list, insertion of a node requires modification of?",
        options: ["One pointer", "Two pointers", "Three pointers", "None"],
        correct: 1
    }
];

const week2Lesson7 = [
    {
        question: "In Binary trees, nodes with no successor are called _________.",
        options: ["End nodes", "Terminal nodes", "Final nodes", "Last nodes"],
        correct: 1
    },
    {
        question: "A connected graph T without any cycles is called a _______.",
        options: ["A tree graph", "Free tree", "A tree", "All of the above"],
        correct: 3
    },
    {
        question: "Sequential representation of binary tree uses _______.",
        options: ["Array with pointers", "Single linear array", "Two-dimensional arrays", "Three-dimensional arrays"],
        correct: 0
    },
    {
        question: "A binary tree where every node has either zero or two children is called ______.",
        options: ["Complete binary tree", "Binary search tree", "Extended binary tree", "Data structure"],
        correct: 2
    },
    {
        question: "Which indicates pre-order traversal?",
        options: ["Left sub-tree, Right sub-tree and root", "Right sub-tree, Left sub-tree and root", "Root, Left sub-tree, Right sub-tree", "Right sub-tree, root, Left sub-tree"],
        correct: 2
    }
];

const week2Lesson8 = [
    {
        question: "A BST is traversed in the following order recursively: Right, root, left. The output sequence will be in:",
        options: ["Ascending order", "Descending order", "Both sequence", "No specific order"],
        correct: 1
    },
    {
        question: "In order to get the contents of a Binary search tree in ascending order, one has to traverse it in:",
        options: ["Pre-order", "In-order", "Post-order", "Not possible"],
        correct: 1
    },
    {
        question: "In order to get the information stored in a Binary Search Tree in the descending order, one should traverse it in which of the following order?",
        options: ["left, root, right", "root, left, right", "right, root, left", "right, left, root"],
        correct: 2
    },
    {
        question: "What is the worst-case time complexity for search, insert and delete operations in a general Binary Search Tree?",
        options: ["O(n) for all", "O(Logn) for all", "O(Logn) for search and insert, and O(n) for delete", "O(Logn) for search, and O(n) for insert and delete"],
        correct: 0
    },
    {
        question: "Which of the following traversal outputs the data in sorted order in a BST?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        correct: 1
    }
];

const week3Lesson9 = [
    {
        question: "What is common in three different types of traversals (Inorder, Preorder, and Postorder)?",
        options: ["Root is visited before right subtree", "Left subtree is always visited before right subtree", "Root is visited after left subtree", "All of the above", "None of the above"],
        correct: 1
    },
    {
        question: "The inorder and preorder traversal of a binary tree are:\nInorder = d b e a f c g\nPreorder = a b d e c f g\nThe postorder traversal of the binary tree is:",
        options: ["d e b f g c a", "e d b g f c a", "e d b f g c a", "d e f g b c a"],
        correct: 0
    },
    {
        question: "Which of the following pairs of traversals is not sufficient to build a binary tree from the given traversals?",
        options: ["Preorder and Inorder", "Preorder and Postorder", "Inorder and Postorder", "None of the Above"],
        correct: 1
    },
    {
        question: "Which traversal of a tree resembles the breadth-first search (BFS) of a graph?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        correct: 3
    },
    {
        question: "Which of the following tree traversal uses a queue data structure?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        correct: 3
    }
];

const week3Lesson10 = [
    {
        question: "What is the expected time required to search for a value in a binary search tree containing n nodes?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: 1
    },
    {
        question: "If node N is a terminal node in a binary tree, then its .........",
        options: ["Right tree is empty", "Left tree is empty", "Both left & right sub trees are empty", "Root node is empty"],
        correct: 2
    },
    {
        question: "In a threaded binary tree, ......... points to higher nodes in the tree.",
        options: ["Info", "Root", "Threads", "Child"],
        correct: 2
    },
    {
        question: "In linked representation of binary trees, LEFT[k] contains the _____ of the node N, where k is the location.",
        options: ["Data", "Location and left child", "Right child address", "Null value"],
        correct: 0
    },
    {
        question: "The postorder traversal of a binary tree is D E B F C A. Find the preorder traversal.",
        options: ["A B F C D E", "A D B F E C", "A B D E C F", "A B D C E F"],
        correct: 2
    }
];

const week3Lesson11 = [
    {
        question: "The height of a BST is given as h. Consider the height of the tree as the number of edges in the longest path from root to leaf. The maximum number of nodes possible in the tree is?",
        options: ["2^h - 1", "2^(h+1) - 1", "2^h + 1", "2^(h-1) + 1"],
        correct: 1
    },
    {
        question: "Suppose we have numbers between 1 and 1000 in a binary search tree and want to search for the number 363. Which of the following sequences could not be the sequence of the nodes examined?",
        options: ["2, 252, 401, 398, 330, 344, 397, 363", "924, 220, 911, 244, 898, 258, 362, 363", "925, 202, 911, 240, 912, 245, 258, 363", "2, 399, 387, 219, 266, 382, 381, 278, 363"],
        correct: 2
    },
    {
        question: "Which type of traversal of a binary search tree outputs the values in sorted order?",
        options: ["Pre-order", "In-order", "Post-order", "None"],
        correct: 1
    },
    {
        question: "A binary search tree is formed from the sequence 6, 9, 1, 2, 7, 14, 12, 3, 8, 18. The minimum number of nodes required to be added to this tree to form an extended binary tree is?",
        options: ["3", "6", "8", "11"],
        correct: 3
    },
    {
        question: "When a binary tree is converted into an extended binary tree, all the nodes of the binary tree in the external node become:",
        options: ["Internal nodes", "External nodes", "Root nodes", "None"],
        correct: 0
    }
];

const week3Lesson12 = [
    {
        question: "The maximum number of elements in a heap of height h is:",
        options: ["2^(h+1) - 1", "2^h", "2^h - 1", "2^h - 1"],
        correct: 0
    },
    {
        question: "A binary search tree is generated by inserting in order the following integers:\n50, 15, 62, 5, 20, 58, 91, 3, 8, 37, 60, 24\nThe number of nodes in the left sub-tree and right sub-tree of the root, respectively, is:",
        options: ["(4, 7)", "(7, 4)", "(8, 3)", "(3, 8)"],
        correct: 1
    },
    {
        question: "In a full binary tree, every internal node has exactly two children. A full binary tree with 2n+1 nodes contains:",
        options: ["n leaf nodes", "n internal nodes", "n-1 leaf nodes", "n-1 internal nodes"],
        correct: 1
    },
    {
        question: "To represent hierarchical relationships between elements, which data structure is suitable?",
        options: ["Dequeue", "Priority", "Tree", "Graph"],
        correct: 2
    },
    {
        question: "In BST operations, ______ must not leave 'a gap' in the tree.",
        options: ["Removal of node", "Increment of node", "Decrement of node", "None of these"],
        correct: 0
    }
];

const week4Lesson13 = [
    {
        question: "In ______, the difference between the height of the left sub tree and height of the right tree, for each node, is almost one.",
        options: ["Binary search tree", "AVL tree", "Complete tree", "Threaded binary tree"],
        correct: 1
    },
    {
        question: "AVL trees have a faster _______________",
        options: ["Insertion", "Deletion", "Updation", "Retrieval"],
        correct: 3
    },
    {
        question: "In ______________ tree, the heights of two child sub trees of any node differ by at most one",
        options: ["Binary tree", "Red black tree", "Splay tree", "AVL tree"],
        correct: 3
    },
    {
        question: "Items 7, 3, 11, 9 and 13 are inserted into an AVL tree. What happens when 12 is inserted?",
        options: ["No rotation is needed", "Single rotation between some node and its left child", "Single rotation between some node and its right child", "Double rotation with a node, its left child, and third node"],
        correct: 2
    },
    {
        question: "A binary search tree whose left sub tree and right sub tree differ in height by at most 1 unit is called ______",
        options: ["AVL tree", "Red-black tree", "Lemma tree", "None of the above"],
        correct: 0
    }
];

const week4Lesson14 = [
    {
        question: "The balance factor for an AVL tree is either",
        options: ["0, 1 or –1", "–2, –1 or 0", "0, 1 or 2", "All the above"],
        correct: 0
    },
    {
        question: "AVL trees have LL, LR, RR, RL rotations to balance the tree to maintain the balance factor (LR: Insert node in Right sub tree of Left sub tree of node A). Among rotations, the following are single and double rotations:",
        options: ["LL, RL and LR, RR", "LL, RR and LR, RL", "LR, RR and LL, RL", "LR, RL and LR, RL"],
        correct: 1
    },
    {
        question: "Which of the following is not possible as a balance factor of any node of an AVL tree?",
        options: ["0", "+1", "-1", "2"],
        correct: 3
    },
    {
        question: "What data structure would you most likely see in a non-recursive implementation of a recursive algorithm?",
        options: ["LinkList", "Stack", "Queue", "Tree"],
        correct: 1
    },
    {
        question: "An AVL delete is similar to a regular ______ tree delete.",
        options: ["Float", "Decimal", "Binary", "Char"],
        correct: 2
    }
];

const week4Lesson15 = [
    {
        question: "What maximum difference in heights between the leafs of an AVL tree is possible?",
        options: ["log(n) where n is the number of nodes", "n where n is the number of nodes", "0 or 1", "at most 1"],
        correct: 0
    },
    {
        question: "In AVL tree delete, ________ children is used to replace it with null.",
        options: ["Zero", "Two", "One", "Three"],
        correct: 0
    },
    {
        question: "In AVL tree delete, to delete will require you to go all the way back to the _______ looking for imbalances.",
        options: ["Child", "First", "Root", "Parent"],
        correct: 2
    },
    {
        question: "For each node X encountered, check if heights of left(x) and right(x) differ by at most ____.",
        options: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        question: "Rotations in deletion have ______ cases for single rotations.",
        options: ["3", "4", "2", "1"],
        correct: 2
    }
];

const week5Lesson16 = [
    {
        question: "The degree of a vertex is the number of _______ to that vertex.",
        options: ["Edges", "Cycles", "Both a and b", "None of these"],
        correct: 0
    },
    {
        question: "A simple path is a path such that all vertices are _____.",
        options: ["Vary", "Distinct", "Stable", "None of these"],
        correct: 1
    },
    {
        question: "A ______ is a path that starts and ends at the same point.",
        options: ["Cycle", "Root", "Tree", "Sub tree"],
        correct: 0
    },
    {
        question: "In an undirected graph, the adjacency matrix is _______.",
        options: ["Asymmetric", "Symmetric", "Distinct", "Vary"],
        correct: 1
    },
    {
        question: "A graph with numbers assigned to its edges is called a _______.",
        options: ["Weighted graph", "Unweighted graph", "Directed graph", "Undirected graph"],
        correct: 0
    }
];

const week5Lesson17 = [
    {
        question: "Dynamic programming reduces ___________.",
        options: ["Redundancy", "Robust", "Reliability", "None of these"],
        correct: 0
    },
    {
        question: "Travelling salesman problem is an example of _________.",
        options: ["NP_Soft problem", "NP_Hard problem", "Both a and b", "None of these"],
        correct: 1
    },
    {
        question: "A connected subgraph that connects all the vertices of the original connected graph is called _______.",
        options: ["The spanning tree", "Cyclic graph", "Acyclic graph", "None of these"],
        correct: 0
    },
    {
        question: "Prim's algorithm follows a _______ approach to find a minimum spanning tree.",
        options: ["Divide and conquer", "Greedy", "Divide", "Rotation"],
        correct: 1
    },
    {
        question: "________ is defined as the shortest distance between source and destination.",
        options: ["Shortest path", "Longest path", "Both a and b", "None of the above"],
        correct: 0
    }
];

const week5Lesson28 = [
    {
        question: "Prim's algorithm starts at a source vertex and grows a _______.",
        options: ["Two trees", "Single tree", "Multiple tree", "Tree set"],
        correct: 0
    },
    {
        question: "_______ finds a minimum cost spanning tree by selecting edges from the graph.",
        options: ["Prim's algorithm", "Kruskal algorithm", "Jarnik algorithm", "Analysis and algorithm"],
        correct: 0
    },
    {
        question: "In Prim's algorithm, the process is repeated until a ____ is formed.",
        options: ["Spanning tree", "Vertex", "Flag", "High"],
        correct: 0
    },
    {
        question: "In _______ operations, method incident edges are called once for each vertex.",
        options: ["Tree", "Stack", "Graph", "Hash"],
        correct: 2
    },
    {
        question: "From the following, choose the one which belongs to the algorithm paradigm other than the one to which others belong:",
        options: ["Minimum & maximum problem", "Knapsack problem", "Selection problem", "Quick sort"],
        correct: 1
    }
];

const week6Lesson18 = [
    {
        question: "A complete binary tree can be stored as an array using:",
        options: ["Level-order", "Preorder", "Inorder", "Postorder"],
        correct: 0
    },
    {
        question: "The accessing of location of elements in a heap is:",
        options: ["Sequential", "Random", "Binary", "Linear"],
        correct: 1
    },
    {
        question: "Heap and ______ are considered to be synonyms of each other.",
        options: ["Priority queue", "Tree", "Array", "Linked list"],
        correct: 0
    },
    {
        question: "Insertion into a heap can be done in:",
        options: ["O(n)", "O(logN)", "O(nlogn)", "O(n²)"],
        correct: 1
    },
    {
        question: "An empty heap is said to be in a state of:",
        options: ["Underflow", "Overflow", "Emptyflow", "Garbage collection"],
        correct: 0
    }
];

const week6Lesson19 = [
    {
        question: "The heap is represented in the ______ data structure.",
        options: ["Priority queue", "Array", "Stack", "Linked list"],
        correct: 0
    },
    {
        question: "The heap sort can be done in the order of:",
        options: ["n²", "n logn", "logn", "n"],
        correct: 1
    },
    {
        question: "To preserve the heap property, the ______ should always be less than the parent node.",
        options: ["Child node", "Parent node", "Root node", "Leaf node"],
        correct: 0
    },
    {
        question: "In heap sort, we remove the element at zero position and swap it with the:",
        options: ["0th position", "n-1th position", "nth position", "middle position"],
        correct: 1
    },
    {
        question: "After removing the maximum element, you reheapify between:",
        options: ["0 and n-1", "0 and n", "1 and n", "1 and n-1"],
        correct: 0
    }
];

const week6Lesson20 = [
    {
        question: "Time to initialize a hash table (where b = number of positions) is:",
        options: ["O(b)", "O(n)", "O(logn)", "O(n²)"],
        correct: 0
    },
    {
        question: "Time to perform insert, remove, and search in a hash table is:",
        options: ["O(n)", "O(1)", "O(logn)", "O(n²)"],
        correct: 1
    },
    {
        question: "______ and ______ are methods of collision resolution.",
        options: ["Open addressing", "Closed hashing", "Both a and b", "None of the above"],
        correct: 2
    },
    {
        question: "A ______ is an alternative method for representing a dictionary.",
        options: ["Linked list", "Hash table", "Tree", "Array"],
        correct: 1
    },
    {
        question: "Methods to deal with collision include:",
        options: ["Rehashing", "Chaining", "Both a and b", "None of the above"],
        correct: 2
    }
];

const week7Lesson21 = [
    {
        question: "Bubble sort, selection sort, and insertion sort are all:",
        options: ["O(n²)", "O(logn)", "O(nlogn)", "O(n)"],
        correct: 0
    },
    {
        question: "The average time complexity of insertion sort is:",
        options: ["O(n)", "O(n²)", "O(logn)", "O(n logn)"],
        correct: 1
    },
    {
        question: "Space complexity for bubble sort is:",
        options: ["O(1)", "O(n)", "O(nlogn)", "O(n²)"],
        correct: 0
    },
    {
        question: "The worst time complexity for insertion sort is:",
        options: ["O(n²)", "O(logn)", "O(nlogn)", "O(n)"],
        correct: 0
    },
    {
        question: "______ is an external sorting algorithm.",
        options: ["Quick sort", "Bubble sort", "Merge sort", "Insertion sort"],
        correct: 2
    }
];

const week7Lesson22 = [
    {
        question: "Priority queue is based on the concept of:",
        options: ["Priority", "Queue", "Stack", "Array"],
        correct: 0
    },
    {
        question: "Insertion into a priority queue with an unsorted sequence is done using:",
        options: ["Bubble sort", "Selection sort", "Quick sort", "Merge sort"],
        correct: 1
    },
    {
        question: "Insertion into a priority queue with a sorted sequence is done using:",
        options: ["Insertion sort", "Merge sort", "Quick sort", "Heap sort"],
        correct: 0
    },
    {
        question: "______ is considered a very slow way of sorting.",
        options: ["Insertion sort", "Merge sort", "Quick sort", "Heap sort"],
        correct: 0
    },
    {
        question: "______ is a sorting algorithm of divide and conquer type.",
        options: ["Selection sort", "Bubble sort", "Quick sort", "Insertion sort"],
        correct: 2
    }
];

const week7Lesson23 = [
    {
        question: "Brute force is a ______.",
        options: ["Straight forward approach", "Straight backward approach", "Both a and b", "None of these"],
        correct: 0
    },
    {
        question: "In selection sort, scan the array to find its ____ and swap it with the first element.",
        options: ["Largest element", "Smallest element", "Both a and b", "None of these"],
        correct: 1
    },
    {
        question: "_______ finds the minimum.",
        options: ["Selection sort", "Insertion sort", "Both a and b", "None of these"],
        correct: 0
    },
    {
        question: "Selection sort ______ smallest element with the value in the first position.",
        options: ["Unswap", "Swaps", "Search", "Rotation"],
        correct: 1
    },
    {
        question: "The best, average, and worst case time complexities of the selection sort.",
        options: ["O(n²)", "O(n)", "O(2ⁿ)", "None of these"],
        correct: 0
    }
];

const week7Lesson24 = [
    {
        question: "Bubble sort follows which method?",
        options: ["Exchanging method", "Direct method", "Both a and b", "None of these"],
        correct: 0
    },
    {
        question: "Running time of bubble sort algorithm is _____.",
        options: ["O(n)", "O(n²)", "O(3n)", "None of these"],
        correct: 1
    },
    {
        question: "Bubble sort is also called as ________.",
        options: ["Comparison sort", "Direct sort", "Insertion sort", "None of these"],
        correct: 0
    },
    {
        question: "Running time for both best case and worst case of bubble sort algorithm are _____.",
        options: ["Different", "Same", "May be same", "None of these"],
        correct: 1
    },
    {
        question: "Worst case of bubble sort algorithm is nothing but _______.",
        options: ["Inverse sorting", "Direct sorting", "Both a and b", "None of these"],
        correct: 0
    }
];

const week8Lesson25 = [
    {
        question: "________ sorting is much less efficient on large lists.",
        options: ["Insertion", "Selection", "Quick", "None of these"],
        correct: 0
    },
    {
        question: "________ is a good choice for sorting lists of a few thousand items or less.",
        options: ["Selection sort", "Insertion sort", "Quick sort", "None of these"],
        correct: 1
    },
    {
        question: "The disadvantage of insertion sort is _________.",
        options: ["Inefficient to operate with a large list", "Inefficient to operate with a small list", "Both a and b", "None of these"],
        correct: 0
    },
    {
        question: "The advantages of insertion sorting are ________.",
        options: ["Simple implementation", "Adaptive", "All the above", "None of these"],
        correct: 2
    },
    {
        question: "A tree is also known as _______ sort.",
        options: ["Quick", "Shell", "Heap", "Selection"],
        correct: 2
    }
];

const week8Lesson26 = [
    {
        question: "An optimal quick sort is ________?",
        options: ["2 logn", "O logn", "(O(N log N))", "2n"],
        correct: 2
    },
    {
        question: "If the input is random, then we can choose the key in position _______ as pivot.",
        options: ["A[left]", "A[right]", "Left", "Right"],
        correct: 1
    },
    {
        question: "The main idea is to find the _____ position for the pivot element P.",
        options: ["Left", "Right", "Above", "Below"],
        correct: 1
    },
    {
        question: "Best case is _____ same as merge sort.",
        options: ["2logn", "O(n logn)", "n logn", "log n"],
        correct: 1
    },
    {
        question: "Worst case is ________.",
        options: ["2logn", "O(n²)", "nlog n", "n"],
        correct: 1
    }
];

const week8Lesson27 = [
    {
        question: "Quick sort is used to ______.",
        options: ["Sorting objects", "Joining objects", "Deleting objects", "Replacing objects"],
        correct: 0
    },
    {
        question: "First step in quick sort is _______.",
        options: ["Combine the sorted s1", "Recursively sort s1 and s2", "Pick any element (pivot)", "Group"],
        correct: 2
    },
    {
        question: "The _________ are stored in the original data array.",
        options: ["Sub-variables", "Sub-arrays", "Keys", "Variables"],
        correct: 2
    },
    {
        question: "Partitioning loops through, _______ elements below/above pivot.",
        options: ["Sorting", "Traversing", "Swapping", "Grouping"],
        correct: 2
    },
    {
        question: "Partition splits array in two sub-arrays of size ______.",
        options: ["n+3", "n/3", "n/2", "n"],
        correct: 2
    }
];

const week8Lesson29 = [
    {
        question: "A \"safe edge\" is an edge of ____ which does not create a cycle.",
        options: ["Maximum weight", "No weight", "Constant weight", "Label D will appear here"],
        correct: 0
    },
    {
        question: "Kruskal's algorithm also finds the minimum cost spanning tree of a _____ by adding edges.",
        options: ["Weighted graph", "Graph", "Unweighted graph", "Label D will appear here"],
        correct: 1
    },
    {
        question: "We need a data structure that maintains a _______.",
        options: ["Spanning tree", "Partition", "Flag", "Label D will appear here"],
        correct: 1
    },
    {
        question: "Is Kruskal algorithm better than Prim's algorithm?",
        options: ["Yes", "No", "Both are equal", "Cannot be determined"],
        correct: 0
    },
    {
        question: "What algorithmic technique does the Kruskal algorithm follow?",
        options: ["Divide and conquer technique", "Dynamic programming", "Both a and b", "Greedy technique"],
        correct: 3
    }
];

const week9Lesson30 = [
    {
        question: "Two main measures for the efficiency of an algorithm are _____.",
        options: ["Processor and memory", "Complexity and capacity", "Time and space", "Data and space"],
        correct: 2
    },
    {
        question: "The complexity of bubble sort algorithm is ______.",
        options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
        correct: 1
    },
    {
        question: "If we were sorting entries according to keys, then each bucket is a _______.",
        options: ["Heap", "Stack", "Queue", "Buffer area"],
        correct: 2
    },
    {
        question: "______ is a specialization of lexicographic-sort that uses bucket-sort as the stable sorting algorithm.",
        options: ["Heap sort", "Bubble sort", "Linear sort", "Radix-sort"],
        correct: 3
    },
    {
        question: "Sorting algorithm can be characterized as ______.",
        options: ["Simple algorithm which requires the order of n² comparisons to sort n items.", 
                 "Sophisticated algorithm that requires the O(n log₂n) comparisons to sort items.", 
                 "Both of the above", 
                 "None of the above"],
        correct: 2
    }
];

const week9Lesson31 = [
    {
        question: "Radix and ______ do not work well when keys are very long.",
        options: ["Non-linear sort", "List", "Bucket sort", "Set"],
        correct: 2
    },
    {
        question: "______ works as long as the Bucket sort stages are stable sorts.",
        options: ["Sorting", "Radix sort", "Bucket sort", "Bubble sort"],
        correct: 1
    },
    {
        question: "Radix sort is ____ of bucket sort.",
        options: ["Weighted graph", "Generalization", "Serialization", "Normalization"],
        correct: 1
    },
    {
        question: "Radix-sort performs the bucket sorts by ______.",
        options: ["Least significant digits", "Most significant digits", "Least common digits", "Most common digits"],
        correct: 0
    },
    {
        question: "Radix and bucket sorts are ______.",
        options: ["Partially stable", "Unstable", "Equal", "Stable"],
        correct: 3
    }
];

const week9Lesson32 = [
    {
        question: "First implementation of merge sort was on the ENIAC in the year _______.",
        options: ["1942", "1949", "1945", "1944"],
        correct: 2
    },
    {
        question: "_______ is a method of algorithm design.",
        options: ["Divide and conquer", "Recur", "Decrease and conquer", "Conquer"],
        correct: 0
    },
    {
        question: "Merge sort has _______ running time.",
        options: ["log n", "O(log n)", "n log n", "O(n log n)"],
        correct: 3
    },
    {
        question: "_______ is a sorting algorithm based on the divide-and-conquer paradigm.",
        options: ["Shell sort", "Heap sort", "Merge-sort", "Quick sort"],
        correct: 2
    },
    {
        question: "The best case for the recursion are subproblems of size _____.",
        options: ["0 or 1", "2 or 3", "4 or 5", "6 or 7"],
        correct: 0
    }
];

const week10Lesson33 = [
    {
        question: "Disks are divided into logical units called _______.",
        options: ["Partitions", "Structures", "Trees", "None of the above"],
        correct: 0
    },
    {
        question: "The extension of executable file types is _______.",
        options: ["Obj", "Exe", "Flv", "None of the above"],
        correct: 1
    },
    {
        question: "The extension of object file types is ________.",
        options: ["Obj", "Exe", "Flv", "None of the above"],
        correct: 0
    },
    {
        question: "What is Unicode?",
        options: ["Standard font", "Software", "Character encoding system", "Keyboard layout"],
        correct: 2
    },
    {
        question: "Which of the following device cannot be shared in network?",
        options: ["CD drive", "Printer", "Mouse", "Hard disk"],
        correct: 2
    }
];

const week10Lesson34 = [
    {
        question: "All files involved in updating are sorted based on ________.",
        options: ["data", "information", "key values", "foreign key"],
        correct: 2
    },
    {
        question: "In updating a sequential file, New master file becomes __________.",
        options: ["Transaction file", "new master record", "old master file", "transaction record"],
        correct: 2
    },
    {
        question: "To make the updating process __________, all files are sorted on the same key.",
        options: ["relation", "fast", "slow", "efficient"],
        correct: 3
    },
    {
        question: "Disks can store ________ of characters.",
        options: ["lakhs", "millions", "billions", "tons"],
        correct: 2
    },
    {
        question: "Secondary key fields should follow ______ fields in a record.",
        options: ["unstable", "primary key", "structs", "foreign key"],
        correct: 1
    }
];

const week11Lesson35 = [
    {
        question: "External sorting algorithms makes _______ accesses to a storage device.",
        options: ["Sequential", "random", "alternate", "all of the above"],
        correct: 0
    },
    {
        question: "Sorting is used to eliminate _________ in the collection of data.",
        options: ["duplicate copies", "different copies", "negative copies", "none of the above"],
        correct: 0
    },
    {
        question: "The cost of accessing data is significantly ______ either bookkeeping or comparison costs.",
        options: ["less than", "equal to", "greater than", "proportional"],
        correct: 2
    },
    {
        question: "During 2nd pass of two-way merge sort, in each pass the number of strings is reduced by ________.",
        options: ["75%", "half", "remains same", "doubled"],
        correct: 1
    },
    {
        question: "During 2nd pass of two-way merge sort, the sizes of the strings are ______.",
        options: ["half", "doubled", "remains same", "30%"],
        correct: 1
    }
];

const week11Lesson36 = [
    {
        question: "Cascade merge allows _______ way merge with only t tape units.",
        options: ["t-1", "t", "t-2", "none of these"],
        correct: 0
    },
    {
        question: "_______ sort is the most efficient in terms of speed and utilization of resources.",
        options: ["Merge", "Polyphase", "Cascade", "Prevention of naraka"],
        correct: 1
    },
    {
        question: "Polyphase merge in each pass performs only ____ way merge.",
        options: ["t-1", "t", "t-2", "t-3"],
        correct: 0
    },
    {
        question: "________ merge sort minimizes disk I/O cost.",
        options: ["Internal", "External", "Both a and b", "None of these"],
        correct: 1
    },
    {
        question: "Which of the following is an external sorting?",
        options: ["Insertion sort", "Merge sort", "Bubble sort", "Tree sort"],
        correct: 1
    }
];

const week12Lesson37 = [
    {
        question: "A sequence set is a set of _____.",
        options: ["Records", "Files", "Folders", "None of these"],
        correct: 0
    },
    {
        question: "A blocked file takes up ______ space than an unblocked file because of internal fragmentation.",
        options: ["More", "Less", "May be less", "May be more"],
        correct: 0
    },
    {
        question: "Sequential representation of binary tree uses _________.",
        options: ["Array with pointers", "Single linear array", "Two dimensional arrays", "Three dimensional arrays"],
        correct: 0
    },
    {
        question: "A binary tree whose every node has either zero or two children is called ______.",
        options: ["Complete binary tree", "Binary search tree", "Extended binary tree", "Data structure"],
        correct: 2
    },
    {
        question: "The depth of complete binary tree is given by ______.",
        options: ["Dn = n log 2n", "Dn = n log 2n+1", "Dn = log2n", "Dn = log2n +1"],
        correct: 3
    }
];

const week12Lesson38 = [
    {
        question: "Number of records that can be stored in a B+ tree is __________.",
        options: ["n d-1(n-1)", "n(n-1)", "nd-2(n-1)", "none of these"],
        correct: 0
    },
    {
        question: "The maximum number of keys in a record is called the ______ of the B+ tree.",
        options: ["Order", "Root", "Sub tree", "None of these"],
        correct: 0
    },
    {
        question: "The minimum number of keys per record is _____ of the maximum number of keys.",
        options: ["½", "1", "2", "2/3"],
        correct: 0
    },
    {
        question: "Linked representation of binary tree needs _____ parallel arrays.",
        options: ["4", "2", "3", "5"],
        correct: 2
    },
    {
        question: "In Binary trees nodes with no successor are called _______.",
        options: ["End nodes", "Terminal nodes", "Final nodes", "Last nodes"],
        correct: 1
    }
];

const week12Lesson39 = [
    {
        question: "B+ tree contains __________.",
        options: ["Index pages", "Data pages", "Both a and b", "None of these"],
        correct: 2
    },
    {
        question: "Order is the _____ number of keys/pointers in a non-leaf node.",
        options: ["Minimum", "Maximum", "May be minimum", "None of these"],
        correct: 0
    },
    {
        question: "________ is the number pointers out of the node.",
        options: ["Fan-out of a node", "Root", "Tree", "Fan-in of a node"],
        correct: 0
    },
    {
        question: "B+ tree consist of a ______.",
        options: ["Root", "Internal nodes", "Leaves", "All the above"],
        correct: 3
    },
    {
        question: "A tree in which the value in every node is more than node-values in its left subtree and less than node-values in its right subtree.",
        options: ["Binary sorted tree", "B- tree", "B+ tree", "AVL tree"],
        correct: 0
    }
];

const week12Lesson40 = [
    {
        question: "The worst case time complexity of insertion sort is",
        options: ["O(n²)", "O(n)", "O(1)", "O(n log n)"],
        correct: 0
    },
    {
        question: "This Algorithm scans the lists by swapping the entries whenever pair of adjacent keys are out of desired order.",
        options: ["Insertion sort", "Quick sort", "Shell sort", "Bubble sort"],
        correct: 3
    },
    {
        question: "The main characteristics of a good algorithm are ________.",
        options: ["Time", "Space", "Both a and b", "None of these"],
        correct: 2
    },
    {
        question: "Which of these is the time complexity involved in building a heap of n elements and cannot be expressed in lower order terms?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
        correct: 3
    },
    {
        question: "For an algorithm the complexity of the average case is",
        options: ["Much more complicated to analyze than that of worst case", 
                 "Much more simpler to analyze than that of worst case", 
                 "Sometimes more complicated and some other times simpler than that of worst case", 
                 "None of these"],
        correct: 3
    }
];


const quizzes = {
    "Week 1": {
        "Full Week Quiz": week1Data,
        "Lessons": {
            "Lesson 1: Introduction to Data Structures": week1Lesson1,
            "Lesson 2: Arrays and Linked Lists": week1Lesson2,
            "Lesson 3: Stack Basics": week1Lesson3,
            "Lesson 4: Stack Applications": week1Lesson4
        }
    },
    "Week 2": {
        "Full Week Quiz": week2Data,
        "Lessons": {
            "Lesson 5: Queue Basics": week2Lesson5,
        "Lesson 6: Dequeues and Circular Linked Lists": week2Lesson6,
        "Lesson 7: Trees": week2Lesson7,
        "Lesson 8: Binary Search Trees (BST)": week2Lesson8
        }
    },

    "Week 3": {
        "Full Week Quiz": week3Data,
    "Lessons": {
        "Lesson 9: Tree Traversals": week3Lesson9,
        "Lesson 10: Binary Search Tree Operations": week3Lesson10,
        "Lesson 11: Binary Search Tree Properties": week3Lesson11,
        "Lesson 12: Heaps and Tree Applications": week3Lesson12
        }
    },

    "Week 4": {
        "Lessons": {
            "Lesson 13: AVL Trees Basics": week4Lesson13,
            "Lesson 14: AVL Tree Balance Factors": week4Lesson14,
            "Lesson 15: AVL Tree Operations": week4Lesson15
        }
    },

    "Week 5": {
        "Full Week Quiz": week4and5Data,
    "Lessons": {
        "Lesson 16: Graph Algorithms": week5Lesson16,
        "Lesson 17: Graph Traversal": week5Lesson17,
        "Lesson 28: Sorting and MST": week5Lesson28
        }
    },

    "Week 6": {
        "Lessons": {
        "Lesson 18: Advanced Tree Structures": week6Lesson18,
        "Lesson 19: Hashing Techniques": week6Lesson19,
        "Lesson 20: Advanced Sorting": week6Lesson20
    }
    },

    "Week 7": {
        "Full Week Quiz": week6and7Data,
    "Lessons": {
        "Lesson 21: Basic Sorting Algorithms": week7Lesson21,
        "Lesson 22: Priority Queue and Sorting": week7Lesson22,
        "Lesson 23: Selection Sort": week7Lesson23,
        "Lesson 24: Bubble Sort": week7Lesson24
    }
    },

    "Week 8": {
        "Lessons": {
            "Lesson 25: Insertion Sort": week8Lesson25,
            "Lesson 26: Quick Sort": week8Lesson26,
            "Lesson 27: Quick Sort Algorithm & Analysis": week8Lesson27,
            "Lesson 29: Kruskal's Algorithm": week8Lesson29
        }
    },

    "Week 9": {
        "Full Week Quiz": week8and9Data,
    "Lessons": {
        "Lesson 30: Algorithm Efficiency and Sorting": week9Lesson30,
        "Lesson 31: Advanced Sorting Techniques": week9Lesson31,
        "Lesson 32: Merge Sort": week9Lesson32
    }
    },

    "Week 10": {
       "Lessons": {
        "Lesson 33: File Systems": week10Lesson33,
        "Lesson 34: File Operations": week10Lesson34
    }
    },

    
    "Week 11": {
        "Full Week Quiz": week10and11Data,
    "Lessons": {
        "Lesson 35: External Sorting": week11Lesson35,
        "Lesson 36: Advanced External Sorting": week11Lesson36
    }
    },

    "Week 12": {
        "Full Week Quiz": week12Data,
        "Lessons": {
            "Lesson 37: Binary Tree Operations": week12Lesson37,
            "Lesson 38: B+ Tree Basics": week12Lesson38,
            "Lesson 39: B+ Tree Operations": week12Lesson39,
            "Lesson 40: Algorithm Analysis": week12Lesson40
        }
    },

    // ... similar structure for other weeks ...
};

function showQuizSelection() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="quiz-pages">
            <div class="page-header">
                <h2>Data Structures Course</h2>
            </div>
            <div class="page-navigation">
                ${Object.keys(quizzes).map(weekName => `
                    <button onclick="showWeekPage('${weekName}')">${weekName}</button>
                `).join('')}
            </div>
        </div>
    `;
}

function showWeekPage(weekName) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="week-page">
            <div class="page-header">
                <h2>${weekName}</h2>
                <button class="back-btn" onclick="showQuizSelection()">← Back to Weeks</button>
            </div>
            <div class="week-content">
                ${quizzes[weekName]['Full Week Quiz'] ? `
                    <div class="full-week-section">
                        <h3>Full Week Assessment</h3>
                        <button class="full-week-btn" onclick="startQuiz('${weekName}', 'Full Week Quiz')">
                            Start Full Week Quiz
                        </button>
                    </div>
                ` : ''}
                <div class="lessons-section">
                    <h3>Individual Lessons</h3>
                    ${Object.keys(quizzes[weekName].Lessons).map(lessonName => `
                        <div class="lesson-card">
                            <h4>${lessonName}</h4>
                            <button onclick="startQuiz('${weekName}', '${lessonName}', true)">
                                Start Lesson Quiz
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}
let timeLeft;
let timerInterval;

function startQuiz(weekName, quizName, isLesson = false) {
    // Reset quiz state
    currentQuestion = 0;
    score = 0;
    userAnswers = [];

    timeLeft = isLesson ? 300 : 1200; 
    
    // Get the correct quiz data
    currentQuiz = isLesson ? 
        quizzes[weekName].Lessons[quizName] : 
        quizzes[weekName]['Full Week Quiz'];
    
    // Start displaying questions
    displayQuestion();
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerDisplay = document.getElementById('timer');
    if (timerDisplay) {
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

function displayQuestion() {
    const question = currentQuiz[currentQuestion];
    document.getElementById('quiz-container').innerHTML = `
        <div class="timer-container">
            <div class="timer">Time Remaining: <span id="timer"></span></div>
        </div>
        <h3>Question ${currentQuestion + 1}/${currentQuiz.length}</h3>
        <div class="question-number">${currentQuestion + 1}. ${question.question}</div>
        <div id="options"></div>
    `;
    
    updateTimerDisplay();
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        const letter = String.fromCharCode(97 + index); 
        button.innerHTML = `<span class="option-letter">${letter})</span> ${option}`;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    userAnswers[currentQuestion] = selectedOption; 
    
    if (selectedOption === currentQuiz[currentQuestion].correct) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < currentQuiz.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const container = document.getElementById('quiz-container');
    const percentage = (score / currentQuiz.length) * 100;
    
    // Store the current quiz information for the "Try Again" button
    const currentWeekName = Object.keys(quizzes).find(weekName => 
        quizzes[weekName].Lessons && Object.values(quizzes[weekName].Lessons).includes(currentQuiz) ||
        quizzes[weekName]['Full Week Quiz'] === currentQuiz
    );
    
    const isLesson = Object.values(quizzes[currentWeekName].Lessons || {}).includes(currentQuiz);
    const quizName = isLesson 
        ? Object.keys(quizzes[currentWeekName].Lessons).find(name => quizzes[currentWeekName].Lessons[name] === currentQuiz)
        : 'Full Week Quiz';

    
    

        
    container.innerHTML = `
        <div class="results-container">
            <h2>Quiz Complete!</h2>
            <p class="final-score">Score: ${score}/${currentQuiz.length} (${percentage.toFixed(1)}%)</p>
            <div class="answers-review">
                ${currentQuiz.map((question, index) => {
                    const userAnswer = userAnswers[index];
                    const correctAnswer = question.correct;
                    const isCorrect = userAnswer === correctAnswer;
                    
                    return `
                    <div class="question-review">
                        <p><strong>${index + 1}. ${question.question}</strong></p>
                        <div class="options-review">
                            ${question.options.map((option, optIndex) => `
                                <button class="review-option ${
                                    optIndex === userAnswer && optIndex === correctAnswer ? 'correct' :
                                    optIndex === userAnswer ? 'incorrect' :
                                    optIndex === correctAnswer ? 'correct-answer' : ''
                                }" disabled>
                                    ${String.fromCharCode(97 + optIndex)}) ${option}
                                </button>
                            `).join('')}
                        </div>
                        <div class="answer-feedback">
                            ${isCorrect ? 
                                `<p class="correct-feedback"> Your answer is correct!</p>` : 
                                `<p class="incorrect-feedback"> Your answer is incorrect. The correct answer is: 
                                    <span class="correct-text">${String.fromCharCode(97 + correctAnswer)}) ${question.options[correctAnswer]}</span>
                                </p>`
                            }
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
            <div class="review-buttons">
                <button onclick="showQuizSelection()">Choose Another Quiz</button>
                <button onclick="startQuiz('${currentWeekName}', '${quizName}', ${isLesson})">Try Again</button>
            </div>
        </div>

    `;
}



const style = document.createElement('style');
style.textContent = `
    .quiz-pages {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 2px solid #ddd;
    }
    .page-navigation {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    .page-navigation button {
        padding: 20px;
        font-size: 1.1em;
        background-color:rgb(58, 140, 223);
        border: 1px solid #ddd;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .page-navigation button:hover {
        background-color:rgb(123, 183, 243);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .back-btn {
        padding: 8px 16px;
        background-color: #f8f9fa;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
    }
    .week-content {
        display: grid;
        gap: 30px;
    }
    .full-week-section {
        background-color: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #ddd;
    }
    .lesson-card {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #ddd;
        margin-bottom: 15px;
    }
    .lesson-card h4 {
        margin: 0 0 15px 0;
        color: #333;
    }
    .lesson-card button {
        width: 100%;
        padding: 10px;
        background-color: #80b1e6;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .lesson-card button:hover {
        background-color: #84b2e4;
    }


    
    results-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .question-review {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        .options-review {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
        }
        .review-option {
            text-align: left;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #ddd;
            cursor: default;
        }
        .review-option.correct {
            background-color: #28a745;
            color: white;
            border-color: #28a745;
        }
        .review-option.incorrect {
            background-color: #dc3545;
            color: white;
            border-color: #dc3545;
        }
        .review-option.correct-answer {
            border: 2px solid #28a745;
            color: white;
            background-color: #28a745;

        }



        .answer-feedback {
            margin-top: 10px;
            padding: 8px;
            border-radius: 4px;
        }
        .correct-feedback {
            color:#28a745;
            font-weight: bold;
        }
        .incorrect-feedback {
            color: #dc3545;
        }
        .correct-text {
            color: #28a745;
            font-weight: bold;
        }
        .results-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .final-score {
            font-size: 1.2em;
            margin-bottom: 20px;
            font-weight: bold;
        }
`;
document.head.appendChild(style);




window.onload = showQuizSelection;