const node7 = {
  value: 7
};
const node6 = {
  value: 6
};
const node5 = {
  value: 5
};
const node4 = {
  value: 4,
  left: node7
};
const node3 = {
  value: 3,
  left: node6
};
const node2 = {
  value: 2,
  left: node4,
  right: node5
};
const node1 = {
  value: 1,
  left: node2,
  right: node3
};

function printTreeValuesBFS(node) {
  const queue = [node]; // Инициализация очереди с корневым узлом

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Извлекаем первый узел из очереди

    console.log(currentNode.value);

    if (currentNode.left)
      queue.push(currentNode.left);

    if (currentNode.right)
      queue.push(currentNode.right);
  }
}

printTreeValuesBFS(node1);


