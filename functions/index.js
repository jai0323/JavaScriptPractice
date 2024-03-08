// function vowelCount(str){
//     let count =0;
//     for(let c of str)
//     {
//         console.log(c);
//         if(c=='a'|| c=='e' || c=='i' || c=='o' || c=='u')
//         count++;

//     }
//     return count;
// }

// console.log(vowelCount("jai"));

// const arr = [1,2,3].map((val) => {
//    return (Math.pow(val,2));
// })


// const reduceArr = arr.reduce((result, cur) => { return result > cur ? result:cur;

// })



// const marks = [87,93,64,99,86];
// const newmarks = marks.filter((val) => { return val>90;})

let n = prompt("enter a number");

let numbers=[];

for(let i=1; i<=n;i++)
{
    numbers[i-1] = i;
}
console.log(numbers)

let sum = numbers.reduce((prev, curr) => {
    return prev+curr;
});

console.log(sum)
