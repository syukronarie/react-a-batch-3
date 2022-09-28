import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import Auth from "../utils/Auth";

export default function PrivateRoute() {
	if (!Auth.isAuthorization()) {
		return <Navigate to="/login" replace />;
	}
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}
