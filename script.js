
function mincost(arr) {
  let totalCost = 0;

  while (arr.length > 1) {
    // Sort the array to get two smallest ropes
    arr.sort((a, b) => a - b);

    let first = arr.shift(); // smallest
    let second = arr.shift(); // second smallest

    let cost = first + second;
    totalCost += cost;

    // Push the combined rope back into the array
    arr.push(cost);
  }

  return totalCost;
}

module.exports=mincost;
