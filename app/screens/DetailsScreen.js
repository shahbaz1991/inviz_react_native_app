/**
 * Details Screen provides the necessary details of the selected user
 */

//importing React, Components and other libraries
import React, { useContext, useState } from 'react';
import {View, Text, Image} from 'react-native';
import { ActiveContext } from '../../App';
import ActivityIndicatorComp from '../component/common/ActivityLoader';
import { Colors } from '../style/colors';
import detailsScreenStyle from '../style/detailsScreenStyle';
import { Labels } from '../style/label';

const DetailsScreen =(props)=> {
    const [loader, setLoader] = useState(false)
    const isConnected = useContext(ActiveContext);

    const {
        gender,
        name,
        location,
        email,
        dob,
        registered,
        phone,
        cell,
        picture,    
    } = props.route.params.data;    //destructing the props

    //creating array of months to display the text 
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    //creating date
    const dateofBirth = new Date(dob.date);
    const registrationDate = new Date(registered.date)

    //rendering the user detials in UI
    return(
        <View style={[detailsScreenStyle.mainContainer, !isConnected.active && {backgroundColor: Colors.grey} ]}>
            <View style={detailsScreenStyle.subContainer}>
                <Image
                    style={detailsScreenStyle.image}
                    source={isConnected.active ? {uri:picture.medium} : require('../../assets/user-icon.png')}
                    onLoadStart={()=>setLoader(true)}
                    onLoadEnd={()=>setLoader(false)}
                />
                <View style={detailsScreenStyle.line}></View>
                <View style={detailsScreenStyle.detailsContainer}>
                    <View style={detailsScreenStyle.textContainer}>
                        <Text style={detailsScreenStyle.textKey}>{Labels.userName}</Text>
                        <Text style={detailsScreenStyle.textValue}>{name.title} {name.first} {name.last}</Text>
                    </View>
                    <View style={detailsScreenStyle.textContainer}>
                        <Text style={detailsScreenStyle.textKey}>{Labels.userGender}</Text>
                        <Text style={detailsScreenStyle.textValue}>{gender}</Text>
                    </View>
                    <View style={detailsScreenStyle.textContainer}>
                        <Text style={detailsScreenStyle.textKey}>{Labels.userDOB}</Text>
                        <Text style={detailsScreenStyle.textValue}>{dateofBirth.getDate()} {months[dateofBirth.getMonth()]} {dateofBirth.getFullYear()}</Text>
                    </View>
                    <View style={detailsScreenStyle.textContainer}>
                        <Text style={detailsScreenStyle.textKey}>{Labels.userEmail}</Text>
                        <Text style={detailsScreenStyle.textValue}>{email}</Text>
                    </View>
                    <View style={detailsScreenStyle.textContainer}>
                        <Text style={detailsScreenStyle.textKey}>{Labels.userLocation}</Text>
                        <Text style={detailsScreenStyle.textValue}>{location.street.number} {location.street.name}</Text>
                        <Text style={detailsScreenStyle.textValue}>{location.city} {location.state}</Text>
                        <Text style={detailsScreenStyle.textValue}>{location.country} {location.postcode}</Text>
                    </View>
                    <View style={detailsScreenStyle.textContainer}>
                        <Text style={detailsScreenStyle.textKey}>{Labels.userNumber}</Text>
                        <Text style={detailsScreenStyle.textValue}>{cell}{'\n'}{phone}</Text>
                    </View>
                    <View style={detailsScreenStyle.textContainer}>
                        <Text style={detailsScreenStyle.textKey}>{Labels.userRegistration}</Text>
                        <Text style={detailsScreenStyle.textValue}>{registrationDate.getDate()} {months[registrationDate.getMonth()]} {registrationDate.getFullYear()}</Text>
                    </View>
                </View>
            </View>
            {
                loader && <ActivityIndicatorComp/>
            }
        </View>
    );
};

export default DetailsScreen;