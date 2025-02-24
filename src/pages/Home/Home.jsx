import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import { useState } from "react";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Navbar />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}
export default Home;
