function ColorNode(props) {
  return (
    <div
    id={'' + props.node.y + props.node.x}
    className='colorNode'
    style={{backgroundColor: ('rgb(' + props.node.color.red + ', ' + props.node.color.green + ', ' + props.node.color.blue + ')')}}
    >
      <span className='locked'>
        {props.node.locked ? 'x' : ''}
      </span>
    </div>
  )
}

export default ColorNode;