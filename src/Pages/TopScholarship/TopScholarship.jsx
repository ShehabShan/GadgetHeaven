import useScholership from "../../Hooks/useScholership";
import ScholarshipCard from "../AllScholership/ScholarshipCard";

const TopScholarship = () => {
  const [allScholership] = useScholership();
  const topScholarships = allScholership.slice(0, 6);
  console.log(allScholership);

  return (
    <div>
      <div>
        <h2 className="text-3xl text-emerald-600 font-bold text-center my-8">
          Top Scholership
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-7">
          {topScholarships.map((scholarship, index) => (
            <ScholarshipCard
              key={index}
              scholarship={scholarship}
            ></ScholarshipCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopScholarship;
