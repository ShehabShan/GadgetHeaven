import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import TopScholarship from "../Pages/TopScholarship/TopScholarship";

const Home = () => {
  return (
    <div>
      <h2 className="text-black text-4xl ">home page</h2>
      <Banner></Banner>
      <TopScholarship></TopScholarship>
      <Footer></Footer>
    </div>
  );
};

export default Home;
