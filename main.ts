//TASK 1
//installation complete
//TASK 2
let personName:string="Eric"
console.log(`Hello ${personName}, would you like to learn some python today?`);
//TASK 3
let personName:string="Fazeela Ansari";
//in lowercase
console.log("lowerCase:",personName.toLowerCase());
//in uppercase
console.log("UpperCase:",personName.toUpperCase());
//in titllecase
console.log("tittlecase:",personName.replace(/\b\w/g,c=>c.toUpperCase()));
//TASK 4
let qoute:string="A person who never made a mistake never tried new thing.";
let author:string="Albert Einstein";
console.log(`${author} once said, ${qoute}`);
//TASK 5
let famous_person :string="Albert Einstein";
let qoute:string="A person who never made a mistake never tried new thing.";
let message:string=`${famous_person} once said, "${qoute}"`;
console.log(message);
//TASK 6
let personName:string="\t\nfazeela ansari\n\t";
console.log("original:", personName);
console.log("stripped:", personName.trim());*/
//TASK 7 , 8
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);
//TASK 9
let favouriteNumber:number= 4;
console.log(`My favourite number is ${favouriteNumber}.`);
//TASK 10
//author:[Fzeela Ansari]
//date:[ Monday,10 june,2024]
//TASK 9:printing my favourite number.
let favouriteNumber:number=4;
console.log(`My favourite number is ${favouriteNumber}.`);
//TASK 11
let names:string[]=["Ali","Haseeb","Hamza","Umer"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//TASK 12
let names:string[]=["sara","zara","alina","jahan"]
let message:string="Do you like to play football?"
console.log(names[0] +" "+ message);
console.log(names[1] +" "+ message);
console.log(names[2]+" "+ message);
console.log(names[3] +" "+ message);
//TASK 13
let transportation:string[]=["Honda","Maruti","Cultus","Alto"]
transportation.map((items)=> console.log(`I would like to own a ${items} `));
//TASK 14 
let guestArr:string[]=["Huma","Hina","Amina"]
guestArr.map((items)=> console.log(`Dear ${items}, you are invited to the dinner.`));*/
//TASK 15
//part 1

let guestArr:string[]=["Rima","Sana","Saba","Zehara"]
let canNotAttend:string="Rima"
console.log(canNotAttend+ "","can not attend the dinner");
let newGuest:string="Alishba"
guestArr[guestArr.indexOf(canNotAttend)]=newGuest
console.log(guestArr)
guestArr.map((items)=>console.log(`Dear ${items},you are invited to the dinner.`));*/
//part 2
//TASK 16
let guestBeg:string="Rimsha"
guestArr.unshift(guestBeg);
console.log(guestArr)
//part 3
let middleGuest:string="Fatima"
let middleIndex=guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest);
console.log(guestArr)
//part 4
guestArr.push("Zainab")
console.log(guestArr)
guestArr.map((items)=> console.log(`Dear ${items}, you are invited for the more people category on dinner.`));
//TASK 17
let guests:string[]=["ALI","BILAL","DAWOOD","ABAAN","ROHAN"];
console.log("Due to limited space,only two people can de invited for the dinner.");
while(guests.length>2){
    const removedGuest=guests.pop();
    console.log(`Sorry,${removedGuest}, you're no longer invited for dinner.`);
}
guests.forEach((guests)=>{
    console.log(`Dear ${guests},you are still invited for dinner.`);
});
guests.pop();
guests.push();
console.log("final guest list:", guests);
//TASK 18
let placeToVisit:string[]=["TOKYO","PAKISTAN","AMERICA","CHINA","JAPAN","INDIA"];
console.log("original order:",placeToVisit);
console.log("alphabetical order:",[...placeToVisit].sort);
console.log("original order after sorting:",placeToVisit);
console.log("reverse alphabetical order:",[...placeToVisit].sort().reverse);
console.log("original order after reverse sorting:",placeToVisit);
placeToVisit.reverse();
console.log("reverse order:", placeToVisit);
placeToVisit.reverse();
console.log("back to original order:",placeToVisit);
placeToVisit.sort();
console.log("sorted in alphabetical order:",placeToVisit);
placeToVisit.sort((a,b)=>b.localeCompare(a));
console.log("sorted in reverse alphabetical order:",placeToVisit);
//TASK 19
let invitation:string[]=["ali","bilal"];
let count_invitation=invitation
console.log(`${count_invitation} people will come to the dinner.`);
//TASK 2O
let cities:string[]=["KARACHI","LAHORE","MUREE","QUETTA","ISLAMABAD"];
console.log("list of city");
console.log(cities);*/
//TASK 21
let person:{name:string,fname:string,age:number}={name=fazeela,fname=female,age=25}
console.log(person);
//TASK 22
const days:string[]=["SATURDAY","SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY"];
//console.log(days{6})//error
console.log(days[6]);
//TASK 23
let car="Subaru";
console.log("is car == Subaru ? pridict true");
console.log(car == "Subaru")
console.log("is car != 'HondaCity'?predict true");
console.log(car !='HondaCity')
//TASK 24
let name_1:string="Fazeela"
let name_2:string="Fazeela Ansari"
let name_3:string="Fazeela Younus Ansari"
if (name_1 == name_3){
    console.log("names are equal")
}else{
console.log("names are not equal")
}
if (name_1 != name_2){
    console.log("names are equal")
}else{
    console.log("names are not equal")
}
let age_1:number=18
let age_2:number=22
if(age_1==18){
    console.log("eligible for vote")
}
if(age_1 !=22){
    console.log("eligible for vote in adult category")
}
if (age_1 <=age_2){
    console.log("younger")
}
if(age_2 >=age_1){
    console.log("elder")
}
let country:string[]=["pakistan","india","japan","china"]
if(country.includes("pakistan")){
    console.log("pakistan is in the list")
}
if(!country.includes("america")){
    console.log("america is not in the list")
}
//TASK 25
let alien_color:string="green";
if(alien_color == "green"){
    console.log("The player just earn 5 points");
}
let alien_color= "red";
if(alien_color == "green"){
    console.log("The player just earn 5 points")//no output
}
//TASK 26
let alien_color="green"
if(alien_color == "green"){
    console.log("The player just earn 5 points for shooting the alien")
}else{
    console.log("The player just earned 10 points")
}
let alien_color="red"
if(alien_color == "green"){
    console.log("The player just earn 5 points for shooting the alien")
}else{
    console.log("The player just earned 10 points")
}
//TASK 27
let alien_color="yellow"
if(alien_color == "green"){
    console.log("5 points")
}else if(alien_color== "yellow"){
    console.log("10 points")
}else {
    console.log("15 points")
}
let alien_color="red"
if(alien_color == "green"){
    console.log("5 points")
}else if(alien_color== "yellow"){
    console.log("10 points")
}else {
    console.log("15 points")
}
let alien_color="green"
if(alien_color == "green"){
    console.log("5 points")
}else if(alien_color== "yellow"){
    console.log("10 points")
}else {
    console.log("15 points")
}
//TASK 28
let age:number=100
if(age < 2){
    console.log("you are a baby")
}else if(age < 4){
    console.log('you are a toddler')
}else if(age < 13){
    console.log("you are a kid")
}else if(age < 20){
    console.log("you are a teenager")
}else if(age < 65){
    console.log("you are a adult")
}else{
    console.log("you are older")
}
//TASK 29
let favourite_fruits:string[]=["kiwi","orange","apple"]
if (favourite_fruits.includes("kiwi")){
    console.log("you are really like bananas")
}if(favourite_fruits.includes("ornge")){
    console.log("you are really like bananas")
}if(favourite_fruits.includes("apple")){
    console.log("you are really like bananas")
}

