import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View,Text,Image, TextInput,TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Signup=({navigation})=>{


  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [Repassword,setRepassword]=React.useState('');
  const [username,setUsername]=React.useState('');
  const [gender,setGender]=React.useState('');
  const [evalid,setEvalid]=React.useState(false);
  const [pvalid,setPvalid]=React.useState(false);
  const [Rvalid,setRvalid]=React.useState(false);
  const [uvalid,setUvalid]=React.useState(false);



     const ublur=()=>{

          if(username.length>0){
            setUvalid(true);
          }else{
            setUvalid(false);
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


const rblur=()=>{

  if(password.length>=8&&password===Repassword){
    setRvalid(true);
  }else{
    setRvalid(false);

  }

}

const gen=(a)=>{

  setGender(a);

}

const submit=()=>{

   if(gender!==""&&uvalid==true&&evalid==true&&pvalid==true&&Rvalid==true)
   {
     navigation.navigate('active')
   }
}

  return(
    
    <View style={{flex:1,backgroundColor:"#00001F"}}>
      <ScrollView>

         <View style={{marginTop:28.5,justifyContent:"center",alignItems:"center"}}>
               
               <Text style={{fontSize:8,color:"#ffff",fontFamily:"MuseoSans_500"}}>PROFILE PICTURE</Text>
              
         </View>
         <View style={{marginTop:8,justifyContent:"center",alignItems:"center"}}>
               
                <View style={{height:73,width:73,borderWidth:2,borderColor:"#24244B",borderRadius:73/2,justifyContent:"center",alignItems:"center"}}>
                             <Image style={{width:15,height:15}} source={require('../assets/camera.png')}/>
                </View>
              
         </View>
         {gender!==""&&
         <View style={{position:"absolute",top:190,right:55}}> 
         <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('../assets/check-mark.png')}/>
                              </View>

         </View>}

         <View style={{marginTop:22,paddingLeft:98}}>
           <Text style={{color:"#ffff",fontSize:8,fontFamily:"MuseoSans_500"}}>GENDER</Text>

         </View>

         <View style={{marginTop:22,paddingHorizontal:98,flexDirection:"row",justifyContent:"space-between"}}>


                  <TouchableOpacity activeOpacity={0.5} onPress={()=>gen('Male')} style={{height:39,width:39,borderRadius:39/2,justifyContent:"center",alignItems:"center",backgroundColor:gender=="Male"?"#116AD8":"#171732"}}>
                         <Image style={{height:15,width:15}} source={require('../assets/boy-face.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.5} onPress={()=>gen('Female')} style={{height:39,width:39,borderRadius:39/2,justifyContent:"center",alignItems:"center",backgroundColor:gender=="Female"?"#116AD8":"#171732"}}>
                           <Image style={{height:15,width:15}} source={require('../assets/womann.png')}/>
                  
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.5} onPress={()=>gen('Other')} style={{height:39,width:39,borderRadius:39/2 ,justifyContent:"center",alignItems:"center",backgroundColor:gender=="Other"?"#116AD8":"#171732"}}>
                            <Image style={{height:15,width:15}} source={require('../assets/intersexual.png')}/>
                  </TouchableOpacity>
                  
           

         </View>
         <View style={{marginTop:22,paddingHorizontal:98,flexDirection:"row",justifyContent:"space-between"}}>


                  <View style={{height:39,width:39,alignItems:"center"}}>
                       <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>MALE</Text>      
                  </View>
                  <View style={{height:39,width:39,alignItems:"center"}}>
                        <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>FEMLAE</Text> 
                  </View>
                  <View style={{height:39,width:39,alignItems:"center"}}>
                        <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>OTHER</Text>  
                  </View>
                  
           

         </View>
         <View style={{marginTop:20,paddingHorizontal:50}}>
                 <View style={{width:"100%"}}>
                        <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>USERNAME</Text>
                 </View>
                 <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#181835",flexDirection:"row",width:"100%"}}>
                          <TextInput placeholder="Enter your username" keyboardType="default" onBlur={ublur} placeholderTextColor={"#607d8b"} style={{color:"#ffff",fontSize:12,padding:0,width:"85%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setUsername(text)}/>
                              {uvalid&&
                              <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('../assets/check-mark.png')}/>
                              </View>
                          }
                </View>
         </View>
         <View style={{marginTop:20,paddingHorizontal:50}}>
                 <View style={{width:"100%"}}>
                        <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>EMAIL</Text>
                 </View>
                 <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#181835",flexDirection:"row",width:"100%"}}>
                          <TextInput placeholder="Enter your email" keyboardType="email-address" onBlur={eblur} placeholderTextColor={"#607d8b"} style={{color:"#ffff",fontSize:12,padding:0,width:"85%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setEmail(text)}/>
                              {evalid&&
                              <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('../assets/check-mark.png')}/>
                              </View>
                              }
                </View>
         </View>
         <View style={{marginTop:20,paddingHorizontal:50}}>
                 <View style={{width:"100%"}}>
                        <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>PASSWORD</Text>
                 </View>
                 <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#181835",flexDirection:"row",width:"100%"}}>
                          <TextInput placeholder="Enter your password" keyboardType="default" secureTextEntry={true} onBlur={pblur} placeholderTextColor={"#607d8b"} style={{color:"#ffff",fontSize:12,padding:0,width:"85%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setPassword(text)}/>
                             {pvalid&&
                              <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('../assets/check-mark.png')}/>
                              </View>}
                </View>
         </View>
         <View style={{marginTop:20,paddingHorizontal:50}}>
                 <View style={{width:"100%"}}>
                        <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>CONFIRM PASSWORD</Text>
                 </View>
                 <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#181835",flexDirection:"row",width:"100%"}}>
                          <TextInput placeholder="Re-enter your password" keyboardType="default" secureTextEntry={true} onBlur={rblur} placeholderTextColor={"#607d8b"} style={{color:"#ffff",fontSize:12,padding:0,width:"85%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setRepassword(text)}/>
                              {Rvalid&&
                              <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('../assets/check-mark.png')}/>
                              </View>}
                </View>
                <View style={{marginTop:37}}>
         <TouchableOpacity activeOpacity={evalid==true&&pvalid==true&&gender!=""&&uvalid==true&&Rvalid==true?0:1} onPress={()=>{submit()}}>
         <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} useAngle={true} angle={90} colors={['#5098F2', '#0F68D7']}  style={{height:40,width:"100%",borderRadius:20,backgroundColor:"#5098F2",justifyContent:"center",alignItems:"center"}} >
                    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_700"}}>CREATE ACCOUNT</Text>
                    </LinearGradient>
                    </TouchableOpacity>

         </View>
         <View style={{marginTop:30,paddingBottom:35,width:"100%",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                     <View style={{}}>
                    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>Have an account?  </Text>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}  style={{}}>
                      <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_500"}}>Log in</Text>
                      </TouchableOpacity>
                </View>
         </View>
         
         
         </ScrollView>
    </View>

  )
}
export default Signup;