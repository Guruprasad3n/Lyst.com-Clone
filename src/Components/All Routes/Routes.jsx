import { Route, Routes } from "react-router-dom";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Join from "../Signup Login/Join";
import Signin from "../Signup Login/Signin";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/join" element={<Join />} />

        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
      </Routes>
    </div>
  );
}
export default AllRoutes;
