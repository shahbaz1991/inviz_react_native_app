/** 
* Activity Indicator is an overlay indicator which shows up when api calls are made or component is loaded  
*/

//importing React, Components and other libraries
import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import { activityIndicatorStyles } from '../../style/activityLoader.style';
import { Colors } from '../../style/colors';

const ActivityIndicatorComp = (props) => {

    return(
        <View style={activityIndicatorStyles.mainContainer}>
            <View  style={activityIndicatorStyles.innerContainer}>
                <ActivityIndicator size="large" color={Colors.highToneBlue}/>
                <Text></Text>
                <Text style={activityIndicatorStyles.loadingMsg}>Please wait...</Text>
            </View>
        </View>
       
   )
}
export default ActivityIndicatorComp;