interface Props {
  children?: React.ReactNode
}

const LoginBtn = ({ children }: Props) => {
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

      <button className="login_card_container_form_button">{children}</button>

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
