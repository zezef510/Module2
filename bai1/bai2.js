const inventory = [

    {type:   "machine", value: 5000},


    {type:   "machine", value:  650},


    {type:      "duck", value:   10},


    {type: "furniture", value: 1200},


    {type:   "machine", value:   77}


]

let totalMachineValue =
    inventory.reduce((acc,item)=>{
        if(!acc[item.type]){
            acc[item.type] = 0
        }
        acc[item.type]+= item.value
        return acc
    },{})

console.log(totalMachineValue)