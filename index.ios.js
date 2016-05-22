/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import BarChart from './src/barchart.js'
import ScatterPlot from './src/scatterplot.js'
import PieChart from './src/piechart.js'
import StrengthDiagram from './src/strengthdiagram.js'

let data = [];
for(let i = 0; i<50; i++){
  data.push(Math.floor(Math.random()*200))
}
let data2 = [];
for(let i = 0; i<50; i++){
  data2.push([5+Math.floor(Math.random()*240),5+Math.floor(Math.random()*240)])
}
let data3 = []
let rand = 4+Math.floor(Math.random()*3)
for(let i=0;i<rand;i++){
  data3.push(60+Math.floor(Math.random()*40))
}
class chart extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<View style={styles.barchart}>
          {this.barChart()}
        </View>
        <ScatterPlot width={250} height={250} data={data2}/>
        <PieChart />*/}
        <StrengthDiagram data={data3}/>
      </View>
    );
  }
  barChart(){
    return data.map((height)=>{
      return <BarChart height={height} key={Math.random()} />
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FCFF',
  },
  barchart: {
    width: 250,
    height: 250,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    transform: [
      {rotate: '270deg'}
    ]
  },
});

AppRegistry.registerComponent('chart', () => chart);
