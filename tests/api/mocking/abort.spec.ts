import {test} from '@playwright/test'

test("abort the api request", async({page})=>{

await page.route("http://localhost:3000/api/students", async(route)=>{

await route.abort();

})

await page.goto("http://localhost:3000/api/students")

})