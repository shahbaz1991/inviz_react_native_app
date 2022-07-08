/**
 * List Screen shows the list of all the users from the api
 */

//importing React, Components and other libraries
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { USER_URL } from '../api/api';
import { ActiveContext } from '../../App';
import ActivityIndicatorComp from '../component/common/ActivityLoader';
import Items from '../component/Items';
import { Labels } from '../style/label';
import listScreenStyle from '../style/listScreen.style';
import { Colors } from '../style/colors';

//disabling the console warning 
console.reportErrorsAsExceptions = false;
console.disableYellowBox = true;

const ListScreen =(props)=> {
    const [mainData, setMainData] = useState([]);
    const [data,setData] = useState([]);
    const [loader, setLoader] = useState(false); 
    const [searchText, setSearchText] = useState('');
    const [buttonEnable, setButtonEnable] = useState(false);
    const isConnected = useContext(ActiveContext);

     // //checking the internet connection
    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener(state => {
            if(state.isConnected){
                isConnected.setActive(true);
            } else {
                isConnected.setActive(false);
            };
        });
        return ()=>{
            unsubscribe();
        };
    });

    //reading the data from api and storing it in asyncstorage and state 
    useEffect(()=>{
        setLoader(true);
        async function fetchUserDetails() {
            try{
                const response = await fetch(USER_URL)
                const jsonData = await response.json()
                await AsyncStorage.setItem('USER_DATA', JSON.stringify(jsonData.results))
                setMainData(jsonData.results)
                setData(jsonData.results) 
            } catch (error) {
                Alert.alert(
                    Labels.apiAlert,
                    Labels.somethingWentWrong,
                    [
                      {
                        text: Labels.retry,
                        onPress: () => fetchUserDetails(),
                      },
                    ]
                );
            } finally {
                setLoader(false);
            };
        };
        async function fetchUserFromStorage() {
            try {
                const userDataJson = await AsyncStorage.getItem('USER_DATA');
                if (userDataJson !== null) {
                    const userData= JSON.parse(userDataJson);
                    setMainData(userData);
                    setData(userData);
                    setLoader(false);
                } else if(isConnected.active) {
                    fetchUserDetails();
                } else {
                    Alert.alert(
                        Labels.apiAlert,
                        Labels.notConnect,
                        [
                          {
                            text: Labels.retry,
                            onPress: () => fetchUserFromStorage(),
                          },
                        ]
                    );
                };
              } catch (error) {
                Alert.alert(
                    Labels.apiAlert,
                    Labels.somethingWentWrong,
                    [
                      {
                        text: Labels.retry,
                        onPress: () => fetchUserDetails(),
                      },
                    ]
                );
            };
        };
        fetchUserFromStorage();
    },[]);

    //searching text from the users data
    useEffect(()=>{
        if(searchText!=''){
            const newData = mainData.filter((user)=>{
                if(user.name.first.includes(searchText)){
                    return user;
                };
            });
            setData(newData);
            setButtonEnable(true)
        } else {
            setData(mainData)
            setButtonEnable(false)
        }
    },[searchText])

    //rendering list of users
    const renderItem =( { item })=> {
        return(
            <View style={listScreenStyle.itemContainer}>
                <Items
                    data={item}
                    navigation={props.navigation}
                />
            </View>
        );
    };

    //updating search text as the user types
    const onChangeSearch =(value)=> {
        setSearchText(value.replace(/[^A-Za-z]/g, ''))
    };

    //clearing the search text and loading the users list 
    const clearSearchText =()=> {
        Keyboard.dismiss();
        setLoader(true);
        setSearchText('');
        if(data.length!=100){
            setData(mainData);
            setLoader(false);
        }else {
            setLoader(false);
        };
    };

    //rending the list of users and search block in UI
    return(
        <View style={[listScreenStyle.mainContainer, !isConnected.active && {backgroundColor: Colors.grey}]}>

            {/* search block */}
            <View style={listScreenStyle.searchContainer}>
                <TextInput
                    style={listScreenStyle.searchText}
                    value={searchText}
                    placeholder={Labels.searchPlaceHolder}
                    onChangeText={(value)=>{onChangeSearch(value)}}
                />
                <TouchableOpacity
                    disabled={buttonEnable?false:true}
                    style={[listScreenStyle.searchButton, !buttonEnable && {opacity:0.4}]}
                    onPress={clearSearchText}
                >
                    <Text style={listScreenStyle.searchButtonText}>{Labels.clear}</Text>
                </TouchableOpacity>
            </View>

            {/* render user list */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item,index)=>index.toString()}
            />
            {
                (data.length === 0) && 
                <View  style={listScreenStyle.noResultTextContainer}><Text style={listScreenStyle.noResultText}>{Labels.noResultsFound}</Text></View>
            }
            {
                loader && <ActivityIndicatorComp/>
            }
        </View>
    );
};

export default ListScreen;