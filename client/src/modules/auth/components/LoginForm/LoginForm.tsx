import Input from '@src/modules/shared/components/Input/Input'
import { ILogin } from '../../types/login'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import LoginBtn from '../LoginBtn/LoginBtn'
import { message } from 'antd'
import { useAppDispatch } from '@src/modules/shared/store'
import { login } from '../../data/authThunk'
import { useState } from 'react'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const initialValues: ILogin = {
    email: '',
    password: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is required').email('Invalid email format'),
      password: Yup.string().required('Password is required').min(6, 'Password is too short!'),
    }),
    onSubmit: (values) => {
      setIsLoading(true)

      dispatch(login(values))
        .unwrap()
        .then(() => {
          message.success('Welcome back')
          navigate('/dashboard')
        })
        .catch((error) => {
          message.error(error?.message || 'Login failed')
        })
        .finally(() => {
          setIsLoading(false)
          formik.resetForm()
        })
    },
  })

  return (
    <form className="login_card_container_form" onSubmit={formik.handleSubmit}>
      <h3 className="login_card_container_form_title">Log In</h3>

      <div className="login_card_container_form_inputs">
        <Input
          name="email"
          formik={formik}
          variant="secondary"
          placeholder=""
          label="Email Address"
        />
        <div className="login_card_container_form_account_group">
          <Input
            name="password"
            formik={formik}
            variant="secondary"
            placeholder=""
            label="Password"
            type="password"
          />

          <div className="login_card_container_form_account_group_links">
            <Link
              to={'/forgot-password'}
              className="login_card_container_form_account_group_links_item"
            >
              Forget Password?
            </Link>
            <Link to={'/register'} className="login_card_container_form_account_group_links_item">
              Don't Have An Account?
            </Link>
          </div>
        </div>

        <LoginBtn isLoading={isLoading}>LOG IN</LoginBtn>
      </div>
    </form>
  )
}

export default LoginForm
