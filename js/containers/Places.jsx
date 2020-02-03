import React from "react";
import "../../assets/styles/components/Places.scss";
import VisitSelector from "../components/VisitSelector.jsx";
import CenterWrapper from "./CenterWrapper.jsx";
import PlaceCard from "../components/PlaceCard.jsx";

class Places extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let cities = [
      {
        namePlace: "Name of Place",
        address: "123 Main St",
        description: "amazing burguers, imprompteau jazz trios"
      }
    ];
    return (
      <div className="placesContainer">
        <VisitSelector
          selectDefaultOption="read"
          handleChange={() => console.log("selectDefaultOption")}
          handleSubmit={() => console.log("handleSubmit")}
        />
        <CenterWrapper>
          <div className="grid-container">
            <div className="grid-item gird-title title-right border-right">
              México City:
            </div>
            <div className="grid-item gird-title title-left">
              Washington DC:
            </div>
            <div className="grid-item border-right">
              <PlaceCard
                city={cities[0]}
                direction="place-card-container-right"
              ></PlaceCard>
            </div>
            <div className="grid-item">
              <PlaceCard
                city={cities[0]}
                direction="place-card-container-left"
              ></PlaceCard>
            </div>
            <div className="grid-item border-right">
              <PlaceCard
                city={cities[0]}
                direction="place-card-container-right"
              ></PlaceCard>
            </div>
            <div className="grid-item">
              <PlaceCard
                city={cities[0]}
                direction="place-card-container-left"
              ></PlaceCard>
            </div>
          </div>
        </CenterWrapper>
      </div>
    );
  }
}

export default Places;
