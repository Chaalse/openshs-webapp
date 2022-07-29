import { FC, useContext } from "react";
import Card from "../shared/components/Card/Card";
import { AuthContext } from "../shared/contexts/AuthContext";

const HomeTitle = "Open Smart Home Simulator";

const HomeView: FC<{}> = () => {

    const { button } = useContext(AuthContext);
    return (
        <Card
            type={'main'}
            header={{
                title: HomeTitle,
                button: button
            }}
            className="home" />
    )
}

export default HomeView;