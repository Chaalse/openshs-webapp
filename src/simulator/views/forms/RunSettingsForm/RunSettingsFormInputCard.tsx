import { FC, useContext, useState } from "react";
import Card from "../../../../shared/components/Card/Card";
import { CustomInput } from "../../../../shared/components/CustomInput/CustomInput";
import { HelpersContext } from "../../../SimulatorDataContainer";



export const RunSettingsFormInputCard: FC<{}> = () => {

    const [isMorning, setIsMorning] = useState<boolean>(true)

    const handleMorningCheck = () => {
        setIsMorning(!isMorning);
    }

    const [isWeekday, setIsWeekday] = useState<boolean>(true)

    const handleWeekdayCheck = () => {
        setIsWeekday(!isWeekday);
    }

    const { settingsHelper } = useContext(HelpersContext);

    return (
        <Card
            type="small"
            header={{ title: 'Simulation settings', icon: 'info', onIconClick: settingsHelper.setDisplay }}
            className="simulation animate__animated animate__flipInY"
        >
            <div className="simulation__fields">
                <div className="days-margin">
                    <CustomInput
                        text="Days"
                        className="simulation__fields__input simulation__fields__input--days"
                    />
                    <CustomInput
                        text="Margin"
                        className="simulation__fields__input simulation__fields__input--margin"
                    />

                </div>
                <CustomInput
                    text="Start date"
                    type="date"
                />
                <CustomInput
                    text="Start hour"
                    type="time"
                    className="simulation__fields__input simulation__fields__input--hour"
                />
            </div>
            <div className="simulation__checks">
                <div className="simulation__checks__row">
                    <label>Time slot</label>
                    <CustomInput
                        text="Morning"
                        type="checkbox"
                        divClassname="checkbox"
                        checked={isMorning}
                        onChecked={handleMorningCheck}
                    />
                    <CustomInput
                        text="Evening"
                        type="checkbox"
                        divClassname="checkbox"
                        checked={!isMorning}
                        onChecked={handleMorningCheck}
                    />
                </div>
                <div className="simulation__checks__row">
                    <label>Day context</label>
                    <CustomInput
                        text="Weekday"
                        type="checkbox"
                        divClassname="checkbox"
                        checked={isWeekday}
                        onChecked={handleWeekdayCheck}
                    />
                    <CustomInput
                        text="Weekend"
                        type="checkbox"
                        divClassname="checkbox"
                        checked={!isWeekday}
                        onChecked={handleWeekdayCheck}
                    />
                </div>
            </div>
        </Card>
    )
}