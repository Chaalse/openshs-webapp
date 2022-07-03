import classNames from "classnames";
import { FC, useState } from "react";

import './CustomInput.scss';

type CustomInputProps = {
    className?: string
    text?: string,
    type?: string,
    value?: string,
    checked?: boolean,
    ref?: any,
    onChange?: (value: string) => void
    onChecked?: () => void
}


export const CustomInput: FC<CustomInputProps> = ({
    className,
    text,
    type,
    checked,
    value,
    ref,
    onChange,
    onChecked
}) => {

    const [inputValue, setInputValue] = useState<string>();

    const onInputChange = (value: string) => {
        if (onChecked) { onChecked(); return; }
        if (onChange) { onChange(value); return; }
        setInputValue(value)
    }

    const classes = classNames('custom_input', className)
    console.log(ref)
    return (
        <div className={classes}>
            {text && <label className="custom_input-label">{text}</label>}
            <input
                ref={ref}
                className="custom_input-field"
                value={value ?? inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                type={type ?? 'text'}
                checked={checked}
            />

        </div>)
}