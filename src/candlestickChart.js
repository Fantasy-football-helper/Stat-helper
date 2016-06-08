import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var data = [
  {
    val: 'A',
    low: 20,
    close: 25,
    open: 32,
    high: 35
  },
  {
    val: 'B',
    low: 10,
    close: 22,
    open: 35,
    high: 40
  },
  {
    val: 'C',
    low: 30,
    close: 37,
    open: 42,
    high: 48
  },
];
class Chart extends Component {
  render() {
    return <View>
    <View style={this.xaxis()}></View>
    <View style={this.yaxis()}></View>
    {this.candles()}
    </View>;
  }
  xaxis() {
    return {
      width: 200,
      height: 1,
      backgroundColor: 'red',
      position: 'relative',
      left: -30,

    };
  }
  yaxis() {
    return {
      width: 200,
      height: 1,
      backgroundColor: 'red',
      position: 'relative',
      left: -130,
      top: 99,
      transform: [
        {rotate: '270deg'}
      ]
    };
  }
  candles() {
    var self = this;
    return data.map(function(candle) {
      return <View style={self.styles()} key={candle.val}><CandleStick 
      
      low={candle.low}
      close={candle.close}
      open={candle.open}
      high={candle.high}
      /></View>;
    });
  }
  styles() {
    return {
      // width:this.props.width,
      // height:this.props.height,
      // justifyContent: 'center',
      // alignItems: 'center',
      width: 15,
      // backgroundColor: 'red',
      transform: [
        {rotate: '270deg'}
      ]
    };
  }
}
class CandleStick extends Component {

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
      // backgroundColor:'rgb('+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255)+')',
      backgroundColor: 'green',
      width: 1,
      height: this.props.high - this.props.open,
      // margin: 5,
      // position: 'relative',
      // top: 12.5,
      left: 7
    };
  }
  lowerLength(){
    return {
      // backgroundColor:'rgb('+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255)+')',
      backgroundColor: 'red',
      width: 1,
      height: this.props.close - this.props.low,
      // margin: 5,
      // position: 'relative',
      // top: -12.5,
      left: 7
    };
  }
  square() {
    return {
      width: 15,
      height: this.props.open - this.props.close,
      backgroundColor: 'rgb('+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255) +', '+ Math.floor(Math.random()*255)+')',
    };
  }
}

module.exports = Chart;