import SearchBar from "./SearchBar";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <SearchBar></SearchBar>

      <div className="rest-container">
        {resList.map((resturant) => (
          <ResturantCard resData={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
