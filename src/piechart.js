import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class PieChart extends Component {
  render() {
    return (
      <View style={this.style()}>
        <Cone />
        <Circle y={125} x={125}/>
      </View>
    );
  }
  style(){
    return {
      width:this.props.width || 250,
      height:this.props.height || 250,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      // transform: [
      //   {rotate: '270deg'}
      // ]
    }
  }
}

class Cone extends Component {
  render() {
    return <View style={this.style()} />
  }
  style(){
    //70,50
    //50,80
    return {
      width: 0,
      height: 0,
      borderLeftWidth: 100,
      borderLeftColor: 'transparent',
      borderRightWidth: 100,
      borderRightColor: 'transparent',
      borderTopWidth: 200,
      borderTopColor: 'red',
      borderRadius: 100,
      // borderTopLeftRadius: 900,
      // borderTopRightRadius: 900,
      position: 'absolute',
      top:0,
      left:0,

      // transform: [
      //   {rotate: '90deg'}
      // ]

    }
  }
}
class Circle extends Component {
  render(){
    return <View style={this.style()} />
  }
  style(){
    return{
      width: 15,
      height: 15,
      borderRadius: 15/2,
      top: this.props.y,
      left: this.props.x,
      position: 'absolute',
      backgroundColor: 'blue'
    }
  }
}

module.exports = PieChart