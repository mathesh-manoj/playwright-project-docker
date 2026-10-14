
import {request, test} from '@playwright/test'

test("api put method ", async({request})=>{

const response= await request.put("http://localhost:3000/api/students/6acf7a58e1133be9e596d2a6",{
    headers:{
        'Content-Type':'application/json',
         Authorization:'Bearer my_secret_token_123'
    },

    data:{
        name:"jalaldhalip",
        rollNumber:"BT098324",
        age:"23",
        department:"Automation Testing ",
        email:"dhalip@edu.in"


    }
}) ;

console.log(await response.json())

})