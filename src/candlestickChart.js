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
        <View style={this.upperLength()}></View>
        <View style={this.square()}></View>
        <View style={this.lowerLength()}></View>
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
      // transform: [
      //   {rotate: '270deg'}
      // ]
    };
  }
  upperLength(){
    return {
      backgroundColor:'rgb('+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255)+')',
      width: 20,
      height: 1,
      margin: 5,
      position: 'relative',
      top: 12.5,
      left: 45
    };
  }
  lowerLength(){
    return {
      backgroundColor:'rgb('+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255)+')',
      width: 20,
      height: 1,
      margin: 5,
      position: 'relative',
      top: -12.5,
      left: -25
    };
  }
  square() {
    return {
      width: 50,
      height: 15,
      backgroundColor: 'rgb('+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255)+')',
    };
  }
}

module.exports = BubbleChart;