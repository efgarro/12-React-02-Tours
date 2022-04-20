import React from "react";
import Destination from "./Tour";
const ListOfDestinations = ({toursArr, removeDestTour}) => {
  // console.log(arr);
  // const { toursArr } = props;
  // console.log(toursArr);
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {toursArr.map((dest) => {
          return <Destination key={dest.id} {...dest} removeDestTour={removeDestTour} />;
        })}
      </div>
    </section>
  );
};

export default ListOfDestinations;
