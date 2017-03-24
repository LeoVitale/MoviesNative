import Expo from 'expo';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MovieList from './src/components/movie-list';

import {searchMovies} from './src/api';

class AppExpo extends React.Component {

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
    const {movies} = this.state;
    return (
      <View style={styles.container}>
        {/*Open up App.js to start working on your app!
          Change you make will automatically reload.
          Shake your phone to open the developer menu.*/}
        <MovieList movies={movies}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

Expo.registerRootComponent(AppExpo);