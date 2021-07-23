import {ReactNode} from "react";
interface FormProps {
    onSubmit?: (event:any) => void;
    children?: ReactNode
}
export const Form = (props: FormProps) => {
    const {onSubmit = () => {}, children} = props;
    return(
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}