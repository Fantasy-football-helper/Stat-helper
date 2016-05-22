
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class BarChart extends Component {
  render() {
    return (
      <View style={this.style()}>
      </View>
    );
  }
  style(){
    return {
      backgroundColor:'rgb('+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255)+')',
      width: this.props.height,
      height: 5,
    }
  }
  color(){
    var rand = '';
    while (rand.length < 7) {
      rand += (Math.random()).toString(16).substr(-6).substr(-1)
    }
    return '#'+rand;
  }
}


module.exports = BarChart