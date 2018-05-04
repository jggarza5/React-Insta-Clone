import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {dummyData} from './dummyData';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col, ListGroup } from 'reactstrap';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dummyData: [],
        searchPosts: []
      };
      this.search = this.search.bind(this);
    };

    componentDidMount() {
      this.setState({ dummyData: dummyData });
      this.setState({ searchPosts: dummyData });
    }

    search(user) {
      const searchPosts = this.state.dummyData.filter(post => post.username.includes(user));
      if (user === '') {
          this.setState({ searchPosts: dummyData });
        } else {
          this.setState({ searchPosts: searchPosts });
        }
      }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar className="search" search={this.search} />
        </header>
        
        
        <div className="Posts">
        {this.state.searchPosts.map((post, index) => {
          return (
            <PostContainer key={index} post={post}/>        
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
