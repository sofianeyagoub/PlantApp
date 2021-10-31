import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {icons, COLORS} from '../constants'
import { Home } from '../screens'



const Tab = createBottomTabNavigator();
const CameraButton = () => {
    return (
        <View 
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50
            }}
        >
            <Image 
                source={icons.camera}
                resizeMode= "contain"
                style={{
                    height: 23,
                    width: 23
                }}
            />
        </View>
    )
}
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:{
                    height: '10%',
                    backgroundColor: COLORS.white
                },
                tabBarIcon: ({focused}) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray
                    switch (route.name) {
                        case 'Home':
                            return (
                                <Image 
                                    source={icons.flash}
                                    resizeMode= "contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 20,
                                        height: 20
                                    }}
                                />
                            )
                        case 'Box':
                            return (
                                <Image 
                                    source={icons.cube}
                                    resizeMode= "contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 20,
                                        height: 20
                                    }}
                                />
                            )
                        case 'Camera':
                            return (
                                <CameraButton />
                            )
                        case 'Search':
                            return (
                                <Image 
                                    source={icons.search}
                                    resizeMode= "contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 20,
                                        height: 20
                                    }}
                                />
                            )
                        case 'Favorite':
                            return (
                                <Image 
                                    source={icons.heart}
                                    resizeMode= "contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 20,
                                        height: 20
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Box" component={Home} />
            <Tab.Screen name="Camera" component={Home} />
            <Tab.Screen name="Search" component={Home} />
            <Tab.Screen name="Favorite" component={Home} />
        </Tab.Navigator>
    )
}

export default Tabs;