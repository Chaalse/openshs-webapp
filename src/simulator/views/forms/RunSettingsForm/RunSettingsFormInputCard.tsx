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
            header={{title:'Simulation settings', icon: 'info', onIconClick: settingsHelper.setDisplay}}
            className="simulator_settings animate__animated animate__flipInY"
        >
            <div className="simulator_settings-AggregateSettings">
                <CustomInput
                    text="Days"
                    className="simulator_settings-input days"
                />
                <CustomInput
                    text="Margin"
                    className="simulator_settings-input margin"
                />
                <CustomInput
                    text="Start date"
                    type="date"
                    className="simulator_settings-input date"
                />
                <CustomInput
                    text="Start hour"
                    type="time"
                    className="simulator_settings-input hour"
                />
            </div>
            <div className="simulator_settings-DateTime">
                <div className="date_time-pickers">
                    <label>Time slot</label>
                    <CustomInput
                        text="Morning"
                        type="checkbox"
                        className="datetime_checkbox"
                        checked={isMorning}
                        onChecked={handleMorningCheck}
                    />
                    <CustomInput
                        text="Evening"
                        type="checkbox"
                        className="datetime_checkbox"
                        checked={!isMorning}
                        onChecked={handleMorningCheck}
                    />
                </div>
                <div className="date_time-pickers">
                    <label>Day context</label>
                    <CustomInput
                        text="Weekday"
                        type="checkbox"
                        className="datetime_checkbox"
                        checked={isWeekday}
                        onChecked={handleWeekdayCheck}
                    />
                    <CustomInput
                        text="Weekend"
                        type="checkbox"
                        className="datetime_checkbox"
                        checked={!isWeekday}
                        onChecked={handleWeekdayCheck}
                    />
                </div>
            </div>
        </Card>
    )
}