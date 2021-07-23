interface LabelProps  {
    text?: string;
    style?: any
}
export const Label = (props: LabelProps) => {
    const {text, style={}} = props;
    return(
        <label style={style}>{text}</label>
    )
}