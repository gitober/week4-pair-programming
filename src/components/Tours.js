import React, { useState, useEffect } from "react";
import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";
import { useNavigate, useLocation } from "react-router-dom";

function Tours() {
  const [toursData, setToursData] = useState(tours);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect to handle redirection if the route is not /tours
  useEffect(() => {
    if (location.pathname !== "/tours") {
      navigate("/");
    }
  }, [location.pathname, navigate]);

  const removeTour = (id) => {
    const updatedTours = toursData.filter((tour) => tour.id !== id);
    setToursData(updatedTours);
  };

  // Render the component contents only if the route is /tours
  if (location.pathname !== "/tours") {
    return null;
  }

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <div className="tour" key={tour.id}>
              <Tour {...tour} />
              <button
                onClick={() => removeTour(tour.id)}
                className="not-interested-button"
              >
                Not Interested
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
