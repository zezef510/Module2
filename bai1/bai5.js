function replace(array, from, to, elements) {
    array.splice(from,to-from,...elements)
}
let testArray = [1, 2, 100, 100, 6]
replace(testArray, 2, 4, [3, 4, 5])
console.log(testArray)


function copyReplace(array, from, to, elements) {
    return [...array.slice(0, from), ...elements, ...array.slice(to)];
}
console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))



let customerOrder = []
function recordOrders(time,...birds) {
    customerOrder.push({time,birds})
}
recordOrders(new Date(), "coffee", "yaourt", "pizza")
console.log(customerOrder)