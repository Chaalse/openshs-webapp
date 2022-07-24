import classNames from "classnames";
import { FC, useState } from "react";
import Icon from "../CustomIcon/Icon";

import './CustomInput.scss';

type CustomInputProps = {
    divClassname?: string,
    className?: string
    text?: string,
    type?: string,
    value?: string,
    checked?: boolean,
    ref?: any,
    index?: number,
    placeholder?: string,
    icon?: string,
    onChange?: (value: string, index?: number) => void
    onChecked?: () => void,
}


export const CustomInput: FC<CustomInputProps> = ({
    divClassname,
    className,
    text,
    type,
    checked,
    value,
    ref,
    index,
    placeholder,
    icon,
    onChange,
    onChecked
}) => {

    const [inputValue, setInputValue] = useState<string>();

    const onInputChange = (value: string) => {
        if (onChecked) { onChecked(); return; }
        if (onChange) { onChange(value, index); return; }
        setInputValue(value);
    }

    const classes = classNames(`custom-input__field ${icon ? 'custom-input__field--iconed' : ''}`, className);
    const divClass = classNames('custom-input', divClassname ?? '')
    return (
        <div className={divClass}>
            {text && <label className="custom-input__label">{text}</label>}
            {icon && <Icon icon={icon}></Icon>}
            <input
                ref={ref}
                className={classes}
                value={value ?? inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                type={type ?? 'text'}
                checked={checked}
                placeholder={placeholder}
            />

        </div>)
}