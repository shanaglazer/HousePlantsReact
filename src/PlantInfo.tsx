import { IPlant } from "./dataInterfaces";

interface Props {
  plant: IPlant;
}

export default function PlantInfo({ plant }: Props) {
  return (
    <>
      <div className="container">
        <div className="card m-3" style={{ width: "100%" }}>
          <div className="row g-0">
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{plant["Latin name"]}</h5>
                <p className="card-text">
                  <strong>Common Name:</strong>{" "}
                  {plant["Common name"].join(", ")}
                  <br />
                  <strong>Family:</strong> {plant.Family}
                  <br />
                  <strong>Categories:</strong> {plant.Categories}
                  <br />
                  <strong>Appeal:</strong> {plant.Appeal}
                  <br />
                  <strong>Use:</strong> {plant.Use.join(", ")}
                  <br />
                  <strong>Origin:</strong> {plant.Origin.join(", ")}
                  <br />
                  <strong>Style:</strong> {plant.Style}
                  <br />
                  <strong>Growth:</strong> {plant.Growth}
                  <br />
                  <strong>Height at Purchase:</strong>{" "}
                  {plant["Height at purchase"].M}m /{" "}
                  {plant["Height at purchase"].CM}cm
                  <br />
                  <strong>Width at Purchase:</strong>{" "}
                  {plant["Width at purchase"].M}m /
                  {plant["Width at purchase"].CM}
                  cm
                  <br />
                  <strong>Height Potential:</strong>{" "}
                  {plant["Height potential"].M}m /{plant["Height potential"].CM}
                  cm
                  <br />
                  <strong>Width Potential:</strong> {plant["Width potential"].M}
                  m /{plant["Width potential"].CM}cm
                  <br />
                  <strong>Light Tolerated:</strong> {plant["Light tolered"]}
                  <br />
                  <strong>Light Ideal:</strong> {plant["Light ideal"]}
                  <br />
                  <strong>Watering:</strong> {plant.Watering}
                  <br />
                  <strong>Available Sizes (Pot):</strong>{" "}
                  {plant["Available sizes (Pot)"]}
                  <br />
                  <strong>Pruning:</strong> {plant.Pruning}
                  <br />
                  <strong>Zone:</strong> {plant.Zone.join(", ")}
                  <br />
                  <strong>Temperature Min:</strong> {plant["Temperature min"].F}
                  °F / {plant["Temperature min"].C}°C
                  <br />
                  <strong>Temperature Max:</strong> {plant["Temperature max"].F}
                  °F / {plant["Temperature max"].C}°C
                  <br />
                  <strong>Perfume:</strong> {plant.Perfume || "None"}
                  <br />
                  <strong>Color of Leaf:</strong>{" "}
                  {plant["Color of leaf"].join(", ")}
                  <br />
                  <strong>Color of Blooms:</strong>{" "}
                  {plant["Color of blooms"] || "None"}
                  <br />
                  <strong>Blooming Season:</strong>{" "}
                  {plant["Blooming season"] || "Varies"}
                  <br />
                  <strong>Climat:</strong> {plant.Climat}
                  <br />
                  <strong>Bearing:</strong> {plant.Bearing}
                  <br />
                  <strong>Insects:</strong> {plant.Insects.join(", ")}
                  <br />
                  <strong>Disease:</strong> {plant.Disease}
                  <br />
                  <strong>Avaibility:</strong> {plant.Avaibility}
                  <br />
                  <strong>Other Names:</strong> {plant["Other names"] || "None"}
                  <br />
                  <strong>Description:</strong> {plant.Description}
                  <br />
                  <strong>URL:</strong> <a href={plant.Url}>{plant.Url}</a>
                  <br />
                  <strong>Pot Diameter:</strong> {plant["Pot diameter (cm)"].M}{" "}
                  m / {plant["Pot diameter (cm)"].CM} cm
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
