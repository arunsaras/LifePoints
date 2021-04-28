import React from 'react';
import {View,StatusBar, Image,Text, TextInput, TouchableOpacity } from 'react-native';
import {AuthContext} from '../desserts/auth'
import LinearGradient from 'react-native-linear-gradient';
 
console.log('statusBarHeight: ', StatusBar.currentHeight);

const Login=({navigation})=>{
  const {signIn}=React.useContext(AuthContext);
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [evalid,setEvalid]=React.useState(false);
  const [pvalid,setPvalid]=React.useState(false);
  const [action,setAction]=React.useState(1);

  const submit=()=>{

    if(evalid==true&&pvalid==true){

      {signIn()};
      
    }

    
  }

  const eblur=()=>{
    let emailadd = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if((emailadd.test(email)))  {
         
      setEvalid(true);

    }else{
      setEvalid(false);
    }
  }

  const pblur=()=>{
    if(password.length>=8){
      setPvalid(true);
    }else{
      setPvalid(false);

    }
  }


  return(
    <View style={{flex:1,backgroundColor:"#00001F"}}>
       
         <View style={{alignItems:"center"}}>

          <View style={{marginTop:34.5,height:187,width:187,borderWidth:2,borderColor:"#24244B",borderRadius:187/2,justifyContent:"center",alignItems:"center"}}>
                    <Image style={{height:89.68,width:117.92}} source={require('../assets/logo.png')}/>
          </View>
          </View>



          <View style={{paddingTop:56.8,paddingHorizontal:50}}>
                
                <View style={{width:"100%"}}>
                      <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>EMAIIL</Text>

                </View>
                <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#181835",flexDirection:"row",width:"100%"}}>
                          <TextInput placeholder="Enter your email" keyboardType="email-address" onBlur={eblur} placeholderTextColor={"#607d8b"} style={{color:"#ffff",fontSize:12,padding:0,width:"85%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setEmail(text)}/>
                          {evalid&&
                          <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('../assets/check-mark.png')}/>
                              </View>}
                </View>
                <View style={{width:"100%",paddingTop:22}}>
                      <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>PASSWORD</Text>

                </View>
                <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#181835",flexDirection:"row",width:"100%"}}>
                          <TextInput placeholder="Enter your password" keyboardType="default" onBlur={pblur} secureTextEntry={true} placeholderTextColor={"#607d8b"} style={{color:"#ffff",fontSize:12,padding:0,width:"85%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setPassword(text)}/>
                          {pvalid&&
                              <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('../assets/check-mark.png')}/>
                              </View>
}
                </View>
                <View style={{paddingTop:12.92}}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('forgot')}}>
                    <Text style={{color:"#DFDFDF",fontSize:10,fontFamily:"MuseoSans_300"}}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingTop:83}}>
                     <TouchableOpacity activeOpacity={evalid==true&&pvalid==true?0:1} onPress={()=>{submit()}} >
                     <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} useAngle={true} angle={90} colors={['#5098F2', '#0F68D7']} style={{height:40,width:"100%",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_700"}}>LOG IN</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{paddingTop:37,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                     <View style={{}}>
                    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>Don't have an account?  </Text>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('signup')}}  style={{}}>
                      <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_500"}}>Create one</Text>
                      </TouchableOpacity>
                </View>
                
                

          </View>
    </View>
  )

}
export default Login;