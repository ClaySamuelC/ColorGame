function ColorNode({node}) {
  return (
    <div
    id={'' + node.y + node.x}
    className='colorNode'
    style={{backgroundColor: ('rgb(' + node.color.red + ', ' + node.color.green + ', ' + node.color.blue + ')')}}
    >
      <span className='locked'>
        {node.locked ? 'x' : ''}
      </span>
    </div>
  )
}

export default ColorNode;