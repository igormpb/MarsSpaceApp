import React from 'react';
import {Text,View, Image, TextInput,SafeAreaView} from 'react-native';
import { styles } from './style';
import { Link } from "@react-navigation/native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import MarsSpaceLogo from '../../img/Mars_space.png';

export default function SingiN(){
    return(
        <View style={styles.container}>
            <View>
                <Image
                    source={MarsSpaceLogo}
                />
                
                <SafeAreaView>
                    <TextInput
                    style={styles.input}
                    placeholder=" Digite seu nome"
                    />
                    <TextInput
                    style={styles.input}
                    placeholder=" Digite seu e-mail"
                    />
                    <TextInput 
                    style={styles.input}
                    placeholder= "********"/>

                 </SafeAreaView>

                 <Button 
                   type="clear"
                 icon={
                    <Icon
                    name="right"
                    size={20} 
                    color="#9135EB"
                    />
                 }
                 />

                 <Text style={styles.text}>
                     Já possui uma conta? <Link to="/SingIn"> <Text style={{color: "#9135EB"}}>Faça login</Text></Link>
                 </Text>
            </View>
        </View>
    );
}