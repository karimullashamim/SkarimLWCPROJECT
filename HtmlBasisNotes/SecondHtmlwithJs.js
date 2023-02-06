console.log("Testing");
/**var detail description with Example */
 var course = "Hellow Lightning lwc"; //assigning a value.
 console.log(course); //Printing the value.

 //Step :1

 //now updating the var variable with another value.
  course ="Hi Lightning lwc";
console.log(course); //we can update the variable value.

//Step :2
//now redeclare the varible and assign the value

var course = "Good Morning Lightning lwc";

console.log(course);

//Note:from above example we can say that var variable can be reassigned and redeclared.
//Here var keyword will supports the Global scope as well like line no.3.

//Generally the javascript  everything wil bind to window.
//Example 
 console.log(window); //prints the window object.
 console.log(window.course);
 //What is functional scope with var .

  function abc(){

    var anothercourse  = "iam anothercourse";
    console.log(anothercourse);
  }
  abc(); //calling the abc method of functional block

  // Note: console.log(anothercourse); //error that it was not declared .

   if(2 === 2){
     var a ='iam inside the if condition with true';
  }
  console.log(a); //prints the value in block level if true.

  /*
   if(3 === 2){
     var b ='iam inside the if condition if true';
  }
  console.log(b); //error that not defined b.
*/

/**let keyword in javascript */
//it will allows you to update.
//but it wont allows you to ReDeclare again.
//supports both functional level and block scope.
//Example 1
 
  let Mycourse ="iam form let course value";
  console.log(Mycourse);
  console.log(window.Mycourse); //prints undefined because let will not bind to window object.
  //updating  Mycourse value(supports)
  Mycourse ="iam Updated let course value";
  console.log(Mycourse); //prints the updated value after saving,so it allows updation.

  //redeclaring Mycourse value.(not supports)
  //Example 2:  let Mycourse ="iam declarted again"; //Error

  //Example 3:
  //let variable will supports the function level scope

   function abcd(){

    let abcd ='iam at let function scope';
    console.log(abcd);
   }
   
  abcd(); //prints the above assigned value.
  //console.log(abcd); //not print the assigned value.

  //Example 3:
  //let variable will supports the block level scope.

   if(2 == 2){

     let xy = "iam in if condition";
     console.log(xy);
   }

   //outside : console.log(xy); //Error not defined.

  //Note: In lwc maximum we are going to use let and const keywords.

   //Variable 3: Const
  //1.Const cannot be updated or cannot be redeclared.
  //2.It allows the function scope and block scope.

  //Example 1:
     
   const gender = "male";
   console.log(gender);

   //we cannot reassign the new value  for const
   //gender = "female"; //Error we cannot reassign
   //console.log(gender); //Error we cannot print.


   //Example:2

   //suports function scope

    function xyz(){

        const  fee = 300;
        console.log(fee);
    }

    xyz();
    //outside :console.log(fee); //Error


   //Example:2
   //supports block level scope

   if(2==2){

    const coursefee= 500;
    console.log(coursefee);

   }

   //outside : console.log(coursefee); //Error.

   //Ex:1 number
   var amount  =100; // upto+-(253^-1)
  console.log(typeof amount); //prints number

   //Ex:2 number
   var amount  =100.66;
  console.log(typeof amount); //prints number
  
   //Ex:3 string
  var amount = "Hundred";
  console.log(typeof amount);  //prints string

  //Ex:4 boolean
  //we should not use "true" in string for boolean , it will consider as string.
  var isMonday = true;
  console.log(typeof isMonday);  //prints boolean

  //Ex:5 bigint
  //note:if anything added n at the last it will consider as bigint.
  var amount = 199303838n
  console.log(typeof amount);  //prints bigint

 //Ex :6 undefined.
  var z;
  console.log(typeof z);  //prints undefined.

  //Ex: 7 objects Examples.
   //obj
  var obj ={};
  console.log(typeof obj); //prints object
  //array
  var arr =[];
  console.log(typeof arr); //prints object because array is in the form of object.

   //null
    
    var x1 =10;
     x1 = null;
     console.log(typeof x1); //prints object because null is in the form of object
  
  //symbol
   
  var sym = Symbol("userid");
  console.log(typeof sym); //prints symbol


//constructors with object

 console.log(typeof new String("hello"));  //here string() is a constructor not a string datatype.





