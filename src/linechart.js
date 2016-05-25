import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class LineChart extends Component {
  render() {
    return (
      <View style={this.style()}>
        {this.point()}
        {this.line()}
      </View>    
    );
  }
  style(){
    return {
      width:this.props.width || 250,
      height:this.props.height || 250,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'white',
      // transform: [
      //   {rotate: '180deg'}
      // ]
    }
  }
  line(){
    return this.props.data.map((data, index, array)=>{
      return <Line key={'line'+index} y={data} x={index*15} endpoints={[data, array[index+1]]} />
    })

  }
  point(){
    return this.props.data.map((data, index)=>{
      return <Circle key={'endpoint'+index} y={data} x={index*15}/>
    })
  }
}
class Line extends Component {
  render(){
    return <View style={this.style()} />
  }
  style(){
    let x = 1;
    let y = this.distance(this.props.endpoints);
    return{
      width: x,
      height: y, 
      borderRadius: 1,
      top: 250-this.props.y,
      left: this.props.x,
      position: 'absolute',
      backgroundColor: 'teal',
      transform: [
        { translateX:-(x)/2},
        { translateY:-y/2},
        { rotateZ: this.angle(this.props.endpoints)},
        { translateX: x/2 },
        { translateY: y/2 },
      ],
    }
  }
  angle(array){
    if(array[0]>array[1]){
      return (-Math.atan(15/(array[0]-array[1])) ) + 'rad'    
    } else {
      return (Math.atan(15/(array[1]-array[0]))+Math.PI) + 'rad'          
    }
  }
  distance(array){
    return Math.sqrt(Math.pow((array[1]-array[0]),2)+ 225)
  }
}

class Circle extends Component {
  render(){
    return <View style={this.style()} />
  }
  style(){
    return{
      width: 4,
      height: 4,
      borderRadius: 4/2,
      top: 250-this.props.y-2,
      left: this.props.x-2,
      position: 'absolute',
      backgroundColor: 'teal',
    }
  }
}

module.exports = LineChart