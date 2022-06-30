import { FC, useState } from "react";
import { ColumnProps, DatasetColumnsFormView } from "./DatasetColumnsFormView";

type DatasetColumnsFormDataContainerProps = {
}

export const DatasetColumnsFormDataContainer: FC<DatasetColumnsFormDataContainerProps> = () => {

    const baseColumn: ColumnProps = { header: 'New column'};

    const [columns, setColumns] = useState<ColumnProps[]>([baseColumn]);


    const handleAddColumn = () => {
        console.log(columns.length);
        let temp = [...columns];
        temp.push({...baseColumn, id: columns.length})
        setColumns(temp);
    }

    const handleRemoveColumn = (index: number) => {
        console.log(columns)
        let temp = columns.filter(column =>  column.id !== index);
        console.log(temp)
        setColumns(temp);
    }

    return (
        <DatasetColumnsFormView
            columns={columns}
            handleAdd={handleAddColumn}
            handleRemove={handleRemoveColumn}
        />
    )
}