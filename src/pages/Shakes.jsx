import React from "react";
import useFatch from "../hooks/useFatch";

function Shakes() {
  const { data, isPanding, error } = useFatch(
    "https://msshohruh.github.io/api-menu/db.json",
    "shakes"
  );
  return (
    <div className="section-center">
      {data &&
        data.map((item) => {
          const { title, id, category, price, img, desc } = item;
          return (
            <div className="menu-item" key={id}>
              <img className="photo" src={img} alt={title} />
              <div className="iten-info">
                <header
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5>{title}</h5>
                  <span className="item-price">{price}</span>
                </header>
                <hr />
                <p className="item-text">{desc}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Shakes;
