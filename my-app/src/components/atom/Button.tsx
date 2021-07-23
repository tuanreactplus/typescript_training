import {ReactNode} from "react";

interface ButtonProps{
    onClick?: () => void,
    children?: ReactNode,
    style?: any
}
export const Button = (props: ButtonProps) => {
    const {children, onClick = () => {}, style = {}} = props;

    return(
        <button style={style} onClick={onClick}>
            {children}
        </button>
    )
}
