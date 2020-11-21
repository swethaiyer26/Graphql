const db=require('./db9')
const Query={
    students:()=>db.students.list(),
    getTime:()=>{
    const today=new Date();
    var h=today.getHours();
    var s=today.getSeconds();
    var m=today.getMinutes();
    return `${h}:${m}:${s}`;
    }
}
module.exports={Query};