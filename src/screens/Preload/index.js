import React from 'react';
import {View,Image,Text,ActivityIndicator} from 'react-native';
import { styles } from './style';
import MarsSpaceLogo from '../../img/Mars_space.png'
export default function preload(){
    return(
        <View style={styles.container}>
            <View>
            <Image
                source={MarsSpaceLogo}
            />
            <ActivityIndicator size="large" color="#9135EB" />
            </View>
        </View>
    );
}