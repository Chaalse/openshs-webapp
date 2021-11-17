import { FC, useState } from "react";
import ActivitiesBoxView from "./ActivitiesBoxView";

type ActivityBoxProps = {

}

const ActivitiesBoxDataContainer: FC<ActivityBoxProps> = ({}) => {

    const [userLabels, setUserLabels] = useState<string[]>([]);

    const handleSubmitLabels = (labels: string[], tab?:  string) =>{
        setUserLabels(labels);
        return
    }

    return (
        <ActivitiesBoxView
            activityLabels={userLabels}
            handleSubmitLabels={handleSubmitLabels}
        />
    )
}

export default ActivitiesBoxDataContainer