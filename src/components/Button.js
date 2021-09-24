const Button = ({color, text, toggleAddBtn}) => {
    return (
        <button style={{ backgroundColor: color}} 
                className='btn' onClick={toggleAddBtn}>
                    {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

export default Button
