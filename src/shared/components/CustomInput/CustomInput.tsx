import classNames from "classnames";
import { FC, useState } from "react";

import './CustomInput.scss';

type CustomInputProps = {
    className?: string
    text?: string,
    type?: string,
    checked?: boolean,
    onChecked?: () => void
}


export const CustomInput: FC<CustomInputProps> = ({
    className,
    text,
    type,
    checked,
    onChecked
}) => {

    const [inputValue, setInputValue] = useState<string>();

    const onInputChange = (value: string) => {
        if (onChecked) { onChecked(); return;}
        setInputValue(value)
    }

    const classes = classNames('custom_input', className)
    return (
        <div className={classes}>
            {text && <label className="custom_input-label">{text}</label>}
            <input 
                className="custom_input-field"
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                type={type ?? 'text'}
                checked={checked}
                />

        </div>)
}