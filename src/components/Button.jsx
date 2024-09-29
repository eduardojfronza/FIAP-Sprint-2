
function Button(props) {
    function Variant(option) {
        switch (option) {
            case "primary":
                return {
                    backgroundColor: "#81FE88",
                    color: "#000000",
                    fontSize: "18px",
                    fontWeight: "800",
                    padding: "10px 20px",
                    border: "1px solid transparent",
                    borderRadius: "8px"
                }
            case "secondary":
                return {
                    backgroundColor: "transparent",
                    color: "#81FE88",
                    fontSize: "18px",
                    padding: "10px 20px",
                    border: "1px solid #81FE88",
                    borderRadius: "8px"
                }
            default:
                return {}
        }
    }

    return (<button style={{ ...Variant(props.variant) }} type={props.type} onClick={props.onClick}>{props.children}</button>)
}

export default Button