import BgImg from '../../assets/authbg.png'
import LoginLogo from '../../components/LoginLogo/LoginLogo'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
        className="login_module_bg"
      />

      <div className="login_module">
        <div className="login_card_container">
          <LoginLogo />
          <LoginForm />
        </div>
      </div>
    </>
  )
}

export default Login
