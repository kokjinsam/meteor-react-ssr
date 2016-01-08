export default class Board extends React.Component {
  render() {
    return (
      <div className="board">
        {this.props.children || 'OHHH'}
      </div>
    );
  }
}