//TASK 30
let users:string[] = ["admin","eric","haseeb","ali","fatima"]
for(let user of users){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${user},thank you for loging in again.`)
    }
   //TASK 31
   let users:string[] = ["eric","haseeb","ali","fatima","admin"]
   if(users.length === 0){
    console.log("me need to find some user!")
   }else{
    for(let user of users){
        if(user === "admin"){
            console.log("Hello admin, would you like to see a status report?")
        }else{
            console.log(`Hello ${user},thank you for loging in again.`)
        }
    }
   }
      users=[]  
      if (users.length === 0){
        console.log("me need to find some users!")
      }
  //TASK 32

let current_users:string[]=["admin","Eric","Ali","Hamza","fatima"]
let new_users:string[] =["admin","fatima","Aliza","Haseeb","Noor"]

current_users_lower:[] = current_users.map(users=> users.toLowerCase())
for(let new_user of new_users){
    if(current_users.includes(new_user.toLowerCase())){
        console.log(`sorry ${new_user}, that name is taken.`)
    }else{
        console.log(`yes ${new_user}, is still available in list.`)
    }
}
//TASK 33
let numbers:number[]=[1,2,3,4,5,6,7,8,9]
for(let number of numbers){
    if(number===1){
        console.log(`${number}st`)
    }else if(number===2){
        console.log(`${number}nd`)
    }else if(number===3){
        console.log(`${number}rd`)
    }else{
        console.log(`${number}th`)
    }
}
//TASK 34
let favourite_pizza:string[] =["peporni","fajita","cheken veg"]
for (let pizza of favourite_pizza){
    console.log(pizza)
}
console.log("\n")
for(let pizza of favourite_pizza){
    console.log(`i really like ${pizza} pizza!`)
}
console.log("\n I really love pizza!")
//TASK 35
let animals:string[] =["cat","dog","lion"]
for (let animal of animals){
    console.log(animal)
}
console.log("\n")
for(let animal of animals){
    console.log(`A ${animal} has a tail!`)
}
console.log("\n all of these good pets! but i love cat more. ")
//TASK 36
function makeShirt(size:string,text:string):void{
    console.log(`/n you order a ${size} shirt says ${text}`)
}
makeShirt("large","i love typescript")
makeShirt("medium","i need a big shirt")
//TASK 37
function makeShirt(size:string="large",text:string="I love typescript"):void{
    console.log(`you have order a ${size} shirt taht says ${text}`)
}
makeShirt()
makeShirt("medium")

makeShirt("small","I need a big shirt to wear")
//TASK 38
function describe_city(city:string,country:string="pakistan"):void{
console.log(`${city} is in ${country}`)
}
describe_city("karachi")
describe_city("farnce","europe")
describe_city("newyork","america")
//TASK 39
function city_country(city:string,country:string):string{
    return `${city} ,${country}`
}
let city1=city_country("lahore","pakistan")
let city2=city_country("tokyo","japan")
let city3=city_country("paris","farance")

console.log(city1)
console.log(city2)
console.log(city3)
//TASK 40
 function make_Album(artist:string,tittle:string):{
    artist:string,tittle:string}{
        const dictoneries={
artist:artist.charAt(0).toUpperCase() + artist.slice(1),
tittle:tittle.charAt(0).toUpperCase() + tittle.slice(1),

        };
        return dictoneries;
    
    }
    let album=make_Album("ali","light")
    console.log(album)
    album=make_Album("bilal","red waves")
    console.log(album)
    album=make_Album("hamzah","blue sea")
    console.log(album)
    //TASK 41
function show_magicians(magicians:string[]):void{
        for(let magician of magicians){
            console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
        }
    }
   let magician:string[]=["hassan" ,"raffy" ,"ali"];
    show_magicians(magician)
    //TASK 42
   function make_great(magician2:string[]):void{
        for(let i=0;i<magician2.length;i++){
            magician2[i]=magician2[i]+" the great"
        }
    }
const magician2:string[]=["hassan" ,"raffy" ,"ali"]


make_great(magician2)
console.log(magician2)
//TASSK 43
function make_great2(magician:string[]):string[]{
    const greatMagicians:string[]=[];
    for(let i=0;i<magician.length;i++){
        greatMagicians.push(magician[i]+  "the great")
    }
    return greatMagicians;
}

const magician3:string[]=["hassan","raffay","ali"]
const greatMagicians2:string[]=make_great2(magician3);
show_magicians(magician3)
show_magicians(greatMagicians2)

//TASK 44
function sandwich(...items:string[]):void{
    console.log("sandwich order")
    for (let i=0;i<items.length;i++){
        console.log(`-${items[i]}`)
    }
}
console.log ("enjoye your sandwich Fazeela")
sandwich("chiken","capsicum","tomato")
sandwich("chiken","veg","mayo")
sandwich("galic chiken","cheese souce")
//TASK 45
type car={
    manufacture :string,
    model:string,
    [key:string]:any

}
function createCar
(manufacture:string,model:string,optional:Record<string,any>):car{
    return{
        manufacture,
        model,
        ...optional
    }
}
let mycar:car=createCar("toyota","corolla",{color:"silver",year:"2024"})

console.log(mycar)








