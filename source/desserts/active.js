import React from 'react';
import {View,Image, Text, TextInput,TouchableOpacity} from 'react-native';
import {AuthContext} from '../desserts/auth'
import LinearGradient from 'react-native-linear-gradient';
const Active=({navigation})=>{
  const {signIn}=React.useContext(AuthContext);

  return(
    <View style={{flex:1,backgroundColor:"#00001F"}}>
         <View style={{alignItems:"center"}}>

             <View style={{marginTop:21.5,height:106,width:106,borderWidth:2,borderColor:"#24244B",borderRadius:106/2,justifyContent:"center",alignItems:"center"}}>
                   <Image style={{height:50.88,width:66.89}} source={require('../assets/logo.png')}/>
              </View>
         </View>
         <View style={{marginTop:37.80,paddingHorizontal:50}}>
             
             <View style={{flexDirection:"row"}}>
                   <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{paddingRight:13,justifyContent:"center"}}>
                     <Image style={{height:15,width:17}} source={require('../assets/arrow.png')}/>
                   </TouchableOpacity>
                   <View style={{}}>

                     <Text style={{color:"#ffff",fontSize:26,fontFamily:"MuseoSans_500"}}>Verification</Text>
                     
                   </View>
             </View>
             <View style={{marginTop:22}}>
               <Text style={{color:"#ffff",fontSize:10,lineHeight:18,fontFamily:"MuseoSans_300"}}>We have sent you a verification code to your email ID davidwalb@email.com</Text>
               {/* <Text style={{color:"#ffff",fontSize:10}}>davidwalb@email.com</Text> */}
             </View>
             

         </View>
         <View style={{marginTop:71,paddingLeft:50,flexDirection:"row"}}>
              <View style={{width:56,paddingBottom:11,justifyContent:"center",alignItems:"center",borderBottomColor:"#181835",borderBottomWidth:2,marginRight:10}}>
                     <TextInput maxLength={1} keyboardType={"number-pad"} style={{padding:0,color:"#ffff",fontSize:26,fontFamily:"MuseoSans_500"}}/>
              </View>
              <View style={{width:56,paddingBottom:11,justifyContent:"center",alignItems:"center",borderBottomColor:"#181835",borderBottomWidth:2,marginRight:10}}>
                      <TextInput maxLength={1} keyboardType={"number-pad"} style={{padding:0,color:"#ffff",fontSize:26,fontFamily:"MuseoSans_500"}}/>
                </View>
                <View style={{width:56,paddingBottom:11,justifyContent:"center",alignItems:"center",borderBottomColor:"#181835",borderBottomWidth:2,marginRight:10}}>
                        <TextInput maxLength={1} keyboardType={"number-pad"} style={{padding:0,color:"#ffff",fontSize:26,fontFamily:"MuseoSans_500"}}/> 
                </View>
                <View style={{width:56,paddingBottom:11,justifyContent:"center",alignItems:"center",borderBottomColor:"#181835",borderBottomWidth:2}}>
                         <TextInput maxLength={1} keyboardType={"number-pad"} style={{padding:0,color:"#ffff",fontSize:26,fontFamily:"MuseoSans_500"}}/>
                </View>

             </View>

             <View style={{marginTop:37,paddingBottom:35,width:"100%",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                     <View style={{}}>
                    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>Didn't get a code?  </Text>
                    </View>
                    <TouchableOpacity  style={{}}>
                      <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_500"}}>Tap to resend</Text>
                      </TouchableOpacity>
               
         </View>
         <View style={{marginTop:87,paddingHorizontal:50}}>
         <TouchableOpacity  onPress={()=>{navigation.navigate('reset')}} >
         <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} useAngle={true} angle={90} colors={['#5098F2', '#0F68D7']} style={{height:40,width:"100%",borderRadius:20,backgroundColor:"#5098F2",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_700"}}>VERIFY</Text>
                    </LinearGradient>
                    </TouchableOpacity>
         </View>
         <View style={{marginTop:37,width:"100%",paddingBottom:35,width:"100%",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                     <View style={{}}>
                    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>Have an account?  </Text>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('signin')}}  style={{}}>
                      <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_500"}}>Log in</Text>
                      </TouchableOpacity>
                </View>
         
         

    </View>

  )

}
export default Active;