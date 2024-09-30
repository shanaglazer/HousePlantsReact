import { useEffect, useState } from "react";
import { IPlant, ICategory } from "./dataInterfaces";
import { fetchData } from "./dataUtil";
import { Link } from "react-router-dom";

export default function PlantList() {
  const [plantData, setPlantData] = useState<IPlant[]>([]);
  const [displayPlants, setDisplayPlants] = useState<IPlant[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [chosenCategory, setChosenCategory] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let copyplantdata = [...plantData];
    if (chosenCategory) {
      if (chosenCategory != "") {
        copyplantdata = copyplantdata.filter(
          (p) => p.Categories == chosenCategory
        );
      }
    }
    if (searchKey) {
      copyplantdata = copyplantdata.filter(
        (p) =>
          p["Latin name"].toLocaleLowerCase().includes(searchKey) ||
          p.Family.toLocaleLowerCase().includes(searchKey)
      );
    }
    setDisplayPlants(copyplantdata);
  }, [plantData, chosenCategory, searchKey]);

  const handleChosenCategory = (newcategory: string) => {
    setChosenCategory(newcategory);
  };

  const handleSearchKey = () => {
    let key = "";
    const searchelement = document.getElementById("search") as HTMLInputElement;
    if (searchelement) {
      key = searchelement.value.toLocaleLowerCase();
    }
    setSearchKey(key);
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const plantdata = await fetchData<IPlant[]>("all");
        setPlantData(plantdata);
        //if i add a usestate for plantdata - refresh here
      } catch (error: any) {
        setError(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      const categorylist = await fetchData<ICategory[]>("categories");
      setCategory(categorylist);
    };
    fetchdata();
  }, []);

  if (error != "") {
    return <div>Unable to complete the desired operation: {error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center" }}>House Plants List</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-4">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter By Category
              </button>
              <ul className="dropdown-menu">
                <li key="all">
                  <a
                    className="dropdown-item"
                    onClick={() => handleChosenCategory("")}
                  >
                    All Categories
                  </a>
                </li>
                {category.map((c) => (
                  <li key={c.Category}>
                    <a
                      className="dropdown-item"
                      onClick={() => handleChosenCategory(c.Category)}
                    >
                      {c.Category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-8">
            <div className="search">
              <div className="d-flex">
                <input
                  id="search"
                  className="form-control me-sm-2"
                  type="search"
                  placeholder="Search by Latin-name\Family"
                />
                <button
                  className="btn btn-success my-2 my-sm-0"
                  type="button"
                  onClick={handleSearchKey}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={loading ? "placeholder-glow" : ""}>
            <h5 className={loading ? "bg-light mt-2 placeholder" : ""}>
              {loading ? "Loading Plant Grid" : ""}
            </h5>
          </div>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>Latin name</th>
                <th>Family</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {displayPlants.map((p) => (
                <tr key={p.id}>
                  <td>{p["Latin name"]}</td>
                  <td>{p.Family}</td>
                  <td>{p.Categories}</td>
                  <td>
                    <Link
                      to={`/plant/${p.id}`}
                      className="btn btn-outline-success"
                    >
                      Plant-Info
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
