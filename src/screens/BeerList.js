import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import Axios from 'axios'
import BeerData from './SingleData'
import Card from '../components/Card'
export default class MyComponent extends Component {
  state={
    beers:[]
  }
  componentWillMount(){
// axios.get('https //rallycoding.herokuapp.com/api/music_beers').then(response=>console.log(response))
Axios.get('https://api.punkapi.com/v2/beers')
    .then((response) => this.setState({beers:response.data}))

      }

      renderbeers(){
      return  this.state.beers.map(beers=>
        

<BeerData navigation={() => this.props.navigation.navigate("Description",{data:beers})}  key={beers.id}  beers={beers}/>
        

      )
      }
  render() {
    console.log(this.state)
    return (
      <ScrollView>
     <View>

    {this.renderbeers()}
          </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
justifyContent:'center',
alignItems:'center',
  },
});