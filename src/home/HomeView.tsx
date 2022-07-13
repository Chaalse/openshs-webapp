import { FC } from "react";
import Card from "../shared/components/Card/Card";

const HomeTitle = "Open Smart Home Simulator";

const HomeView: FC<{}> = () => {



    return (
        <Card header={{title: HomeTitle}} className="home"/>
    )
}

export default HomeView;