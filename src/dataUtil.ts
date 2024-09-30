export async function fetchData<T>(url: string):Promise<T>{
    const response = await fetch(
     `https://house-plants2.p.rapidapi.com/${url}`,
     {
       method: "GET",
       headers: {
         "x-rapidapi-key":
           "b052c9c778msh293331cb654a58bp181668jsn7f31dff0546c",
         "x-rapidapi-host": "house-plants2.p.rapidapi.com",
       },
     }
  );
  if (!response.ok) {
    throw new Error(`HTTP error, status: ${response.status}`);//livdok im ani rotza
  }
  const data = response.json();
  return data;
}