//Class 3  Normal Comparison and Strict comaprison.
console.log( 3 == "3"); //true because normal comparsion
console.log( 3 === "3"); //false becuase strict comparison

  var x3;
  console.log(x3);
 //note Never give value as undefined i.e var x3 = undefined, system will take it automatically form it.
  var y3= null;
   console.log(x3 == y3); //true because here its taking undefined and null as same which is not same.
   console.log(x3 === y3); //now it will check the strict comparison .with undefined and null are not same.



   //Spread operator
   //Task 1: How to split an message with single charactors and print each charactor.

    let message = "Hello Good Morning Salesforce";
    console.log(message);
    let charSplit = [...message]; //adding ... three dots is the Split operator to split
    console.log(charSplit); //it will splits each and every charactor in it.
  //how to print all the charactors line by line 
  //we are using the index for printing it.
   console.log(charSplit[0]); //H
   console.log(charSplit[1]); //e
   console.log(charSplit[4]); //o


//Task 2:
//How to pass values array to arry .
//How to add new values in array.
//Debug the values.

 let arry1 =["Facebook","Instagram"];
 console.log(arry1);
 let arrry2 =["Netflix", "Amazon Prime"];
 console.log(arrry2);

 //how to push total 2 arry data to single array.

  let arry3=[...arry1,...arrry2];
  console.log(arry3);
  
  let arry4 =["Nickil", ...arry3];
  console.log(arry4);

  let arry5 =[...arry4 ,"RamCharan"];
  console.log(arry5);
  

  //working with object
  //working with spread operator will be different.

   let objx1= {"name":"Salesforce", "age":23};
   console.log(objx1);//prints salesforce and 23

   let objx2 ={"name":"facebook","age":55};

   console.log(objx2); //prints facebook and 55

   let objx3 ={...objx1 , ...objx2};

   console.log(objx3); //prints only facebook and 55 because it will be combined with 1.


   //Example:2 for object with spread operator.

   let objx4= {"name":"Salesforce", "age":23,"date":"07/08/1993"};
   console.log(objx1);//prints salesforce and 23

   let objx5 ={"name":"facebook","age":55};

   console.log(objx2); //prints facebook and 55

   let objx6 ={...objx4 , ...objx5};

   console.log(objx6); //prints name: 'facebook', age: 55, date: '07/08/1993' overriding form 1st.


   //5.Shallow Copy

   var arr10 =["x","y","z"];
    console.log(arr10);
   var arr11 = arr10; //assigning the values of arr10 to arr11
   console.log(arr11);
   arr11.push("Nikil");//In this case Nikil value is pushed to both the arrays.
   console.log(arr10);  //here you will get x,y,z and nikil also added which is not a use case
   console.log(arr11); //only here should have to be added as per the pushing above.

   //Solution will be //assign the values with Spread operator 1st

   var arr12 =["x","y","z"];
   console.log(arr12);
   var arr13=[...arr12];
   console.log(arr13);
   arr13.push("RamCharan"); //pushing after assigning with spread operator.
   console.log(arr12);
   console.log(arr13);

   //for Assigning its a good practise to use with spread operator and work.
   
  //6.Nest Copy:
  //Lets Suppose array has 2objects.
    var NestArry =[{"name":"Nikil"},{"name":"Salesforce"}];
    console.log(NestArry);
    var NestArry2= [...NestArry]; //assigning the value to other value using the spread operator
    console.log(NestArry2); //nikil ,salesforce
    //Now if you add any value in Arry2 let see what happends
    NestArry2[0].name="Superman";
    console.log(NestArry);//here both values are changed with superman which is not considerable.
    console.log(NestArry2);//here its getting superman,Salesforce which is considerable.

    //For above Solution For nested object is to use JSON PARSE AND JSON STRINGIFY.

    var NestArryJ =[{"name":"Ramcharan"},{"name":"Salesforce"}];
    console.log(NestArryJ); //ramcharan and salesforce
    var NetArryJ1 = JSON.parse(JSON.stringify(NestArryJ));//no need to use spread operator, we need to parse and stringify
    console.log(NetArryJ1);//after parsing and stringify() the data is printed with ramcharn and salesforce
    NetArryJ1[0].name="Dotnet";
    console.log(NetArryJ1); //Dotnet and Salesforce no change on the first arry
    console.log(NestArryJ); // Ramcharn and salesforce Changes are expected with exactly.

    //Note: we should not use Spread Operator in Nested copy, so we have to use the Json.parse and Json.stringify .












   






   

