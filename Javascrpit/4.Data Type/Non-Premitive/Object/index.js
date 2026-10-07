//Literal
let stu = {
    sName:"vishal",
    sId:33,
    sPlace:"Mysore"
}

stu.sPinCode = 571426

delete stu.sPinCode

console.log(stu);
console.log(stu.sName);
console.log(stu["sName"]);

console.table(stu)



//New keyword
let emp = new Object()
emp.eName = "vishal"
emp.eId = 1234
emp.ePlace = "Mysore"
console.log(emp);



//Constructor Function
function movie(mName,mId){
    this.mName = mName
    this.mId = mId
}
let m1 = new movie("KGF",123)
let m2 = new movie("RRR",456)
console.log(m1);
console.log(m2);



