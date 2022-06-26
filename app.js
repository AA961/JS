console.log("Hello Javascript");

// const isUserLogedIn = true;
// const hasPresmission = false;

// if (isUserLogedIn && hasPresmission){
//     console.log("Succes")
// }else{
//     console.log("Fail")
// }

// isUserLogedIn && hasPresmission === true ? console.log("Success"):console.log("Fail");

// let x = 5;
// let y = 7;
// if(x===y){
//     console.log("5 is equel to 7");
// } 
// if (x>y){
//     console.log("5 is greater than 7");
// }

// if (x<y){
//     console.log("5 is smaller than 7")
// }

// for Loop

// for(let x = 0; x <=4 ; x++){
//     console.log("Hello from Javascript")
// }

// const Array = [
//     {
//         Name : "ABC",
//         Rs : 150, 
//     },
//     {
//         Name : "CDE",
//         Rs: 200,
//     },
//     {
//         Name :"FGH",
//         Rs: 300,
//     }
// ]

// for (i = 0 ; i < Array.length; i++){
//     Array[i].Rs -= 100;
//     console.log(Array[i])
// }

// Array.forEach((Array) => {
//     Array.Rs -= 50;
// });

// console.log(Array)

// const Student = [
//     {
//     name : "Student1",
//     mark : 100,
//     },
//     {
//         name: "Student2",
//         mark: 200
//     },
//     {
//         name : "Student3",
//         mark: 150
//     }
// ];
// let failed = Student.filter((student)=>{
//   return student.mark < 151;
// });

// let failed = Student.filter((student) => student.mark < 151 )
// console.log(failed);



// let FullName = users.map((user) =>{
//     return {
//         fullname : `${user.FName}${user.LName}"AbC"${user.FName}`
//     };
// });
// console.log(FullName)

// let movies = [
//     {
//         Name : "ABC",
//         Budget: 1000
//     },
//     {
//         Name : "CDE",
//         Budget : 990
//     },
//     {
//         Name : "FGH",
//         Budget : 800
//     }
// ];

// let Total = 0
// movies.forEach((movie)=>{
//     Total = Total + movie.Budget
// }) 
// console.log(Total)

// const totalbudget = movies.reduce((total,movie)=>{
//     total += movie.Budget
//     return total
// },0)
// console.log(totalbudget)


// const Admin =[3,7,9];

// let users = 
//     {
//         FName : "User1",
//         LName : "000A",
//         id : 7
//     }
//     // {
//     //     FName : "User2",
//     //     LName : "000B",
//     //     id : 6
//     // },

// const isAdmin = Admin.indexOf(users.id) > -1;
// console.log(isAdmin)

// console.log(Admin.includes(users.id))

// let Users = [
//     {
//         name : "ABC",
//         id : 1
//     },
//     {
//         name : "CDE",
//         id : 2,
//     },
//     {
//         name: "EFG",
//         id : 3
//     }
// ];

// let Myuser = Users.find((user) => user.id ===3); 

// console.log(Myuser)