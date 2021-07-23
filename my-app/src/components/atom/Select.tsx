import { ReactNode, useState } from "react";

interface SelectProps{
    onChange?: (value:string)=>void,
    children?: ReactNode,
    placeholder?: string,
}
export const Select = (props: SelectProps) => {
    const { onChange=() => {}, children, placeholder= '' } = props;
    const [selectValue, setSelectValue] =useState('');
    const handleOnChange=(value:string) => {
        setSelectValue(value);
        onChange(selectValue);
    };
    return (
        <select placeholder={placeholder} name="" id="" value={selectValue} onChange={(e) => handleOnChange(e.target.value)}>
            {children}
        </select>
    );
};