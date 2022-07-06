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
    index?: number,
    onChange?: (value: string, index?: number) => void
    onChecked?: () => void
}


export const CustomInput: FC<CustomInputProps> = ({
    className,
    text,
    type,
    checked,
    value,
    ref,
    index,
    onChange,
    onChecked
}) => {

    const [inputValue, setInputValue] = useState<string>();

    const onInputChange = (value: string) => {
        if (onChecked) { onChecked(); return; }
        if (onChange) { onChange(value, index); return; }
        setInputValue(value);
    }

    const classes = classNames("custom_input-field", className)
    return (
        <div className={'custom_input'}>
            {text && <label className="custom_input-label">{text}</label>}
            <input
                ref={ref}
                className={classes}
                value={value ?? inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                type={type ?? 'text'}
                checked={checked}
            />

        </div>)
}