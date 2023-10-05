import { DEBUG, TIMESHEETAPIURL } from "lib/utils"


export async function apiGetProjects(
  token:string,
  clientId:number,
) {
// => obj || false

  return fetch(`${TIMESHEETAPIURL}/get_projects`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
          client_id: clientId,
      })
  })

  .then(response=>{
    if (response.ok) {
      return response.json()
    } else {
      return false
    }
  })

  .then(result=>{
      if (DEBUG) {console.log(result)}
      return result
  })

}

