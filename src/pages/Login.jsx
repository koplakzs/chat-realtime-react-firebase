import "../App.css";
const Login = () => {
  return (
    <div className="register container">
      <div className="form bg-light p-5 rounded-5 text-center">
        <h3 className="fw-bold">Welcome To Realtime Chat</h3>
        <p>Login</p>
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control border-0 border-bottom shadow-none bg-light"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control border-0 border-bottom shadow-none bg-light"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3 mb-3 col-12">
            Login
          </button>
        </form>
        <p>Belum ada akun ?? Register Skuy</p>
      </div>
    </div>
  );
};

export default Login;
