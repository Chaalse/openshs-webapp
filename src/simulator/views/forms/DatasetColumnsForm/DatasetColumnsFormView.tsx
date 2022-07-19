import { FC, useContext } from "react";
import { HelpersContext } from "../../../SimulatorDataContainer";
import { ColumnProps } from "./DatasetColumnsFormDataContainer";
import { DatasetColumnsFormHelpCard } from "./DatasetColumnsFormHelpCard";
import { DatasetColumnsFormInputCard } from "./DatasetColumnsFormInputCard";


type DatasetColumnsFormProps = {
    columns: ColumnProps[],
    handleAdd: () => void
    handleRemove: (index: number) => void
    handleInputChange: (value: string, index: number) => void
}

export const DatasetColumnsFormView: FC<DatasetColumnsFormProps> = (props: DatasetColumnsFormProps) => {

    const { columnsHelper } = useContext(HelpersContext);

    if (columnsHelper.display) {
        return (
            <DatasetColumnsFormHelpCard />
        )
    } else {
        return (
            <DatasetColumnsFormInputCard {...props} />
        )
    }
}