function ColorNode(props) {
  return (
    <div
    id={'' + props.color.y + props.color.x}
    className='colorNode'
    style={{backgroundColor: ('rgb(' + props.color.color.red + ', ' + props.color.color.green + ', ' + props.color.color.blue + ')')}}
    >
      <span className='locked'>
        {props.color.locked ? 'x' : ''}
      </span>
    </div>
  )
}

export default ColorNode;