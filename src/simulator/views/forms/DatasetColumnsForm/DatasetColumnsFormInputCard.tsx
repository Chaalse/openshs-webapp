import { useContext, useEffect, useState } from "react"
import Card from "../../../../shared/components/Card/Card"
import { CustomButton } from "../../../../shared/components/CustomButton/CustomButton"
import { CustomInput } from "../../../../shared/components/CustomInput/CustomInput"
import { HelpersContext } from "../../../SimulatorDataContainer"
import { ColumnProps } from "./DatasetColumnsFormDataContainer"



type DCFInputCardProps = {
    columns: ColumnProps[],
    handleAdd: () => void
    handleRemove: (index: number) => void
    handleInputChange: (value: string, index: number) => void
}

export const DatasetColumnsFormInputCard = (props: DCFInputCardProps) => {

    const [disableAdd, setdisableAdd] = useState<boolean>(false);

    const { columnsHelper } = useContext(HelpersContext);

    const { columns, handleAdd, handleRemove, handleInputChange } = props;

    useEffect(() => {
        setdisableAdd(columns.length > 8);
    }, [columns.length]);

    return (
        <Card
            type="small"
            className="simulator_settings animate__animated animate__flipInY"
            header={{title: 'Dataset columns', icon:'info', onIconClick: columnsHelper.setDisplay}}
        >
            <div className="dataset_settings">
                {columns.map((column, i) => {
                    return (
                        <div className="dataset_field" key={`field-${i}`}>
                            <CustomInput
                                value={column.value}
                                index={i}
                                onChange={(e) => handleInputChange(e, i)}
                                className={'dataset_input'}
                            />
                            {i === 0 &&
                                <CustomButton
                                    icon="add"
                                    className="dataset_add-btn"
                                    onClick={handleAdd}
                                    disabled={disableAdd}
                                />
                            }
                            {i > 0 &&
                                <CustomButton
                                    icon="remove"
                                    className="dataset_add-btn"
                                    onClick={() => handleRemove(i)}
                                />}
                        </div>
                    )
                })}

            </div>

        </Card>
    )
}