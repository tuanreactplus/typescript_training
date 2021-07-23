import React,{useEffect, useState} from "react";

interface OptionSelect {
    label : string | React.ReactNode,
    value : any
}

interface SelectProps{
    onChange?: (value?:string)=>void,
    placeholder?: string,
    options: OptionSelect[],
    value? :string,
}

export const Select : React.FC<SelectProps> = (props) => {
    const { onChange=() => {}, placeholder= '', options = [], value } = props;
    const [selectValue, setSelectValue] =useState<string>();

    const handleOnChange=(value:string) => {
        setSelectValue(value);
        onChange(selectValue);
    };

    useEffect(() => {
        if(value !== undefined && selectValue !== value) {
            setSelectValue(value)
        }
    }, [value])


    return (
        <select placeholder={placeholder} value={selectValue} onChange={(e) => handleOnChange(e.target.value)}>
            {options.map((item, index) => {
                return(
                    <option key={index} value={item.value}>{item.label}</option>
                )
            })}
        </select>
    );
};