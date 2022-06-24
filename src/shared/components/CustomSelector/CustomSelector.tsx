import classNames from "classnames";
import { FC } from "react";
import { CustomButton } from "../CustomButton/CustomButton";

type SelectableOptions = {
    id: string,
    text: string
}

type CustomSelectorProps = {
    className?: string
    options: SelectableOptions[]
}

export const CustomSelector: FC<CustomSelectorProps> = ({
    className
}) => {

    const classes =  classNames('custom_selector', className)
    return (
        <div className={classes}>
            
        </div>
    )
}