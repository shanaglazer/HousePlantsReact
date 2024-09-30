interface IMeasurement {
  M: number | null;
  CM: number | null;
}

interface ITemperature {
  F: number | null;
  C: number | null;
}

export interface IPlant {
  Categories: string;
  Disease: string;
  Img: string;
  Use: string[];
  "Latin name": string;
  Insects: string[];
  Avaibility: string;
  Style: string | null;
  Bearing: string;
  "Light tolered": string;
  "Height at purchase": IMeasurement;
  "Light ideal": string;
  "Width at purchase": IMeasurement;
  id: string;
  Appeal: string;
  Perfume: string | null;
  Growth: string;
  "Width potential": IMeasurement;
  "Common name (fr.)": string | null;
  Pruning: string;
  Family: string;
  "Height potential": IMeasurement;
  Origin: string[];
  Description: string | null;
  "Temperature max": ITemperature;
  "Blooming season": string | null;
  Url: string;
  "Color of leaf": string[];
  Watering: string;
  "Color of blooms": string | null;
  Zone: string[];
  "Common name": string[];
  "Available sizes (Pot)": string;
  "Other names": string | null;
  "Temperature min": ITemperature;
  "Pot diameter (cm)": IMeasurement;
  Climat: string;
}

  export interface ICategory{
    Category: string;
  }

  export interface IRequestOptions {
    method: string;
    headers: {
      'x-rapidapi-key': string;
      'x-rapidapi-host': string;
    };
  }