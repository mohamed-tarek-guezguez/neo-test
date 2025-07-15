import Input from '@src/modules/shared/components/Input/Input'
import { IRegister } from '../../types/register'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import LoginBtn from '../LoginBtn/LoginBtn'

const RegisterForm = () => {
  const initialValues: IRegister = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is required').email('Invalid email format'),
      password: Yup.string().required('Password is required').min(6, 'Password is too short!'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      // Handle login logic here
    },
  })

  return (
    <form className="login_card_container_form" onSubmit={formik.handleSubmit}>
      <h3 className="login_card_container_form_title">Register</h3>

      <div className="login_card_container_form_inputs">
        <Input
          name="email"
          formik={formik}
          variant="secondary"
          placeholder=""
          label="Email Address"
        />

        <Input
          name="password"
          formik={formik}
          variant="secondary"
          placeholder=""
          label="Password"
          type="password"
        />

        <div className="login_card_container_form_account_group">
          <Input
            name="confirmPassword"
            formik={formik}
            variant="secondary"
            placeholder=""
            label="Confirm Password"
            type="password"
          />

          <div className="login_card_container_form_account_group_links">
            <span></span>

            <Link to={'/login'} className="login_card_container_form_account_group_links_item">
              Already have an account? Log in
            </Link>
          </div>
        </div>

        <LoginBtn>Register</LoginBtn>
      </div>
    </form>
  )
}

export default RegisterForm
