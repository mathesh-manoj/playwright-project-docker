import {request, test} from '@playwright/test'

test("api get method",async({request})=>{


const response = await request.get("http://localhost:3000/api/students")
console.log(await response.json())

})