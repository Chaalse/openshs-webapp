import { FC, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import Card from "../../shared/components/Card/Card"
import { CustomButton } from "../../shared/components/CustomButton/CustomButton";
import { CustomInput } from "../../shared/components/CustomInput/CustomInput";
import { Constantes } from "../../shared/constants/Constantes";
import { AuthContext } from "../../shared/contexts/AuthContext";
import '../scss/SigninView.scss';



export const SigninFormView: FC<{}> = () => {

  const { createAccount } = useContext(AuthContext);

  const errorsKeyValue: { [key: string]: boolean } = {
    'name': false,
    'email': false,
    'password': false,
    'confirmPassword': false
  };

  const [errors, setErrors] = useState(errorsKeyValue);

  const [name, setName] = useState<string>('');

  const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onChangeName = (value: string) => {
    setName(value);
  }

  const onChangeEmail = (value: string) => {
    setEmail(value);
  }

  const onChangePassword = (value: string) => {
    setPassword(value);
  }

  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  }

  const validate = () => {
    let tempErrors = { ...errors };
    if (password !== confirmPassword) {
      tempErrors['confirmPassword'] = true;
    } else if (tempErrors['confirmPassword']) {
      tempErrors['confirmPassword'] = false;
    }

    if (password.length < 8) {
      tempErrors['password'] = true;
    } else if (tempErrors['password']) {
      tempErrors['password'] = false;
    }

    if (!email.match(Constantes.EMAIL_REGEX)) {
      tempErrors['email'] = true;
    } else if (tempErrors['email']) {
      tempErrors['email'] = false;
    }
    setErrors(tempErrors);

    return !errors['email'] && !errors['password'] && !errors['confirmPassword'];

  }

  const handleCreate = () => {
    if (validate()) {
      createAccount(email, password);
    }
  }

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
                value={name}
                onChange={(e: string) => onChangeName(e)}
                placeholder="Username"
              />
            </div>
            <div className={'form__fields__flexbox'}>
              <CustomInput
                icon="account_circle"
                value={email}
                onChange={(e: string) => onChangeEmail(e)}
                placeholder="Email"
              />
              {errors['email'] && <span className="field-error">Invalid email addres</span>}
            </div>
            <div className={'form__fields__flexbox'}>
              <CustomInput
                icon={'lock'}
                type={'password'}
                value={password}
                onChange={(e: string) => onChangePassword(e)}
                placeholder={'Password'}
              />
              {errors['password'] && <span className="field-error">Password must be at least 8 characters</span>}
            </div>
            <div className={'form__fields__flexbox'}>
              <CustomInput
                icon={'lock'}
                type={'password'}
                value={confirmPassword}
                onChange={(e: string) => onChangeConfirmPassword(e)}
                placeholder={'Confirm password'}
              />
              {errors['confirmPassword'] && <span className="field-error">Passwords don't match</span>}
            </div>
          </div>
          <div className="form__actions">
            <CustomButton
              text="CREATE"
              onClick={handleCreate}
            />
            <span className={'form__actions__span form__actions__span--first'}>
              <span className={'link'}
                onClick={() => navigate(Constantes.CHANGEPASS_PATH)}>Have you forgotten your password?
              </span>
            </span>
          </div>
        </Card>
      </div>
    </Card>
  )
}