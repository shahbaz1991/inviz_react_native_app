/**
 * Items renders one user's image, first name and registration 
 */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import itemStyle from '../style/item.style';
import { Labels } from '../style/label';

const Items =(props)=> {

    const {data, navigation}= props;    //destructuring props
    const dateOfBirth = new Date(data.registered.date)  //creating date

    //renders user tabs in UI
    return(
        <TouchableOpacity 
            style={itemStyle.mainContainer}
            onPress={()=>{navigation.navigate(Labels.detailsScreen, {data:data})}}
        >
           <View style={itemStyle.subContainer}>
                <Image
                    style={itemStyle.image}
                    source={{uri:data.picture.thumbnail}}
                />
                <Text style={itemStyle.listText}>{data.name.first}</Text>
           </View>
           <View style={itemStyle.subDateContainer}>
                <Text style={itemStyle.listText}>{dateOfBirth.getMonth()+1}-</Text>
                <Text style={itemStyle.listText}>{dateOfBirth.getFullYear()+1}</Text>
           </View>
        </TouchableOpacity>
    );
};

export default Items;