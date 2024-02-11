import React from "react";
import { useEffect, useState } from "react";
import { REST_IMG_URL } from "../utils/constants";
import { useParams } from "react-router";
import { REST_MENU_URL } from "../utils/constants";

const ResturantMenu = () => {
  const [restDetails, setRestDetails] = useState([]);
  const [restMenu, setRestMenu] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(REST_MENU_URL + resId);
    const json = await data.json();
    setRestMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    setRestDetails(json.data.cards[0].card.card.info);
  };

  return (
    <div style={{ margin: "100px" }}>
      {/* <img
        src={REST_IMG_URL + restDetails.cloudinaryImageId}
        alt={"image"}
        className="rest-img"
        style={{ height: "200px", width: "200px" }}
      />
      <h1 className="rest-name">{restDetails.name}</h1>
      <h3 className="rest-name">{restDetails.cuisines.join(", ")}</h3>

      <h3 className="rest-name">{restDetails.areaName}</h3>

      <h4 className="rest-name">
        <i className="fa-regular fa-star" id="icon-star"></i>
        {restDetails.avgRating}
      </h4>
      <h4 className="rest-name">
        <i className="fa-regular fa-clock" id="icon-timer"></i>
        {String(restDetails.sla.deliveryTime) + " minutes"}
      </h4> */}

      <table>
        <tbody>
          {restMenu.map((res) => (
            <tr key={res.card.info.id}>
              <td className="rest-name">
                {res.card.info.isVeg ? (
                  <img
                    src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png"
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                  />
                ) : (
                  <img
                    src="https://openclipart.org/image/800px/304247"
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                  />
                )}

                <h2>{res.card.info.name}</h2>
                <h3>{"₹" + res.card.info.defaultPrice / 100 + ".00"}</h3>
                <h4>{res.card.info.description}</h4>
              </td>
              <td>
                <img
                  src={REST_IMG_URL + res.card.info.imageId}
                  alt={"image"}
                  className="rest-img"
                  style={{ height: "200px", width: "200px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResturantMenu;