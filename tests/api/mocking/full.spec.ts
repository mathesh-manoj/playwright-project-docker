// Network Mocking 

// route()
// fullfill ()
// abort () 
// continue ()

import {test} from '@playwright/test'

test("api mocking fake data ", async ({page})=>{

    await page.route("http://localhost:3000/api/students", async(route)=>{

             await route.fulfill({
                  status:200,
                  contentType:'application/json',
                  body:JSON.stringify([{
                           id :1,
                           name : "mathesh",
                           age:27,
                           department:"Automation"

                  },
                  {
                           id :2,
                           name : "Manojkumar",
                           age:27,
                           department:"Automation engineer"

                  }
                ])

             })

    });

    const response = await page.evaluate(async ()=>{

        const response= await fetch("http://localhost:3000/api/students")
         return await response.json();

    });
    
    console.log(response)

})