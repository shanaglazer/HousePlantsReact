import { IPlant } from "./dataInterfaces";

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

export const blankPlant: IPlant = {
  Categories: "",
  Disease: "",
  Img: "",
  Use: [],
  "Latin name": "",
  Insects: [],
  Avaibility: "",
  Style: null,
  Bearing: "",
  "Light tolered": "",
  "Height at purchase": { M: 0, CM: 0 },
  "Light ideal": "",
  "Width at purchase": { M: 0, CM: 0 },
  id: "",
  Appeal: "",
  Perfume: null,
  Growth: "",
  "Width potential": { M: 0, CM: 0 },
  "Common name (fr.)": null,
  Pruning: "",
  Family: "",
  "Height potential": { M: 0, CM: 0 },
  Origin: [],
  Description: null,
  "Temperature max": { F: 0, C: 0 },
  "Blooming season": null,
  Url: "",
  "Color of leaf": [],
  Watering: "",
  "Color of blooms": null,
  Zone: [],
  "Common name": [],
  "Available sizes (Pot)": "",
  "Other names": null,
  "Temperature min": { F: 0, C: 0 },
  "Pot diameter (cm)": { M: 0, CM: 0 },
  Climat: "",
};