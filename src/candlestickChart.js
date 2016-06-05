import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class BubbleChart extends Component {
  render() {
    return (
      <View style={this.styles()}>
        <View style={this.outerLength()}></View>
       
        <View style={this.outerLength()}></View>

      </View>
    );
  }
  styles() {
    return {
      // width:this.props.width,
      // height:this.props.height,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'white',
      transform: [
        {rotate: '270deg'}
      ]
    };
  }
  outerLength(){
    return {
      backgroundColor:'rgb('+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255)+')',
      width: 50,
      height: 1,
      margin: 5
    };
  }
}

module.exports = BubbleChart;