import { FC, useEffect, useState } from "react";
import Card from "../../../../shared/components/Card/Card";
import { CustomButton } from "../../../../shared/components/CustomButton/CustomButton";
import { CustomInput } from "../../../../shared/components/CustomInput/CustomInput";

export type ColumnProps = {
    id?: number,
    header: string,
}

type DatasetColumnsFormProps = {
    columns: ColumnProps[],
    handleAdd: () => void
    handleRemove: (index: number) => void
}

export const DatasetColumnsFormView: FC<DatasetColumnsFormProps> = ({
    columns,
    handleAdd,
    handleRemove
}) => {

    const [disableAdd, setdisableAdd] = useState<boolean>(false);

    useEffect(() => {
        setdisableAdd(columns.length > 7);
    });
    

    return (
        <Card
            type="inner"
            title="Activities settings"
            className="simulator_settings"
        >
            <div className="dataset_settings">
                {columns.map((column, i) => {
                    return (
                        <div className="dataset_field">
                            <CustomInput
                                className={'dataset_input'}
                            />
                            {i == 0 &&
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
                                    onClick={() => handleRemove(column.id!)}
                                />}
                        </div>
                    )
                })}

            </div>

        </Card>
    )
}