import React from 'react';

class ColorNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isClicked: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.props.node.locked) {
      this.setState(state => ({
        isClicked: !state.isClicked
      }));
    }
  }

  render() {
    return (
      <div
        id={'' + this.props.node.y + this.props.node.x}
        style={{backgroundColor: ('rgb(' + this.props.node.color.red + ', ' + this.props.node.color.green + ', ' + this.props.node.color.blue + ')')}}
        className = {'colorNode' + (this.state.isClicked ? ' clicked' : '')}
        onClick={this.handleClick}
      >
        <span className='locked'>
          {this.props.node.locked ? 'x' : ''}
        </span>
      </div>
    );
  }
}

export default ColorNode;