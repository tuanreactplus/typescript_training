import {useEffect, useState} from "react";

interface InputProps {
    type?: string,
    onChange?: (value: string) => void,
    value?: any,
    style?:any
}
export const Input = (props:InputProps) => {
    const {type= 'text', onChange = () => {}, style={}} = props;

    const [value, setValue] = useState('');
    const handleChange = (value: string) => {
        setValue(value);
        onChange(value);
    }
    useEffect(() => {
        setValue(value);
    }, [value])

    return(
        <input style={style} required={true} onChange={(e)=> handleChange(e.target.value)} value={value } type={type}/>
    )
}