const db=require('./db7')
const Query={
    students:()=>db.students.list(),
}
const Student = {
    college:(root)=>{
        return db.colleges.get(root.collegeId);
    }
}
module.exports={Query,Student}
