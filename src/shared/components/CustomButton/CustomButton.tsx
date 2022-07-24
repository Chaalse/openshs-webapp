import classNames from "classnames";
import { FC } from "react";
import Icon from "../CustomIcon/Icon";
import './CustomButton.scss';

type CustomButtonProps = {
    text?: string,
    icon?: string,
    onClick: () => void,
    className?: string,
    disabled?: boolean
}

export const CustomButton: FC<CustomButtonProps> = ({
    className,
    text,
    icon,
    disabled,
    onClick
}) => {

    const classes = classNames('custom-button', className)
    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {text && <label>{text}</label>}
            {icon && <Icon icon={icon} />}
        </button>
    )
}