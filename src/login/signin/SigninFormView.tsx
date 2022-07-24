import { FC } from "react"
import { useNavigate } from "react-router-dom";
import Card from "../../shared/components/Card/Card"
import { CustomButton } from "../../shared/components/CustomButton/CustomButton";
import { CustomInput } from "../../shared/components/CustomInput/CustomInput";
import { Constantes } from "../../shared/constants/Constantes";
import '../scss/SigninView.scss';



export const SigninFormView: FC<{}> = () => {

  const navigate = useNavigate();
  return (
    <Card
      type="main"
      header={{ title: 'OpenSHS Web App' }}
      className={'signin'}
    >
      <div className={'signin__inner'}>
        <Card
          type="inner"
          header={{ title: 'Register' }}
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
                icon="account_circle"
                placeholder="Email"
              />
            </div>
            <div className={'form__fields__flexbox'}>
              <CustomInput
                icon={'lock'}
                type={'password'}
                placeholder={'Password'}
              />
            </div>
            <div className={'form__fields__flexbox'}>
              <CustomInput
                icon={'lock'}
                type={'password'}
                placeholder={'Confirm password'}
              />
            </div>
          </div>
          <div className="form__actions">
            <CustomButton
              text="CREATE"
              onClick={() => { }}
            />
            <span className={'form__actions__span form__actions__span--first'}>
              <a className={'link'}
                onClick={() => navigate(Constantes.CHANGEPASS_PATH)}>Have you forgotten your password?
              </a>
            </span>
          </div>
        </Card>
      </div>
    </Card>
  )
}