import {test} from '@playwright/test'

test("abort the api request", async({page})=>{

await page.route("http://localhost:3000/api/students", async(route)=>{

const response= await route.fetch()

const data = await response.json()

console.log(data)

await route.continue();

})

await page.goto("http://localhost:3000/api/students")

})