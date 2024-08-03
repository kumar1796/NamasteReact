import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  console.log('img--',IMG_CDN_URL,cloudinaryImageId)
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2 className="font-bold text-xl" >{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
