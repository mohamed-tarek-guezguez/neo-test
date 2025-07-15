import Input from '@src/modules/shared/components/Input/Input'
import { IForgotPassword } from '../../types/forgotPassword'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import LoginBtn from '../LoginBtn/LoginBtn'

const ForgotPasswordForm = () => {
  const initialValues: IForgotPassword = {
    email: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is required').email('Invalid email format'),
    }),
    onSubmit: (_values) => {
      // Handle login logic here
    },
  })

  return (
    <form className="login_card_container_form forgot_password_form" onSubmit={formik.handleSubmit}>
      <h3 className="login_card_container_form_title">Forgot Password</h3>

      <div className="login_card_container_form_inputs">
        <div className="login_card_container_form_account_group">
          <Input
            name="email"
            formik={formik}
            variant="secondary"
            placeholder=""
            label="Email"
            type="text"
          />

          <div className="login_card_container_form_account_group_links">
            <span></span>

            <Link to={'/login'} className="login_card_container_form_account_group_links_item">
              Back to Login
            </Link>
          </div>
        </div>

        <LoginBtn>Submit</LoginBtn>
      </div>
    </form>
  )
}

export default ForgotPasswordForm
