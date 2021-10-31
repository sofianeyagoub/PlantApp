import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Platform,
    StatusBar,
    ColorPropType
} from 'react-native'
import {COLORS, FONTS, icons, images, SIZES} from '../constants'
import { 
    useFonts,
    AbhayaLibre_400Regular,
    AbhayaLibre_500Medium,
    AbhayaLibre_600SemiBold
} from '@expo-google-fonts/abhaya-libre'
import { NavigationContainer } from '@react-navigation/native'





const Home = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        AbhayaLibre_400Regular,
        AbhayaLibre_500Medium,
        AbhayaLibre_600SemiBold
    })
    // dummy data
    const [newPlants, setNewplants] = React.useState([
        {
            id: 1,
            name: "plant 1",
            img: images.plant1,
            favorite: false
        },
        {
            id: 2,
            name: "plant 2",
            img: images.plant2,
            favorite: true
        },
        {
            id: 3,
            name: "plant 3",
            img: images.plant3,
            favorite: false
        },
        {
            id: 4,
            name: "plant 4",
            img: images.plant4,
            favorite: false
        }
    ])

    const [friendList, setFriendList] = React.useState([
        {
            id: 0,
            img: images.profile1,
        },
        {
            id: 1,
            img: images.profile2,
        },
        {
            id: 2,
            img: images.profile3,
        },
        {
            id: 3,
            img: images.profile4,
        },
        {
            id: 4,
            img: images.profile5,
        },
    ])

    //render new plants
    function renderNewPlants(item, index){
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base}}>
                    <Image 
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: SIZES.width *0.23,
                            height: "82%",
                            borderRadius: 15
                        }}
                    />
                    <View 
                     style={{
                         position: 'absolute',
                         bottom: '17%',
                         right: 0,
                         backgroundColor: COLORS.primary,
                         borderTopLeftRadius: 10,
                         borderBottomLeftRadius: 10,
                         paddingHorizontal: SIZES.base
                     }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
                    </View>
                    <View style={{ position: 'absolute', top: '15%', left: 7}}>
                        <Image 
                            source={item.favorite ? icons.heartRed: icons.heartGreenOutline}
                            resizeMode= "contain"
                            style={{
                                width: 15,
                                height: 15,

                            }}
                        />
                    </View>
            </View>
        )
    }

    function renderFriendsComponent() {
        if(friendList.length == 0){
            return (
                <View></View>
            )
        }else if(friendList.length <= 3) {
            return(
                friendList.map((item, index) => (
                    <View 
                        key={`friend-${index}`}
                        style={index == 0 ? {flexDirection: 'row'}: {flexDirection: 'row', marginLeft: -20}}
                    >
                        <Image 
                            source={item.img}
                            resizeMode= "cover"
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                borderWidth: 3,
                                borderColor: COLORS.primary
                            }}
                        />
                    </View>
                ))
            )
        }else {
            return (

            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                {friendList.map((item,index) => {
                    if(index <= 2) {
                        return (
                            <View 
                            key={`friend-${index}`}
                            style={index == 0 ? {flexDirection: 'row'}: {flexDirection: 'row', marginLeft: -20}}
                            >
                                <Image 
                                    source={item.img}
                                    resizeMode="cover"
                                    style={{
                                        width: 50, height: 50,
                                        borderRadius: 25,
                                        borderWidth: 3,
                                        borderColor: COLORS.primary
                                    }}
                                />
                            </View>
                        )
                    }
                })}
                <Text style={{color: COLORS.secondary, ...FONTS.body3, marginLeft: 3}}>+{friendList.length - 3} more</Text>
            </View>
            )
        }
    }

    if(!fontsLoaded){
        return null
    }else{

        return (
            <View style={styles.container}>
                <StatusBar 
                    barStyle="dark-content"
                    backgroundColor= {COLORS.primary}
                    translucent={true}
                />
                {/* new plats */}
                <View style={{backgroundColor: COLORS.white, height: "30%"}}>
                    <View 
                        style={{
                            backgroundColor: COLORS.primary,
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            flex: 1,
                        }}
                    >
                        <View style={{ marginTop: 5, marginHorizontal: SIZES.padding}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
                                <TouchableOpacity>
                                    <Image 
                                        source={icons.focus}
                                        resizeMode= "contain"
                                        style={{
                                            width: 20,
                                            height: 20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop: 5}}>
                                <FlatList 
                                    horizontal
                                    showsHorizontalScrollIndicator= {false}
                                    data={newPlants}
                                    renderItem={({item, index}) => renderNewPlants(item, index)}
                                />
                            </View>
                        </View>

                    </View>
                </View>
                {/* tadoy's share */}
                <View style={{backgroundColor: COLORS.lightGray, height: "45%"}}>
                    <View style={{
                        flex: 1,
                        borderBottomLeftRadius:50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLORS.white
                    }}>
                        <View style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                                <Text style={{ color: COLORS.secondary, ...FONTS.h2}}>Today's share</Text>
                                <TouchableOpacity>
                                    <Text style={{color: COLORS.secondary, ...FONTS.body3}}>see all</Text>
                                </TouchableOpacity>
                            </View>
                        
                            <View style={{ flexDirection: 'row', height: '83%', marginTop: SIZES.base}}>
                                <View style={{flex: 1}}>
                                    <TouchableOpacity 
                                    style={{flex: 1}}
                                    onPress={() => {navigation.navigate("PlantDetail")}}
                                    >
                                        <Image 
                                            source={images.plant5}
                                            resizeMode= "cover"
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                borderRadius: 20
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        style={{flex: 1, marginTop: 5}}
                                            onPress={() => {navigation.navigate("PlantDetail")}}
                                    >
                                        <Image 
                                            source={images.plant6}
                                            resizeMode= "cover"
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                borderRadius: 20
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1.3}}>
                                    <TouchableOpacity 
                                    style={{ flex: 1, marginLeft: SIZES.font}}
                                    onPress={() => {navigation.navigate("PlantDetail")}}
                                    >
                                        <Image 
                                            source={images.plant7}
                                            resizeMode="cover"
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                borderRadius: 20
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {/* added friend*/}
                <View style={{backgroundColor: COLORS.lightGray, height: "25%"}}>
                    <View style={{ flex: 1}}>
                        <View style={{marginTop: SIZES.radius, marginHorizontal: SIZES.padding}}>
                            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>Added Friends</Text>
                            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>{friendList.length } Total</Text>
                        
                            <View style={{flexDirection: 'row',marginTop: SIZES.radius}}>
                                {/* friends */}
                                <View style={{flex: 1.3,flexDirection: 'row', alignItems: 'center'}}>
                                    {renderFriendsComponent()}
                                </View>
                                {/* add friends */}
                                <View style={{flex: 1,flexDirection: 'row', alignItems: 'center',justifyContent: 'flex-end'}}>
                                    <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>Add New</Text>
                                    <TouchableOpacity
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 40,
                                            height: 40,
                                            backgroundColor: COLORS.gray,
                                            borderRadius: 10,
                                            marginLeft: SIZES.base
                                        }}
                                    >
                                        <Image 
                                            source={icons.plus}
                                            resizeMode="contain"
                                            style={{
                                                width: 15,
                                                height: 15
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
   }
})

export default Home;
