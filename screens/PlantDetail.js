import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'
import {COLORS, FONTS, SIZES, icons, images} from '../constants'

const RequirementBar = ({icon, barPercentage}) => {
    return(
        <View style={{height: 60, alignItems: 'center'}}>
            <View 
                style={{
                    height: 50,
                    width: 50,
                    borderWidth: 1,
                    borderColor: COLORS.gray,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image 
                    source={icon}
                    resizeMode= "cover"
                    style={{
                        tintColor: COLORS.secondary,
                        width: 30, height: 30
                    }}
                />
            </View>
            {/* bar */}
            <View
                style={{
                    backgroundColor: COLORS.gray,
                    height: 3,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    marginTop: SIZES.base
                }}
            >
            </View>
            <View
                style={{
                    backgroundColor: COLORS.primary,
                    height: 3,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: barPercentage,
                    marginTop: SIZES.base
                }}
            >
            </View>
        </View>
    )
}

const RequirementDetail = ({icon,label,detail}) => {
    return(
        <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection:'row', flex: 1, alignItems: 'center'}}>
                <Image 
                    source={icon}
                    resizeMode= "cover"
                    style={{
                        tintColor: COLORS.secondary,
                        width: 25,
                        height: 25
                    }}
                />
                <Text style={{marginLeft: SIZES.base, color: COLORS.secondary, ...FONTS.h3}}>{label}</Text>
            </View>
            <View style={{flex: 1,alignItems: 'flex-end'}}>
                <Text style={{color: COLORS.gray, ...FONTS.h3}}>{detail}</Text>
            </View>

        </View>
    )
}

const PlantDetail = ({navigation}) => {

    function renderHeader(){
        return(
            <View 
                style={{
                    position: 'absolute',
                    left: SIZES.padding,
                    right: SIZES.padding,
                    top: 25
                }}
            >
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: 'rgba(255,255,255,0.5)',
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => navigation.goBack()}
                        >
                         <Image 
                            source={icons.back}
                            resizeMode= "contain"
                            style={{
                                width: 15,
                                height: 15
                            }}
                         />   
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-end'
                        }}
                    >
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
                <View style={{flexDirection: 'row', marginTop: '7%',}}>
                    <View style={{flex: 1}}>
                        <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>Glory Mantas</Text>

                    </View>
                    <View style={{flex: 1}}></View>

                </View>
            </View>
        )
    }

    function renderRequirementsBar() {
        return (
            <View 
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                }}
            >
                <RequirementBar 
                    icon={icons.sun}
                    barPercentage= "50%"
                />
                <RequirementBar 
                    icon={icons.drop}
                    barPercentage= "25%"
                />
                <RequirementBar 
                    icon={icons.temperature}
                    barPercentage= "80%"
                />
                <RequirementBar 
                    icon={icons.garden}
                    barPercentage= "30%"
                />
                <RequirementBar 
                    icon={icons.seed}
                    barPercentage= "50%"
                />
            </View>
        )
    }
    function renderRequirements(){
        return (
            <View style={{flex: 2.5, marginTop: SIZES.padding, marginHorizontal: SIZES.padding, justifyContent: 'space-around'}}>
                <RequirementDetail 
                    icon={icons.sun}
                    label="Sunlight"
                    detail="15°c"
                />
                <RequirementDetail 
                    icon={icons.drop}
                    label="Water"
                    detail="250 ML Daily"
                />
                <RequirementDetail 
                    icon={icons.temperature}
                    label="Room Temp"
                    detail="25°c"
                />
                <RequirementDetail 
                    icon={icons.garden}
                    label="Soil"
                    detail="3 kg"
                />
                <RequirementDetail 
                    icon={icons.seed}
                    label="Fertilizer"
                    detail="150 Mg"
                />
            </View>
        )
    }
    function renderFooter(){
        return(
            <View style={{flexDirection: 'row', paddingVertical: SIZES.padding, flex:1}}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: SIZES.padding,
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Text style={{color: COLORS.white, ...FONTS.h2}}>Take Action</Text>
                    <Image 
                        source={icons.chevron}
                        resizeMode= "contain"
                        style={{
                            width: 15,
                            height: 15,
                            marginLeft: SIZES.base
                        }}
                    />
                </TouchableOpacity>
                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: COLORS.gray, ...FONTS.h3, flex: 1}}>Almost 2 weeks of growing time</Text>
                    <Image 
                        source={icons.downArrow}
                        resizeMode="contain"
                        style={{
                            tintColor: COLORS.gray,
                            marginLeft: SIZES.base,
                            width: 15,
                            height: 15
                        }}
                    />
                </View>
            </View>
        )
    }
    return (
        
        <View style={styles.container}>
            <StatusBar 
                    barStyle="light-content"
                    backgroundColor= "transparent"
                    translucent={true}
                />
            
            {/* banner */}
            <View style={{height: '35%'}}>
                <Image 
                    source={images.bannerBg}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>
            {/* requirements */}
            <View
                style={{
                    backgroundColor: COLORS.lightGray,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    flex: 1,
                    marginTop: -40,
                    paddingVertical: SIZES.padding
                }}
            >
                <Text style={{paddingHorizontal: SIZES.padding, color: COLORS.secondary, ...FONTS.h2}}>Requirements</Text>
                {renderRequirementsBar()}
                {renderRequirements()}
                {renderFooter()}
            </View>
            {/* render header */}
            {renderHeader()}
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: COLORS.white,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
   }
})


export default PlantDetail;