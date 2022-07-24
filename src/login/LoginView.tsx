import { FC } from "react"
import { useNavigate } from "react-router-dom";
import Card from "../shared/components/Card/Card"
import { CustomButton } from "../shared/components/CustomButton/CustomButton";
import { CustomInput } from "../shared/components/CustomInput/CustomInput";
import { Constantes } from "../shared/constants/Constantes";
import './scss/LoginView.scss';



export const LoginView: FC<{}> = () => {

  const navigate = useNavigate();
  return (
    <Card
      type="main"
      header={{ title: 'OpenSHS Web App' }}
      className={'login'}
    >
      <div className={'login__inner'}>
        <Card
          type="inner"
          header={{ title: 'Login' }}
          className={'form'}
        >
          <div className="form__fields">
            <div className={'form__fields__flexbox'}>
              <CustomInput
                icon="account_circle"
                placeholder="Username"
              />
            </div>
            <div className={'form__fields__flexbox'}>
              <CustomInput
                icon={'lock'}
                type={'password'}
                placeholder={'Password'}
              />
            </div>
          </div>
          <div className="form__actions">
            <CustomButton
              text="LOG IN"
              onClick={() => { }}
            />
            <span className={'form__actions__span form__actions__span--first'}>
              <a className={'link'}
                onClick={() => navigate(Constantes.CHANGEPASS_PATH)}>
                Have you forgotten your password?
              </a>
            </span>
            <span className={'form__actions__span form__actions__span--first'}>
              <a className={'link'}
                onClick={() => navigate(Constantes.REGISTER_PATH)}>
                Don't have an account? Sign in
              </a>
            </span>
          </div>
        </Card>
      </div>
    </Card>
  )
}