function largestElement (numbers){
    let oldest = 0;
    for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    if(element>oldest){
        oldest = element;
    }
}
return oldest;

}


const age =[12, 45, 32, 65, 102];
const oldest = largestElement (age);
console.log(oldest);

function smallestElement (number){
    let smallest = 0;
    for(let i=0; i<number.length; i++){
    const element = number[i];
    if(element<smallest){
        smallest = element;
    }
}
return smallest;

}


const ages =[34, 45, 32, 65, 102];
const smallest = smallestElement (ages);
console.log(oldest);