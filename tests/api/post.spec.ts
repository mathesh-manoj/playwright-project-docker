
import {request, test} from '@playwright/test'

test("api post method ", async({request})=>{

const response= await request.post("http://localhost:3000/api/students",{
    headers:{
        'Content-Type':'application/json',
         Authorization:'Bearer my_secret_token_123'
    },

    data:{
        name:"jalaldhalip",
        rollNumber:"AT00943",
        age:"23",
        department:"Automation Testing ",
        email:"jallal@edu.in"


    }
}) ;

console.log(await response.json())

})