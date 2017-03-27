//import liraries
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo';

import { getMovieDetails } from '../api';
import { ImageUrl } from '../api/api-url';
import { movieDetailsStyles } from '../styles/movie-details.style';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


// create a component
class MovieDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      details: {}
    }
  }

  componentWillMount() {
    getMovieDetails().then(response => {
      if (response.data)
        this.setState({
          ...this.state,
          details: response.data
        });
    });
  }

  render() {
    const { details } = this.state;
    if (details.title) {
      return (
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.heroPoster}>
              <Image
                style={styles.backDropImage}
                source={{ uri: `${ImageUrl}w780${details.backdrop_path}` }} />
              <LinearGradient style={styles.metadata} colors={['transparent', '#000000ff']} >
                <AnimatedCircularProgress
                  size={80}
                  width={5}
                  fill={Math.floor((parseFloat(details.vote_average) / 10) * 100)}
                  style={{ backgroundColor: 'transparent', flex:1, justifyContent: 'center',alignItems: 'center', marginBottom:40}}
                  tintColor="#ffffff"
                  backgroundColor="#ffffff33" >
                    {
                      (fill) => (<Text style={styles.points}>{details.vote_average}</Text>)
                    }
                  </AnimatedCircularProgress>
                <Text
                  style={styles.title}>
                  {details.title.toUpperCase()}
                </Text>
                <Text style={styles.smallTitle}>
                  {details.original_title}
                </Text>
              </LinearGradient>
            </View>
            <View style={styles.metadataContainer}>
              <Text style={styles.text} numberOfLines={5}>
                {details.overview}
              </Text>
            </View>
          </View>
        </ScrollView>
      );
    }
    return null;
  }
}

//make this component available to the app
export default MovieDetails;

const styles = StyleSheet.create(movieDetailsStyles);

