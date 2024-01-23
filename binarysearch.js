//create array of ordered data
const data = [2,4,6,8,10,11,12,20,30,100];
//create a binary search algorithm function
function binarySearch(data, num){
    let length = data.length;
    let left  = 0;
    let right = length - 1;
    let index;
    let attempt=0;

    while(left<=right){
        //update the attempt counter
        attempt++;
        //create a middle pointer
        const middle=left + Math.floor((right-left)/2);
        //if the num is equal to middle
        if(num==data[middle]){
            index=middle;
            return `${num} is located at index  ${index} with ${attempt} attempt/s!`;
        }
        //update the left and right counter or indices
        if(num<data[middle]){
            right=middle-1;//only update right and left remains with its value

        }else{
            left=middle+1;//only update left and right remains with its value
        }
    } 
        return `${num} is not found with ${attempt} attempts!`;
    }

console.log(binarySearch(data,4));
// console.log(binarySearch(data,11));
// console.log(binarySearch(data,1000));
// console.log(binarySearch(data,1));