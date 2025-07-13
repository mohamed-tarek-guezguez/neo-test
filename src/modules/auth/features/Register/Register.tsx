import BgImg from '../../assets/authbg.png'
import LoginLogo from '../../components/LoginLogo/LoginLogo'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

const Register = () => {
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
          <RegisterForm />
        </div>
      </div>
    </>
  )
}

export default Register
