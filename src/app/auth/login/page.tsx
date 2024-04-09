import Login from "@/components/auth/login";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "QualitrendsGS | Login",
};

const LoginPage = () => {
	return <Login />;
};

export default LoginPage;
