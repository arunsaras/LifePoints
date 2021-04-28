import React from 'react';
import {View,Image, Text, TextInput,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Forgot=({navigation})=>{
  const [email,setEmail]=React.useState('');
  const [evalid,setEvalid]=React.useState(false)

  const eblur=()=>{
    let emailadd = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if((emailadd.test(email)))  {
         
      setEvalid(true);

    }else{
      setEvalid(false);
    }
  }


  const submit=()=>{
    if(evalid==true){
      navigation.goBack()
      
    }

  }
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

                     <Text style={{color:"#ffff",fontSize:26,fontFamily:"MuseoSans_500"}}>Forgot password?</Text>
                     
                   </View>
             </View>
             <View style={{marginTop:22}}>
               <Text style={{color:"#ffff",fontSize:10,lineHeight: 18,fontFamily:"MuseoSans_300"}}>Give us your registered email address and we'll send you link to reset your password</Text>
               {/* <Text style={{color:"#ffff",fontSize:10}}>davidwalb@email.com</Text> */}
             </View>
             

         </View>
         <View style={{marginTop:69,paddingHorizontal:50}}>
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
             </View>

             
         <View style={{marginTop:133,paddingHorizontal:50}}>
         <TouchableOpacity activeOpacity={evalid==true?0:1} onPress={()=>{submit()}} >
         <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} useAngle={true} angle={90} colors={['#5098F2', '#0F68D7']}  style={{height:40,width:"100%",borderRadius:20,backgroundColor:"#5098F2",justifyContent:"center",alignItems:"center"}} >
                    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_700"}}>SEND</Text>
                    </LinearGradient>
                    </TouchableOpacity>
         </View>
         <View style={{marginTop:37,width:"100%",paddingBottom:35,width:"100%",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                     <View style={{}}>
                    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>Have an account?  </Text>
                    </View>
                    <TouchableOpacity  onPress={()=>{navigation.goBack()}}  style={{}}>
                      <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_500"}}>Log in</Text>
                      </TouchableOpacity>
                </View>
         
         

    </View>

  )

}
export default Forgot;