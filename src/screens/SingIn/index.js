import React from 'react';
import { Button } from 'react-native-elements';
import {Text,View, Image, TextInput, SafeAreaView} from 'react-native';
import { styles } from './style';
import MarsSpaceLogo from '../../img/Mars_space.png'
import { Link } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';

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
                     Não possui uma conta? <Link to="/SingUp"><Text style={{color: "#9135EB"}}>Cadastra-se</Text> </Link>
                 </Text>
            </View>
        </View>
    );
}