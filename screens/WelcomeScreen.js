import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class WelcomeScreen extends Component{
    render(){
        return(
            <View>
                <Text>Trackore</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('LogInScreen')}}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}