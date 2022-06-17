import classNames from "classnames";
import { FC } from "react";
import Icon from "../CustomIcon/Icon";
import './CustomButton.scss';

type CustomButtonProps = {
    text?: string,
    icon?: string,
    onClick: () => void,
    className?: string
}

export const CustomButton: FC<CustomButtonProps> = ({
    className,
    text,
    icon,
    onClick
}) => {

    const classes = classNames('custom-button', className)
    return (
        <button className={classes} onClick={onClick}>
            <label>{text}</label>
            {icon && <Icon icon={icon} />}
        </button>
    )
}