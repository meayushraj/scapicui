import React from 'react';
import './App.css';
import CardModel from './component/card.models';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      visible: 2,
    };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    // fetch("https://s3.ap-south-1.amazonaws.com/scapic-others/json/models.json")
    fetch("http://localhost:3004/url")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.categories
          });
        },
        (error) => {
        }
      )
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 2 };
    });
  }

  render() {
    return (
      <div className="App-container" >
        {this.state.items.slice(0, this.state.visible).map((md, index) => (
          <CardModel key={index} name={md.name} models={md.models} />
        ))}

        {this.state.visible < this.state.items.length &&
          <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
        }

      </div>
    );
  }
}

export default App;
