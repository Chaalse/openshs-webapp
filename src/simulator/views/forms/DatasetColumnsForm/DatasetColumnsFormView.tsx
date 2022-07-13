import { FC, useEffect, useState } from "react";
import Card from "../../../../shared/components/Card/Card";
import { CustomButton } from "../../../../shared/components/CustomButton/CustomButton";
import { CustomInput } from "../../../../shared/components/CustomInput/CustomInput";
import { ColumnProps } from "./DatasetColumnsFormDataContainer";


type DatasetColumnsFormProps = {
    columns: ColumnProps[],
    handleAdd: () => void
    handleRemove: (index: number) => void
    handleInputChange: (value: string, index: number) => void
}

export const DatasetColumnsFormView: FC<DatasetColumnsFormProps> = ({
    columns,
    handleAdd,
    handleInputChange,
    handleRemove
}) => {

    const [disableAdd, setdisableAdd] = useState<boolean>(false);

    useEffect(() => {
        setdisableAdd(columns.length > 7);
    }, [columns.length]);
    
    return (
        <Card
            type="inner"
            className="simulator_settings"
            header={{title: 'Dataset columns', icon:'help'}}
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