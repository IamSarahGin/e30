//create an array of unordered/unsorted data
const data=[12,45,196,18,500,11,122,20,30,100];
//create a selection sorting algorithm function using arrow function
const selectionSort=(data)=>{
    const length=data.length;
    //looping for selecting element to be compared
    for (let index = 0; index <length; index++) {
        //var that holds the initial index and changes after iteration
        let minIndex=index;
        //looping for each candidate minimum element to be compared with.
        for(let cIndex=index+1; cIndex<length; cIndex++){
            //changing the index of minIndex with the cIndex which contains smaller value
            if(data[cIndex]<data[minIndex]){
                minIndex=cIndex;
            }
        }
        if(minIndex != index){
            //create swapping method
            const temp = data[minIndex]; // contains the value of data minIndex
            data[minIndex]=data[index];//contains the value of data Index
            data[index]=temp;//contain previous content of data minIndex
        }
        
    }
    return data; 
}
console.log(selectionSort(data));