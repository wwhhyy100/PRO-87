import React,{Component} from 'react';
import { Text, View,TouchableOpacity,SafeAreaView } from 'react-native';

export default class Logout extends Component{
  render(){
    if(!this.state.fontsLoaded){
        return <AppLoading/>
    }else{
    return(
      <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity title="Sign in with Google" onPress={()=> this.signInwithGoogleAsync()}></TouchableOpacity>
      <Text> Pics </Text>
      </View>
    )
}
}
}