//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const MovieList = (props) => {


  renderList = (movie, index) => {
    console.log(movie);
    return <Text key={index}>{movie.Title}</Text>;
  }

  return (
    <View style={styles.container}>
      {props.movies.map((movie, index) => (
        renderList(movie, index)
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

//make this component available to the app
export default MovieList;
