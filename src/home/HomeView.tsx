import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../shared/components/Card/Card";
import { Constantes } from "../shared/constants/Constantes";

const HomeTitle = "Open Smart Home Simulator";

const HomeView: FC<{}> = () => {

    const navigate = useNavigate();

    return (
        <Card
            type={'main'}
            header={{
                title: HomeTitle,
                button: {
                    text: 'LOG IN',
                    onClick: () => navigate(Constantes.LOGIN_PATH)
                }
            }}
            className="home" />
    )
}

export default HomeView;