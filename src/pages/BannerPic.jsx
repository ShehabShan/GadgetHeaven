import bannerPic from "../assets/banner.jpg";

const BannerPic = () => {
  return (
    <div>
      <div
        className="w-[1040px] h-[560px] mx-auto -mt-[220px]
      border p-4 bg-transparent rounded-2xl
      "
      >
        <img className="rounded-3xl w-full max-h-[524px]" src={bannerPic} alt="" />
      </div>
    </div>
  );
};

export default BannerPic;
