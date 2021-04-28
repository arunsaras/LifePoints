import React from 'react';
import {View,Image, Text, TextInput,TouchableOpacity} from 'react-native';
import {AuthContext} from '../desserts/auth'

const Reset=({navigation})=>{
  const {signIn}=React.useContext(AuthContext);
  const [password,setPassword]=React.useState('');
  const [repassword,setRepassword]=React.useState('');

  const [pvalid,setPvalid]=React.useState(false);
  const [rvalid,setRvalid]=React.useState(false);


  const pblur=()=>{

    if(password.length>=8){
      setPvalid(true);

    }else{
      setPvalid(false);

    }

  }
  const rblur=()=>{

    if(password.length>=8&&password==repassword){
      setRvalid(true);

    }else{
      setRvalid(false);

    }

  }


  const submit=()=>{
    if(pvalid==true&&rvalid==true){
      
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

                     <Text style={{color:"#ffff",fontSize:26,fontFamily:"MuseoSans_500"}}>Reset password</Text>
                     
                   </View>
             </View>
             <View style={{marginTop:22}}>
               <Text style={{color:"#ffff",fontSize:10,lineHeight: 18,fontFamily:"MuseoSans_300"}}>E-mail address verified! Set a new password</Text>
               {/* <Text style={{color:"#ffff",fontSize:10}}>davidwalb@email.com</Text> */}
             </View>
             

         </View>
         <View style={{marginTop:81,paddingHorizontal:50}}>
         <View style={{width:"100%"}}>
                      <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>NEW PASSWORD</Text>

                </View>
                <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#181835",flexDirection:"row",width:"100%"}}>
                          <TextInput placeholder="Enter new password" onBlur={pblur} secureTextEntry={true} placeholderTextColor={"#607d8b"} style={{color:"#ffff",fontSize:12,padding:0,width:"85%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setPassword(text)}/>
                          {pvalid&&
                          <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('../assets/check-mark.png')}/>
                              </View>}
                              </View>

             </View>
             <View style={{marginTop:26,paddingHorizontal:50}}>
         <View style={{width:"100%"}}>
                      <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>CONFIRM PASSWORD</Text>

                </View>
                <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#181835",flexDirection:"row",width:"100%"}}>
                          <TextInput placeholder="Re-enter your new password" onBlur={rblur} secureTextEntry={true} placeholderTextColor={"#607d8b"} style={{color:"#ffff",fontSize:12,padding:0,width:"85%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setRepassword(text)}/>
                          {rvalid&&
                          <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('../assets/check-mark.png')}/>
                              </View>}
                              </View>
                              
             </View>

             
         <View style={{marginTop:82,paddingHorizontal:50}}>
         <TouchableOpacity onPress={()=>{signIn()}} style={{height:40,width:"100%",borderRadius:20,backgroundColor:"#5098F2",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_700"}}>RESET PASSWORD</Text>
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
export default Reset;