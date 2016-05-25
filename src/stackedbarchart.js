import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
data = [[4,3,2],[1,4,3],[5,2,3],[5,4,3],[4,3,3],[4,3,1]]
class StackedBarChart extends Component {
  render() {
    return (
      <View style={this.style()}>
        {this.stackedbar()}        
      </View>    
    );
  }
  stackedbar(){
    return this.props.data.map((item, index)=>{
      return <SingleStack key={index} data = {item} index={index}/>
    })
  }
  style(){
    return {
      width:this.props.width || 250,
      height:this.props.height || 250,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'white',
      transform: [
        {rotate: '270deg'}
      ]
    }
  }
}

class SingleStack extends Component {
  render(){
    return(
      <View style={this.style()}>
        {this.singleBar()}
      </View>    
    )
  }
  singleBar(){
    let sum = this.props.data.reduce(function(a, b) { return a + b; })
    return this.props.data.map((data,index)=>{
      return <SingleBar key={this.props.index*100 + index} height={(data/sum)*250} color={index}/>
    })
      // (data/sum)*250
  }
  style(){
    return{
      position:'absolute',
      top:-120+12*this.props.index,
      left:120,
      transform: [
        {rotate: '270deg'}
      ]
    }
  }
}

class SingleBar extends Component {
  render() {
    return (
      <View style = {this.style()}>
      </View>
    )
  }
  style(){
    color=['red','green','orange','teal','purple']
    return{
      width: 10,
      height: this.props.height,
      backgroundColor: color[this.props.color],    
    }
  }
}

module.exports = StackedBarChart