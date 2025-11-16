interface Teacher{
    readonly firstName:string;
    readonly lastName:string;
    fullTimeEmployee:boolean;
    yearsOfExperience?:number;
    location:string;
    [key:string]:any;
}
const teacher3: Teacher = {
    firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contracg:false,
};



interface Directors extends Teacher{
    numberOfReports:number
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  contract:true
};
console.log(director1);
function printTeacher(firstName:string,lastName:string):string{
    return `${firstName.slice(0,1).toUpperCase()}. ${lastName}`
}
interface StudentInterface{
    firstName:string;
    lastName:string;
    workOnHome():string;
    displayName():string;

}
interface StudentClassConstructor{
    new (firstName:string,lastName:string):StudentInterface;
}

class Student implements StudentInterface{
    constructor(public firstName:string,public lastName:string){}
    workOnHome():string{
        return "currently working"
        
    }
    displayName():string{
        return this.firstName
    }
}
