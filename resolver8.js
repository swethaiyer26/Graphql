const db = require('./db8')

const Query = {
   greetingWithAuth:(root,args,context,info) => {

      //check if the context.user is null
      if (!context.user) {
         throw new Error('Unauthorized');
      }
      return "Hello from TutorialsPoint, welcome back : "+context.user.firstName;
   }
}

module.exports = {Query}