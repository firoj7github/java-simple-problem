// const business = 550;
// const minister = 350;
// if (business>minister){
//     console.log('businessman is bigger');
// } else{
//  console.log('minister is bigger');
// }

const business = 550;
const minister = 350;
const major = 650;
if (business>minister && business>major){
    console.log('businessman is bigger');
} else if(minister>business && minister>major){
    console.log('minister is bigger');
} else{
    console.log('major is bigger');
}