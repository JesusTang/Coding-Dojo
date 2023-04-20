import My2ndMap from "../components/My2ndMap";
import MyMap from "../components/MyMap";
import SideBar from "../components/SideBar";
import Welcome from "../components/Welcome";

function HomePage(props) {
  return (
    <div className="p-7">
      <div className="row">
        <Welcome />
      </div>
      <div className="bg-purple row rounded-5 box-shadow">
        <SideBar />
        <My2ndMap />
        {/* <MyMap /> */}
      </div>
    </div>
  );
}

export default HomePage;
