import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feeds/Feed";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import moduleName from "./home.css";
export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
