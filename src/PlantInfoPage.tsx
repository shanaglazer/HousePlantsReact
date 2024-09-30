import { useEffect, useState } from "react";
import PlantInfo from "./PlantInfo";
import { useParams } from "react-router-dom";
import { IPlant } from "./dataInterfaces";
import { fetchData } from "./dataUtil";

export default function PlantInfoPage() {
  const emptyPlant: IPlant = {
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

  const { id } = useParams();
  const [plant, setPlant] = useState<IPlant>(emptyPlant);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const data = await fetchData<IPlant>(`id/${id}`);
        setPlant(data);
      } catch (error: any) {
        setError(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);

  if (error != "") {
    return <div>Unable to complete the desired operation: {error}</div>;
  }

  return (
    <>
      <div className="row">
        <div className={loading ? "placeholder-glow" : ""}>
          <h5 className={loading ? "bg-light mt-2 placeholder" : ""}>
            {loading ? "Loading Plant info" : ""}
          </h5>
        </div>
      </div>
      <div className="row">
        <PlantInfo plant={plant} />
      </div>
    </>
  );
}
