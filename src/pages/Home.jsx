import axios from "axios";
import { useEffect, useState } from "react";
import GadgetCard from "./GadgetCard";

import Category from "./Category";
import Swal from "sweetalert2";

const Home = () => {
  const [gadgets, setGadgets] = useState([]);
  const [filterGadgets, setFilterGadgets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [all, setAll] = useState(gadgets);

  useEffect(() => {
    axios("gadget.json").then((res) => {
      console.log(res);
      setGadgets(res.data);
      setFilterGadgets(res.data);

      const uniqueCategories = [
        ...new Set(res.data.map((gadget) => gadget.category)),
      ];

      setCategories(uniqueCategories);
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilterGadgets(gadgets);
      setAll("All");
    } else {
      const filterd = gadgets.filter((gadget) => gadget.category === category);
      setFilterGadgets(filterd);
      setAll("");
    }
  };

  const handleAddWish = async (wishGadget) => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("wish")) || [];
      const updateCart = [...existingCart, wishGadget];
      localStorage.setItem("wish", JSON.stringify(updateCart));

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: " Cart added to Wishlist Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (errer) {
      console.log("wish not added");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <h2 className="text-[40px] font-bold">Explore Cutting-Edge Gadgets</h2>
      <div className="flex max-w-[1250px] mx-auto ">
        <div className="w-[200px]  p-4 bg-white rounded-2xl mt-3 ">
          <button
            onClick={() => handleCategoryChange("All")} // Show all gadgets when "All" is clicked
            className={`btn w-[140px] flex mt-5 ${
              all ? "bg-[#8f37d7] text-white" : ""
            }`}
          >
            All
          </button>
          {categories.map((category, index) => (
            <Category
              key={index}
              category={category}
              handleCategoryChange={handleCategoryChange}
              selectedCategory={selectedCategory}
            ></Category>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filterGadgets.map((gadget, index) => (
            <GadgetCard
              key={index}
              gadget={gadget}
              handleAddWish={handleAddWish}
            ></GadgetCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
