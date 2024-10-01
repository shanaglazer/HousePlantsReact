import { useEffect, useState } from "react";
import PlantInfo from "./PlantInfo";
import { useParams } from "react-router-dom";
import { IPlant } from "./dataInterfaces";
import { blankPlant, fetchData } from "./dataUtil";

export default function PlantInfoPage() {
  const emptyPlant = blankPlant;

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
    return (
      <div className="alert alert-danger">
        Unable to complete the desired operation: {error}
      </div>
    );
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
