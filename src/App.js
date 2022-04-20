import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ListOfDestinations from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  let [loading, setLoading] = useState(true);
  let [toursArr, setToursArr] = useState([]);
  let [removeDest, setRemoveDest] = useState(false);

  const fetchToursArr = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const toursArr = await resp.json();
      console.log(toursArr);
      setToursArr(toursArr);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchToursArr();
  }, []);
  console.log(`tours${toursArr}`);

  const removeDestTour = (id) => {
    const newTours = toursArr.filter((dest) => dest.id !== id);
    setToursArr(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (toursArr.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchToursArr()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <ListOfDestinations toursArr={toursArr} removeDestTour={removeDestTour} />
    </main>
  );
}
export default App;
