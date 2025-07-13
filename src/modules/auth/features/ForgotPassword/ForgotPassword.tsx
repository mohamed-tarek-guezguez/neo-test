import BgImg from '../../assets/authbg.png'
import LoginLogo from '../../components/LoginLogo/LoginLogo'
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm'

const ForgotPassword = () => {
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
          <ForgotPasswordForm />
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
