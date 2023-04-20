import My2ndMap from "../components/Map2ndMap";
import MyMap from "../components/MyMap";
import SideBar from "../components/SideBar";

function HomePage(props) {
  return (
    <div className="p-7">
      <div className="bg-purple row rounded-5">
        <SideBar />
        <My2ndMap />
        {/* <MyMap /> */}
      </div>
    </div>
  );
}

export default HomePage;
