import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

interface Props {
  children?: React.ReactNode
  isLoading?: boolean
}

const LoginBtn = ({ children, isLoading }: Props) => {
  return (
    <div className="login_card_container_form_button_container">
      <div className="login_card_container_form_button_shape">
        <span className="login_card_container_form_button_shape_left" />
        <div className="login_card_container_form_button_shape_center">
          <span />
          <span />
        </div>
        <span className="login_card_container_form_button_shape_right" />
      </div>

      <button className="login_card_container_form_button" disabled={isLoading}>
        {isLoading ? (
          <Spin indicator={<LoadingOutlined spin style={{ color: 'white' }} />} size="small" />
        ) : null}
        {children}
      </button>

      <div className="login_card_container_form_button_shape login_card_container_form_button_shape_flipped">
        <span className="login_card_container_form_button_shape_left" />
        <div className="login_card_container_form_button_shape_center">
          <span />
          <span />
        </div>
        <span className="login_card_container_form_button_shape_right" />
      </div>
    </div>
  )
}

export default LoginBtn
