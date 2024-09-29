
function Select(props) {
    const StyledInput = {
        backgroundColor: "#3E3E3F",
        color: "#FFFFFF",
        padding: "16px 10px",
        border: "none",
        borderRadius: "8px",
        fontSize: "18px"
    }

    return (<select style={{ ...StyledInput }} type={props.type} placeholder={props.placeholder}>
        {props.options.map(item => <option key={item} value={item}>{item}</option>)}
    </select>)
}

export default Select