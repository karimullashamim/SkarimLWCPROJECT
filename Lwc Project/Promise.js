/*
//console.log("Testing");

//Promise:
/*
1.Promise is an object that mey produce a single value some time in future.
2.Promise are used to handle the asynchronous operations in javascript.
3. A promise has three stages or states:
   a. Pending();
   b.fulfilled();
  c.rejected();

Where to use this promise key word:
1.when fetching the data form the server.
2.loading file form system.


*What is Asynchronous?
a)calling the server and you dont know how much time it takes.
*Mostly we are going to use while calling apex methods or want to load the file form static resource

 Example: 
 1.create a constructor as promise is an object.
 2.add resolve and reject paramters  in function and check the condition.

 syntax: new promise(function(resolve, reject){});


   //Practical approach
   function IsCheckdata(data){
   
    return new Promise(function(resolve, reject){
    
          if(data === "SUCESS"){
            return resolve("Successfully found the records");
          }else{

            return reject("Unsuccessfully found the records");
          }
    });
     
   }

  // console.log(IsCheckdata("SUCESS"));

   //syntax :
   /*
   Methodname("parameters").then(function(result){
    console.log(result)
    }).catch(function(error){
        console.error(error);
    })
   

   IsCheckdata("SUCESS1").then(function(result){

     // return result;
     console.log(result);
   }).catch(function(error){
    console.error(error);
   })
     
   
    

  //promise function to check is married.

      function IsKarimMariedorNot(data){

         
        return  new Promise(function(resolve, reject){

            if(data === "Yes Married"){
                   
               return resolve("Yes is Married");
            }else{


                 return reject("No  is still Single");
            }
        });

      }


      console.log(IsKarimMariedorNot("Yes Married"));

      IsKarimMariedorNot("Yes Married").then(function(result){
        console.log(result);
      });


    //Task: How to make a callout using the then and hold the response in lwc.
     console.log("Api callout");
    //for get method parameter is optional
    fetch("https://api.github.com/repositories?since=364",{method:"GET"}).then(function(result){

   // console.log(result);
     //taking the result response in json.
       return result.json(); //This will return the promise ,so we need to use then again.
      }).then(function(response){
        console.log("my response");
        console.log(response);
      });

*/



 
//console.log("Testing Page");


//Note: You need to add .js while you are importing the file.
//at first the compoents of pi and add will be disabled mode.
//After using the values in the code it will be enabled.
//system will take automatically the file path of "./filename" you need to add "./filename.js"

  //Practical Approach

//Task 1: how to use the utility files for reusabality.
//how to write an export file.
 //Step 1: Create a utilil.js.
 /*
   export const pi = 3.14;
    
   export function add(a,b){

      return (a+b);
   }
 */

/*
import { pi ,add } from "./util.js";
console.log("Testing");
console.log(pi);
console.log(add(2,3));
//===============================================
//Task 2: How to use *?
 //Note: If you want to use the all the elements then we are going to use * and as any Samplename.
 //Syntax: import as samplename from "./util.js"
 //syntax for calling the elements Samplename.variablename or method(a,b)
import * as UTILS from "./util.js";
console.log("Testing2");
console.log(UTILS.pi);
console.log(UTILS.add(4,5));
//console.log(UTILS.subract(4,5));
*/
//======================================

//Task 3: How to use the Default values.
//Step :1 add this default values out side the {} //flower bracket.
//and you can useit.
 /*
//Export method as Default add this method in UTILIS.JS FILE
/*  
export  default function subract(a,b){

    return (a-b);
}
*/
//Step 2:promise.js file
/*
import  subract,{pi ,add } from "./util.js";
console.log("Testing3");
console.log(pi);
console.log(add(2,3));
console.log(subract(4,5));
*/
//===================================

//Task 4 : How to Export the data of with different name 
//pi to pi_data
//Step 1: utility folder
 /*
 const fi =7.88; 

 function Multiply(a ,b ){
  
     return (a*b);

 }

export {fi as fi_data,Multiply}  //exporting as other name
 */

//Step2: promise.js file
//adding the change
import subract, {pi ,add,fi_data,Multiply } from "./util.js";
console.log("Testing4");
console.log(pi);
console.log(add(2,3));
console.log(subract(4,5));
console.log(fi_data);
console.log(Multiply(4,5));

