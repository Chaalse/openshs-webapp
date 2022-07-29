import { FC, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Card from "../shared/components/Card/Card"
import { CustomButton } from "../shared/components/CustomButton/CustomButton";
import { CustomInput } from "../shared/components/CustomInput/CustomInput";
import { Constantes } from "../shared/constants/Constantes";
import { AuthContext } from "../shared/contexts/AuthContext";
import './scss/LoginView.scss';



export const LoginView: FC<{}> = () => {

  const navigate = useNavigate();

  const { user, signIn } = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (value: string) => {
    setEmail(value);
  }

  const onChangePassword = (value: string) => {
    setPassword(value);
  }

  const handleSignIn = () => {
    signIn(email, password);
  }

  useEffect(() => {
    if (user !== null) {
      navigate(Constantes.HOME_PATH);
    }
  });


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
                placeholder="Email"
                value={email}
                onChange={(e: string) => onChangeEmail(e)}
              />
            </div>
            <div className={'form__fields__flexbox'}>
              <CustomInput
                icon={'lock'}
                type={'password'}
                placeholder={'Password'}
                onChange={(e: string) => onChangePassword(e)}
              />
            </div>
          </div>
          <div className="form__actions">
            <CustomButton
              text="LOG IN"
              onClick={handleSignIn}
            />
            <span className={'form__actions__span form__actions__span--first'}>
              <span className={'link'}
                onClick={() => navigate(Constantes.CHANGEPASS_PATH)}>
                Have you forgotten your password?
              </span>
            </span>
            <span className={'form__actions__span form__actions__span--first'}>
              <span className={'link'}
                onClick={() => navigate(Constantes.REGISTER_PATH)}>
                Don't have an account? Sign in
              </span>
            </span>
          </div>
        </Card>
      </div>
    </Card>
  )
}