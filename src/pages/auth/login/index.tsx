import LoginComponent from "../../../components/auth/login";
import auth from "../../../config/hoc-protected-routes/auth";

const Login = () => {
  return <h1>hey</h1>;
};

const LoginPage = auth(Login);

export default LoginPage;
