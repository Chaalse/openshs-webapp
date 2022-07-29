import { FC } from "react"
import { useNavigate } from "react-router-dom";
import Card from "../../shared/components/Card/Card"
import { CustomButton } from "../../shared/components/CustomButton/CustomButton";
import { CustomInput } from "../../shared/components/CustomInput/CustomInput";
import { Constantes } from "../../shared/constants/Constantes";
import '../scss/RecoverPassView.scss';



export const RecoverPassView: FC<{}> = () => {

  const navigate = useNavigate();
  return (
    <Card
      type="main"
      header={{ title: 'OpenSHS Web App' }}
      className={'recover'}
    >
      <div className={'recover__inner'}>
        <Card
          type="inner"
          header={{ title: 'Change password' }}
          className={'form'}
        >
          <div className="form__fields">
            <div className={'form__fields__flexbox'}>
              <CustomInput
                icon="lock"
                type="passowrd"
                placeholder="New password"
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
              text="CHANGE"
              onClick={() => { }}
            />
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