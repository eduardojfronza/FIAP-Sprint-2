
function Input(props) {
    const StyledInput = {
        backgroundColor: "#3E3E3F",
        color: "#FFFFFF",
        padding: "16px 10px",
        border: "none",
        borderRadius: "8px",
        fontSize: "18px"
    }

    return (<input style={{ ...StyledInput }} type={props.type} placeholder={props.placeholder}></input>)
}

export default Input