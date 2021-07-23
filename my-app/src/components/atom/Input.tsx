import {useState} from "react";

interface InputProps {
    type?: string,
    maxLength?: number,
    text? :string,
    id?: string
    onChange?: (value: string) => void
}
export const Input = (props:InputProps) => {
    const {type= 'text', maxLength=10, text ='', id ='', onChange = () => {}} = props;
    const [value, setValue] = useState('');
    const handleChange = (value: string) => {
        setValue(value);
        onChange(value);
    }
    return(
        <input id={id} value={value || text } onChange={(e) => handleChange(e.target.value)} type={type} maxLength={maxLength}/>
    )
}