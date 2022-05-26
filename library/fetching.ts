export async function postData(url = "",method:string, data = {}, key: string) {
   // Default options are marked with *
   const response = await fetch(url, {
      method: method, 
      headers: {
         "Content-Type": "application/json",
         ApiKey: key,
      },
      body: JSON.stringify(data), 
   });
   return response.json();
}