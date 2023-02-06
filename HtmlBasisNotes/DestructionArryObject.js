//Task 1:
//Destruction syntax is used to upack arrays or object into a bunch of variables.
//Destruction of Arry
let arr1 =["Ramcharan", "Nickil"];

//Basic way of assigning is
let name1 = arr1[0];//assigning 0th position value to name1
console.log(name1); //prints Ramcharan
let name2 = arr1[1];//assigning 0th position value to name2
console.log(name2);//prints Nickil.

//we have a shortcut to assign the same procedure

let [name4,name5] = arr1; //Destruction of Array.
//Note Destruction of arry, it will automatically assigns.
//Assigns the first value to first variable and viseversa.
console.log(name4);//Prints Ramcharan
console.log(name5); //Prints Nickil.


//Task :2
//Destruction of Object
 
  let obj1={title:"Zero to Hero",age:29,course:"salesforce"};
  

   //This is Basic way of assigning 
  let Bastitle = obj1.title;
  console.log(Bastitle);

  //This is Basic way of assigning 
  let Basage = obj1.age;
  console.log(Basage);


  //This is Basic way of assigning 
  let Bascourse= obj1.course;
  console.log(Bascourse);


  //Destructing with same new way.
   console.log("This is after destruction");
    let {Bastitle2,Basage2,Bascourse3} =obj1;
    console.log(Bastitle2); //undefined
    console.log(Basage2); //undefined
    console.log(Bascourse3);//undefined.
 //Note: for destruction the values should be same for obj iteration.
 //Note2: we need to use let{} for object and let[] for array destruction. 
 
    //Destructing with same new way.
    console.log("This is after destruction2");
   let {title,age,course} =obj1; //In object destruction, values are automatically binded.
   console.log(title); //Zero to Hero
   console.log(age);//29
   console.log(course);//salesforce

    //Example:2

     
    let objectDestrcut  = {InvoiceNumber:123,TaxName:"Income Tax",TaxAmount:37000};
    //normal way or Basic way.
    let inNum = objectDestrcut.InvoiceNumber;
    let Txn = objectDestrcut.TaxName;
    let Taxamt  = objectDestrcut.TaxAmount;
    console.log(inNum);
    console.log(Txn);
    console.log(Taxamt);

   //new technique of working in it.
   console.log("This is new way of learning the things");
    let {InvoiceNumber,TaxName,TaxAmount} =objectDestrcut;
    console.log(InvoiceNumber);
    console.log(TaxName);
    console.log(TaxAmount);


    




 






