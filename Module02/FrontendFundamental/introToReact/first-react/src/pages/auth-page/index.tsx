import ReusableForm from "../../components/ReusableForm";

const AuthPage: React.FC = () => {
  const handleLogin = (formData: { [key: string]: string }) => {
    console.log("Login attempted with formData:", formData);
  };

  const loginFields = [
    { name: "username", type: "text", label: "Username" },
    { name: "password", type: "password", label: "Password" },
  ];

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <ReusableForm
        onSubmit={handleLogin}
        fields={loginFields}
        buttonText="Login"
      />
    </div>
  );
};

export default AuthPage;
