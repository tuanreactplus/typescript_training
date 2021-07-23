interface ButtonProps{
    text?: string;
    onClick?: () => void;
}
export const Button = (props: ButtonProps) => {
    const {text= 'Sign in', onClick = () => {}} = props;

    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}
