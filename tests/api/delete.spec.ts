
import {request, test} from '@playwright/test'

test("api delete method ", async({request})=>{

const response= await request.delete("http://localhost:3000/api/students/6acf79f6e1133be9e596d29f",{
    headers:{
        'Content-Type':'application/json',
         Authorization:'Bearer my_secret_token_123'
    }
}) ;

console.log(await response.json())

})