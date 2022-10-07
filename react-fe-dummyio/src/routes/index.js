import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import UpdateUser from "../pages/UpdateUser";
import PostHome from "../pages/post";
import UsersPage from "../pages/UsersPage";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/user" element={<UsersPage />} />
          <Route path="/user/edit" element={<UpdateUser />} />
          <Route path="/post" element={<PostHome />} />
        </Route>
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default WebRoutes;
