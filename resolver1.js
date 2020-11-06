const db=require('./db1')
const Query ={
    greeting:() => {
        return "hello from  TutorialsPoint !!!"
    },
    students:()=>db.students.list(),
    studentById:(root,args,context,info)=> {
        return db.students.get(args.id);
    }
}
module.exports={Query}