import { FC, useState } from "react";
import { DatasetColumnsFormView } from "./DatasetColumnsFormView";

type DatasetColumnsFormDataContainerProps = {
}

export type ColumnProps = {
    id?: number,
    header: string,
    value: string,
}

export const DatasetColumnsFormDataContainer: FC<DatasetColumnsFormDataContainerProps> = () => {

    const baseColumn: ColumnProps = { header: 'New column', value: ''};

    const [columns, setColumns] = useState<ColumnProps[]>([baseColumn]);

    const handleInputChange = (newValue: string, index: number) => {
        console.log(columns)
        columns[index].value = newValue
        let temp = [...columns];
        setColumns(temp);
        return;
    }

    const handleAddColumn = () => {
        let temp = [...columns];
        temp.push({...baseColumn, id: columns.length})
        setColumns(temp);
    }

    const handleRemoveColumn = (index: number) => {
        console.log(columns, index)
        let temp = [...columns];
        temp.splice(columns.length === 3 ? index : columns.length > 2 ? index : 1, 1);
        console.log(temp)
        setColumns(temp);
    }

    return (
        <DatasetColumnsFormView
            handleInputChange={handleInputChange}
            columns={columns}
            handleAdd={handleAddColumn}
            handleRemove={handleRemoveColumn}
        />
    )
}