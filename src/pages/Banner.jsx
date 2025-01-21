const Banner = () => {
  return (
    <div className="flex flex-col  max-w-[1000px]  mx-auto text-center gap-8 min-h-[600px] mt-8">
      <h2 className="text-[56px] font-bold ">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h2>
      <p className="text-xl px-32">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div>
        <button className="btn rounded-3xl text-[#9339dd]">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
