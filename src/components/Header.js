const Header = ({headText, leftChild, rightChild}) => {
    return <hader>
        <div className="head_btn_left">
            {leftChild}
        </div>
        <div className="head_text">
            {headText}
        </div>
        <div className="head_btn_right">
            {rightChild}
        </div>
    </hader>
}

export default Header;