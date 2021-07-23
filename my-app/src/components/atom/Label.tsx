interface LabelProps  {
    text?: string;
}
export const Label = (props: LabelProps) => {
    const {text} = props;
    return(
        <label>{text}</label>
    )
}