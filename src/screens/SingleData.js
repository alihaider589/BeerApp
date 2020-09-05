import React from 'react'
import { View, Text, StyleSheet, Image ,TouchableOpacity, Linking} from 'react-native'
import Card from '../components/Card'
import CardSection from '../components/CardSection'
import Button from '../components/Button'

const BeerData = ({beers,navigation}) => {
  const {name,tagline,image_url,image,url } = beers
  return (
  

    <Card navigation={() => navigation()}>
      <CardSection>
        <View style={{padding:10}}>
<Image 
resizeMode="center"
style={styles.thumbnailstyle  }
source={{uri:image_url}}
/>
        </View>
        <View style={styles.headercontent}>

          <Text styles={{fontSize:25}}>{name}</Text>
          <Text>{tagline}</Text>
        </View>
      </CardSection>
       
       
    </Card>

  )
}

const styles = StyleSheet.create({
  headercontent: {
    flexDirection: "column",
    justifyContent: 'space-around'
  },
  thumbnailstyle:{
    height:50,
    width:50
  },
  imageStyle:{
    height:300,
    flex:1,
    width:null
  
  },
  buttonStyle:{

  }
})
export default BeerData