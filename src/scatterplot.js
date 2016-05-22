import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class ScatterPlot extends Component {
  render() {
    return (
      <View style={this.style()}>
        {this.point()}
      </View>    
    );
  }
  style(){
    return {
      width:this.props.width,
      height:this.props.height,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'white',
      transform: [
        {rotate: '270deg'}
      ]
    }
  }
  point(){
    return this.props.data.map((data)=>{
      return <Circle key={Math.random()} y={data[0]} x={data[1]}/>
    })
  }
}

class Circle extends Component {
  render(){
    return <View style={this.style()} />
  }
  color(){
    var rand = '';
    while (rand.length < 7) {
      rand += (Math.random()).toString(16).substr(-6).substr(-1)
    }
    return '#'+rand;
  }
  style(){
    return{
      width: 5,
      height: 5,
      borderRadius: 5/2,
      top: this.props.y,
      left: this.props.x,
      position: 'absolute',
      backgroundColor: 'rgb('+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255)+')',
    }
  }
}

module.exports = ScatterPlot