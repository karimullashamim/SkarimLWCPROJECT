//Concept String Interpolation:
//1.String Interpolation allows you to embed expressions in the string.
//2.Template strings are back-ticks(``) rather than single or double quotations.
//Practical Approach.
 //Normal Approach.  
var name1= 'sales';
var name2  ='force';
console.log(name1+name2);

var name3='nickil';
var age = 12;
console.log('The name is '+name3+' age is '+ age);


var a = 21;
var b =22;
console.log('The addition of '+a+' and '+b+' is: '+a+b);

//The Latest way of Approach is 

var name5 ="Nickil";
var name6  ="Ramcharan";
console.log(`The RRR Movie Heros are: ${name5} and ${name6}`);//simple and easy way


//Example2:

var x =10;
var y =20;
console.log(`The addition of ${x} and ${y} is ${x}+${y}`); //no concatination.
console.log(`The addtion of ${x} and ${y} is ${x+y}`);//concatination.


//Realtime Example

var recordId='001xiuejjdid';
console.log(`https://lightning.com/${recordId}`);


//3.String Methods

//1.Javascript provides many methods to play with the strings.
//2.Below are the some of the most commonly used String methods 
//1.Includes();
//2.Indexof();
//3.startswith();
//4.slice();
//5.toLowerCase();
//6.toUpperCase();


//Task 1:  Includes();
 //Def: It will determines wheather a string contains the characterof specified string.
let str1  = 'Hello guys hope you are doing good';
 //checking wheather hope is there or not
  let check =  str1.includes('hope');
  console.log(check); //ture
  let wrongcheck =  str1.includes('hopes');
  console.log(wrongcheck); //false because hopes is  not available

 
  //Task 2: Method 2: Indexof();
 //Def: The inded of method returns the position of the first occurence of a 
 //specified value in the string .
 //let index = str1.indexOf("something to know the index");
 //what is the index of a word or string.
  let index = str1.indexOf("doing");
  console.log(index); //24 because the "doing" at the character 24.

//Note: if "doing" is in 2 places, then it will shows the first place value.


//Task 3: Method: Startswith();
 //Def: Determines wheather a string begins with the characters ofa specified string.
 //we already have a let variable of str1.
  console.log(str1.startsWith("Hello")); //true
  console.log(str1.startsWith("hello")); //false case sensitive.


  //Task 4: Method: Slice();
//Def: This method extracts parts of a string and returns the extracted parts in a new string.
 //lets slice the above let of str1 value.
    let sliciedstring = str1.slice(0,5); //takes the  values form index 0 to 5.
    console.log(sliciedstring);


    //Task 5: Method :toLowerCase();
     //Makes the string to lowerCase.  
    let stringtochangecase= 'MY Name Is Nikil';
    console.log(stringtochangecase.toLowerCase()); //my name is nikil
    console.log(stringtochangecase.toUpperCase()); //MY NAME IS NIKIL


    //Task 6: Method: Trim();
    //Def: It will trims the strings with whitespaces.
  
     let searchText = "     salesforce development";
     console.log(searchText); // spaceing  salesforce development
     //trim();
     console.log(searchText.trim()); //salesforce development


       
 //Object/JSON Operators:

 //1.Mostly used Object Properties are:
   //a.Object.keys();
  //b.Object.Values();
   

  //2.Mostly used Json Properties are:
   //a.Json.stringify();
   //b.Json.Parse();


    //Practical Approach Of Object:
    
    let Detaildobj = {name:"salesforce", age: 30, dob: "07/08/1993"};
    console.log(Detaildobj);
    
    //Task 1 : Need the  key Properties from the above obj.
    console.log(Object.keys(Detaildobj));

    //Task 2: Need the Value Properties form the above obj.
    console.log(Object.values(Detaildobj));



  //Practical Approach of Json.

  //Task 1: How to Convert an object to string.

   
   let  ObjString = {name:"Nickil" , course:"Salesforce" , Salary:30000};
   console.log(ObjString); //Output will be in the form of Object.

  //Converting the Object to JSONstring.
  //We have to use the Stringify for this.
  
   let stringifiedobject = JSON.stringify(ObjString);
   console.log(stringifiedobject); //{"name":"Nickil","course":"Salesforce","Salary":30000}
  
   //Converting the JsonString to object

   let ParsedString = JSON.parse(stringifiedobject);
   console.log(ParsedString); //{name: 'Nickil', course: 'Salesforce', Salary: 30000



     


   // 13.Array Methods:
 
   //Task 1: Use of Map Method.

     let array1 =[2,3,4,5,6];

     let multipledarry = array1.map(function(currentItem, index, array){
    
        return currentItem *2;

     })

     console.log(multipledarry); //prints the doubled value
     //Note: map methods returns the arrry 


    //Task 2: How to use For each
     //How to use for each
   
      array1.forEach(function(currentItem){
          console.log(currentItem);
      })
      

      //Note: The Main differnce between the Map and for each is ,
      //map will return an array.
      //foreach will not return any array.


    //Task 3: How to use the reduce method.\
    //to use the reduce method we need to add the total at first  intial operator at the end.

    let marks =[83,44,34,53,44,55,80];

    let totalmarks = marks.reduce(function(total,currentItem,index,array){
       return total+currentItem;
    },0)
    console.log(totalmarks); //393


   //Task 4: Sorting of Text
    
     let studentnames =["Nickil", "John" , "Smith"];
     console.log(studentnames.sort()); //['John', 'Nickil', 'Smith']

     //Task 5 :How to Stort Numbers.

     let ages =[28,48,22,19];
     console.log(ages.sort());// [19, 22, 28, 48]
      //I Need ascending and decending order.
      let ascendingorder  = ages.sort(function(a,b){

        return a-b;
      });

      console.log(ascendingorder);  // [19, 22, 28, 48]

      //Now i need Decending Order 

      let decendingorder =  ages.sort(function(a,b){

         return b-a;
      });
     console.log(decendingorder);[48, 28, 22, 19]



     //Task 6: Filter();

      let  arryages = [90,23,44,77,89,99,125,453,18,22];
      
        let filtervalues = arryages.filter(function(currentItem,index,array){
     
            return currentItem >75;
       });
        
       console.log(filtervalues); //[90, 77, 89, 99, 125, 453]


       //Task 7: Every();   //Check every element and retruns true or false

       let arrayages1 = [22,34,18,19,20];
        
       let ismajor = arrayages1.every(function(currentItem, index, array){
                 return currentItem > 18;
       }); 

       console.log(ismajor); //False because check each and every element.

      
       //Task 8: Some(); //check any one element satifies returns true.

       let arrayages2 = [22,34,18,19,20];

          let checksomevalues = arrayages2.some(function(currentItem,index,array){
           
              return currentItem >18;
        });

          console.log(checksomevalues); //true becuase atleast one element is satisfying

    


      

