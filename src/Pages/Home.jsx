import Breaking from "./Breaking";
import Header from "./Shared/Header/Header";
import LeftSiteNav from "./Shared/LeftSiteNav/LeftSiteNav";
import Navbar from "./Shared/Navbar/Navbar";
import RightSiteNab from "./Shared/RightSIteNav/RightSiteNab";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Breaking></Breaking>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSiteNav></LeftSiteNav>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-4xl">News Coming Soon</h2>
        </div>
        <div>
          <RightSiteNab></RightSiteNab>
        </div>
      </div>
    </div>
  );
};

export default Home;
