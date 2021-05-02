function ColorNode(props) {
  return (
    <div id={'' + props.row + props.col} className='colorNode' style={{backgroundColor: ('rgb(' + props.color.red + ', ' + props.color.green + ', ' + props.color.blue + ')')}}></div>
  )
}

export default ColorNode;