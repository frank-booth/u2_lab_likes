

const Likes = (props) => {
    
    return (
        <div>
            <button className='plus' type='button' onClick={props.plus}>👍</button>
            <button className='minus' type='button' onClick={props.minus}>👎</button>
        </div>
    )
}

export default Likes