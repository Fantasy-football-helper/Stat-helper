import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class StrengthDiagram extends Component {
  render() {
    console.log(this.props.data)
    return (
      <View style={this.style()}>
        {this.piece()}
        <Circle x={120} y={120}/>
      </View>    
    );
  }
  raa(){
    return {

    }
  }
  piece(){
    let data = this.props.data.slice();
    return data.map((item,index,array)=>{
      let second = data[index+1];
      if(!data[index+1]){
        second = data[0];
      }
      console.log(data.length, item, second, index*360/data.length)
      return <Cone 
        key={index}
        partition={data.length} 
        first_side={item}
        second_side={second}
        rotate={index*360/data.length}
        />
    })
  }
  style(){
    return {
      width:250,
      height:250,
      // justifyContent: 'center',
      // alignItems: 'center',
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
    let x1 = this.props.second_side*Math.cos(2*Math.PI/this.props.partition);
    let x2 = this.props.first_side-this.props.second_side*Math.cos(2*Math.PI/this.props.partition);
    let y = this.props.second_side*Math.sin(2*Math.PI/this.props.partition);
    return {
      width: 0,
      height: 0,
      borderLeftWidth: x1,
      borderLeftColor: 'transparent',
      borderRightWidth: x2,
      borderRightColor: 'transparent',
      borderTopWidth: y,
      borderTopColor: 'teal',
      position: 'absolute',
      top:125,
      left:125,
      transform: [
        { translateX:-(x1+x2)/2},
        { translateY:-y/2},
        { rotateZ: this.props.rotate+270+'deg' },
        { translateX: (x1+x2)/2 },
        { translateY: y/2 },
      ],
    }
  }
}
class Circle extends Component {
  render(){
    return <View style={this.style()} />
  }
  style(){
    return{
      width: 10,
      height: 10,
      borderRadius: 10/2,
      top: this.props.y,
      left: this.props.x,
      position: 'absolute',
      backgroundColor: 'rgb('+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255)+')',
    }
  }
}

module.exports = StrengthDiagram