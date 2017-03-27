import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MovieList from './src/components/movie-list';
import MovieDetails from './src/containers/movie-details';

import { searchMovies } from './src/api';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 0
    }
  }

  componentWillMount() {

    searchMovies('batman').then(response => {
      if (response.data.Search)
        this.setState({
          ...this.state,
          movies: response.data.Search
        });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"/>
        <MovieDetails/>
      </View>
    );
  }
}