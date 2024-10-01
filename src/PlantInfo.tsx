import { IPlant } from "./dataInterfaces";

interface Props {
  plant: IPlant;
}
export default function PlantInfo({ plant }: Props) {
  function displayPlantAttribute(
    label: string,
    value: any,
    defaultValue = "None"
  ) {
    return (
      <p>
        <strong>{label}:</strong> {value ?? defaultValue}
      </p>
    );
  }

  return (
    <>
      <div className="container">
        <div className="card m-3" style={{ width: "100%" }}>
          <div className="row g-0">
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{plant["Latin name"]}</h5>
                <p className="card-text">
                  {displayPlantAttribute(
                    "Common Name",
                    plant["Common name"].join(", ")
                  )}
                  {displayPlantAttribute("Family", plant.Family)}
                  {displayPlantAttribute("Categories", plant.Categories)}
                  {displayPlantAttribute("Appeal", plant.Appeal)}
                  {displayPlantAttribute("Use", plant.Use.join(", "))}
                  {displayPlantAttribute("Origin", plant.Origin.join(", "))}
                  {displayPlantAttribute("Style", plant.Style)}
                  {displayPlantAttribute("Growth", plant.Growth)}
                  {displayPlantAttribute(
                    "Height at Purchase",
                    `${plant["Height at purchase"]?.M ?? 0}m / ${
                      plant["Height at purchase"]?.CM ?? 0
                    } cm`
                  )}
                  {displayPlantAttribute(
                    "Width at Purchase",
                    `${plant["Width at purchase"]?.M ?? 0}m / ${
                      plant["Width at purchase"]?.CM ?? 0
                    } cm`
                  )}
                  {displayPlantAttribute(
                    "Height Potential",
                    `${plant["Height potential"]?.M ?? 0}m / ${
                      plant["Height potential"]?.CM ?? 0
                    } cm`
                  )}
                  {displayPlantAttribute(
                    "Width Potential",
                    `${plant["Width potential"]?.M ?? 0}m / ${
                      plant["Width potential"]?.CM ?? 0
                    } cm`
                  )}
                  {displayPlantAttribute(
                    "Light Tolerated",
                    plant["Light tolered"]
                  )}
                  {displayPlantAttribute("Light Ideal", plant["Light ideal"])}
                  {displayPlantAttribute("Watering", plant.Watering)}
                  {displayPlantAttribute(
                    "Available Sizes (Pot)",
                    plant["Available sizes (Pot)"]
                  )}
                  {displayPlantAttribute("Pruning", plant.Pruning)}
                  {displayPlantAttribute("Zone", plant.Zone.join(", "))}
                  {displayPlantAttribute(
                    "Temperature Min",
                    `${plant["Temperature min"]?.F ?? 0}°F / ${
                      plant["Temperature min"]?.C ?? 0
                    }°C`
                  )}
                  {displayPlantAttribute(
                    "Temperature Max",
                    `${plant["Temperature max"]?.F ?? 0}°F / ${
                      plant["Temperature max"]?.C ?? 0
                    }°C`
                  )}
                  {displayPlantAttribute("Perfume", plant.Perfume || "None")}
                  {displayPlantAttribute(
                    "Color of Leaf",
                    plant["Color of leaf"].join(", ")
                  )}
                  {displayPlantAttribute(
                    "Color of Blooms",
                    plant["Color of blooms"] || "None"
                  )}
                  {displayPlantAttribute(
                    "Blooming Season",
                    plant["Blooming season"] || "None"
                  )}
                  {displayPlantAttribute("Climat", plant.Climat)}
                  {displayPlantAttribute("Bearing", plant.Bearing)}
                  {displayPlantAttribute("Insects", plant.Insects.join(", "))}
                  {displayPlantAttribute("Disease", plant.Disease)}
                  {displayPlantAttribute("Avaibility", plant.Avaibility)}
                  {displayPlantAttribute(
                    "Other Names",
                    plant["Other names"] || "None"
                  )}
                  {displayPlantAttribute(
                    "Description",
                    plant.Description ?? "None"
                  )}
                  {displayPlantAttribute(
                    "URL",
                    <a href={plant.Url}>{plant.Url}</a>
                  )}
                  {displayPlantAttribute(
                    "Pot Diameter",
                    `${plant["Pot diameter (cm)"]?.M ?? 0}m / ${
                      plant["Pot diameter (cm)"]?.CM ?? 0
                    } cm`
                  )}
                </p>
              </div>
            </div>
            <div className="col-4">
              <img
                src={plant.Img}
                className="img-fluid w-100 rounded-start"
                alt="plant img"
                style={{ objectFit: "contain", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
