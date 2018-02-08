/*

для работы es lint
вставить в рулз
(В Atom уже установленно расширение linter)
{
  enforce: "pre",
  test: /\.jsx?$/,
  loader: "eslint-loader",
  exclude: path.resolve(__dirname, "node_modules")
},

для отображения содержимого файла data.json
<pre>
  <code>{JSON.stringify(data, null, 4)}</code>
</pre>



*/

// После wrapper в элементе showCard
<input
  type="button"
  onClick={props.handleSetDetailsPageChange}
  value={`/details/${props.ID}`}
  href={props.detailsPage}
/>;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

ReactDOM.render(<Timer />, mountNode);
