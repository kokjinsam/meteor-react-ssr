export default class SSR extends React.Component {
  render() {
    return (
      <div className="ssr">
        {this.props.children || 'SSR'}
      </div>
    );
  }
}
