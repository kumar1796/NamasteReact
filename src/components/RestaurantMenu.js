import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  //how to read a dynamic URL params
  //   const params = useParams();
  //   const { id } = params;
  //   console.log(params);
  const { resId } = useParams(); //we can directly destructure this way also

  // const [restaurant, setRestaurant] = useState({});

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id : {resId}</h1>
        <h2>{restaurant.name}</h2>
        {console.log("name--", restaurant)}
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        {/* <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
