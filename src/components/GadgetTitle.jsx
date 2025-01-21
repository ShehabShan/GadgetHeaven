const GadgetTitle = ({ title, subtitle }) => {
  return (
    <div>
      <div className="flex flex-col bg-[#9339dd] text-white rounded-xl  max-w-[1440px]  mx-auto text-center items-center gap-8 min-h-[300px] mt-8 pt-6">
        <h2 className="font-bold text-[32px]">{title}</h2>
        <p className="w-[700px]"> {subtitle}</p>
      </div>
    </div>
  );
};

export default GadgetTitle;
