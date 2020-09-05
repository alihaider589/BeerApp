import React, { Component,useState,useEffect } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'


const Description = ({route}) => {

const [data, setData] = useState({})

useEffect(() => {
    const data = route.params.data

    setData(data)


}, [])


    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={{ alignSelf: 'center',padding:10  }}>
                    <Image
                        resizeMode="center"
                        style={{ width: 200, height: 300 }}
                        source={{ uri: data.image_url }} />
                </View>
                <View style={{ alignSelf: 'center',padding:10 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{data.name}</Text>
                </View>
                <View style={{ alignSelf: 'center',padding:10  }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{data.tagline}</Text>
                </View>
                <View style={{ alignSelf: 'center',padding:10  }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 ,textAlign:'center'}}>{data.description}</Text>
                </View>
                <View style={{ alignSelf: 'center',padding:10  }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{`abv = ${data.abv}`}</Text>
                </View>

                <View style={{ alignSelf: 'center',padding:10  }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{`ibu =  ${data.ibu}`}</Text>
                </View>
                <View style={{ alignSelf: 'center',padding:10  }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{`ph = ${data.ph}`}</Text>
                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
flex:1
    }
})

export default Description