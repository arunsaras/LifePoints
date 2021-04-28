import React from 'react';
import {View,Image, Text, TextInput,TouchableOpacity,StatusBar,Dimensions,Modal, FlatList, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
console.log('statusBarHeight: ', StatusBar.currentHeight);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const shop2=({navigation})=>{

      const [visible,setVisible]=React.useState(false);

      const daata=[
            {
              points:'100'
            },
            {
             points:'500'
           },
           {
             points:'1k'
           },
           {
             points:'5K'
           },
           {
             points:'10K'
           },
           {
             points:'10K'
           },
           
          ]

  const [first,setFirst]=React.useState('');  
  const [last,setLast]=React.useState('');  
  const [phone,setPhone]=React.useState('');  
  const [address,setAddress]=React.useState('');  
  return(
    <View style={{flex:1,backgroundColor:"#00001F"}}>
      <StatusBar backgroundColor="#534AA2"/>
      <ScrollView>
        <View>

        
         <View style={{height:65.5,backgroundColor:"#534AA2",flexDirection:"row",paddingHorizontal:20,justifyContent:"space-between",alignItems:"center"}}>
         <View style={{flexDirection:"row"}}>
                      <View style={{}}>
                            <Image style={{height:51,width:51,borderRadius:51/2,}} source={require('../assets/profile.jpg')}/>
                      </View>
                      <View style={{paddingLeft:18,justifyContent:"center"}}>
                            <Text style={{color:"#ffff",fontSize:9,fontFamily:"MuseoSans_300"}}>DavidW</Text>
                      </View>
                      </View> 
                      <View style={{flexDirection:"row"}}>
                      
                      <TouchableOpacity onPress={()=>{setVisible(true)}} style={{justifyContent:"center",alignItems:"center"}}>
                            <Text style={{color:"#ffff",fontSize:6,fontFamily:"MuseoSans_300"}}>Points</Text>
                            <View style={{marginTop:10}}>
                            <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>40</Text>

                            </View>
                                   
                      </TouchableOpacity>
                      <View style={{justifyContent:"center",paddingLeft:16}}>
                      <View style={{height:51,width:51,borderWidth:3,borderColor:"#000",borderRadius:187/2,justifyContent:"center",alignItems:"center"}}>
                              <Image style={{height:18,width:18}} source={require('../assets/logo1.png')}/>
                        </View>
                      </View>
                     
                      </View>    
                      

         </View>


            <View style={{marginTop:19,paddingLeft:25,flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginRight:17,justifyContent:"center"}}>
                    <Image style={{height:15,width:17}} source={require('../assets/arrow.png')}/>
                </TouchableOpacity>

                   <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_700"}}>SHOP</Text>

            </View>

            <View style={{marginTop:21,paddingHorizontal:26,marginBottom:21}}>
                       <View style={{backgroundColor:"#171732",height:windowHeight*0.7,width:"100%",borderTopLeftRadius:24,borderBottomEndRadius:24}}>
                           <View style={{backgroundColor:"#534AA2",height:80,borderTopLeftRadius:24,paddingLeft:25,paddingRight:29,flexDirection:"row",justifyContent:"space-between"}}>
                                 
                                 <View style={{flexDirection:"column",height:"100%",justifyContent:"center"}}>
                                     <Text style={{color:"#ffff",fontSize:16,fontFamily:"MuseoSans_500"}}>Adidas   10% Off</Text>
                                     <View style={{marginTop:9}}>
                                     <Text style={{color:"#ffff",fontSize:10,fontFamily:"MuseoSans_300"}}>Jun - July, 2020</Text>

                                 </View>
                                 </View>


                                 <View style={{flexDirection:"column",height:"100%",justifyContent:"center"}}>
                                     <Text style={{color:"#ffff",fontSize:14,fontFamily:"MuseoSans_500"}}>300</Text>
                                     <View style={{marginTop:3,alignItems:"center"}}>
                                     <Text style={{color:"#ffff",fontSize:5,fontFamily:"MuseoSans_300"}}>POINTS</Text>

                                 </View>
                                 </View>
                           </View>
                           <View style={{paddingTop:35,paddingHorizontal:25}}>
   
                               <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",paddingBottom:20}}>
                <View style={{width:"46%"}}>
                <View >
                      <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>FIRST NAME</Text>

                </View>
                <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#2F2865",width:"100%"}}>
                          <TextInput  style={{color:"#ffff",fontSize:12,padding:0,width:"100%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setFirst(text)}/>
                          {/* <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('./source/assets/check-mark.png')}/>
                              </View> */}
                </View>
                </View>
                <View style={{width:"46%"}}>
                <View >
                      <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>LAST NAME</Text>

                </View>
                <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#2F2865",width:"100%"}}>
                          <TextInput  style={{color:"#ffff",fontSize:12,padding:0,width:"100%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setLast(text)}/>
                          {/* <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('./source/assets/check-mark.png')}/>
                              </View> */}
                </View>
                </View>
                </View>


                  <View style={{paddingBottom:20}}>    
                <View style={{width:"100%"}}>
                      <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>PHONE NUMBER</Text>

                </View>
                <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#2F2865",flexDirection:"row",width:"100%"}}>
                          <TextInput keyboardType="number-pad"  style={{color:"#ffff",fontSize:12,padding:0,width:"85%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setPhone(text)}/>
                          {/* <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('./source/assets/check-mark.png')}/>
                              </View> */}
                </View>
                </View>  
                <View style={{width:"50%"}}>
                      <Text style={{color:"#A7A7A7",fontSize:8,fontFamily:"MuseoSans_500"}}>ADDRESS</Text>

                </View>
                <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#2F2865",flexDirection:"row",width:"100%"}}>
                          <TextInput  style={{color:"#ffff",fontSize:12,padding:0,width:"85%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setAddress(text)}/>
                          {/* <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('./source/assets/check-mark.png')}/>
                              </View> */}
                </View>
                
                <View style={{paddingTop:10,paddingBottom:12,borderBottomWidth:2,borderBottomColor:"#2F2865",width:"100%"}}>
                          <TextInput  style={{color:"#ffff",fontSize:12,padding:0,width:"100%",fontFamily:"MuseoSans_300"}} onChangeText={(text)=>setEmail(text)}/>
                          {/* <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
                                   <Image style={{width:10,height:10}} source={require('./source/assets/check-mark.png')}/>
                              </View> */}
                </View>
                <View style={{paddingTop:37,marginBottom:35}}>
                     <TouchableOpacity onPress={()=>navigation.navigate('shop3')} >
                     <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} useAngle={true} angle={90} colors={['#5098F2', '#0F68D7']} style={{height:40,width:"100%",borderRadius:20,backgroundColor:"#5098F2",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{color:"#ffff",fontSize:8,fontFamily:"MuseoSans_700"}}>BUY NOW</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
                


                </View>
                           
                          

                          
                       </View>
                      
            </View>
            {/* <View style={{position:"absolute",top:110,right:12,backgroundColor:"#494949",height:28,width:28,borderRadius:28/2,justifyContent:"center",alignItems:"center"}}>
                              <Image style={{height:11,width:11}} source={require('./source/assets/cross-sign.png')}/>
               </View>
            */}

<Modal   animationType={'true'} transparent={true} visible={visible}  >
<View style={{flex:1,backgroundColor:"rgba(33, 33, 33, 0.4)",justifyContent:"center",alignItems:"center",paddingTop:43,paddingLeft:31,paddingRight:31,paddingBottom:30}}>

        <View style={{flex:1,width:"100%",backgroundColor:"#171732",borderRadius:8,alignItems:"center",paddingLeft:27,padding:25,paddingTop:26,paddingBottom:26}}>
                
        <FlatList showsVerticalScrollIndicator={false} style={{flex:1}} data={daata} renderItem={({item})=>{


return(
  <View style={{flex:1,paddingBottom:15}}>


    
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <View style={{}}>
            <Image style={{height:23,width:23}} source={require('../assets/logo.png')}/>
       </View>


       <View style={{flexDirection:"column"}}>
            <Text style={{color:"#ffff",fontSize:10,fontFamily:"MuseoSans_500"}}>{item.points}</Text> 

            <View style={{paddingTop:10}}>
            <Text style={{color:"#ffff",fontSize:5,fontFamily:"MuseoSans_500"}}>POINTS</Text>
       </View>

       </View>

       
       

      
    </View>
    <View style={{marginTop:22,paddingBottom:17,borderBottomColor:"#31316A",borderBottomWidth:2}}>
      <Text style={{color:"#DFDFDF",fontSize:10,fontFamily:"MuseoSans_300"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
    </View>
    </View>
    
)

}}/>


         
       

        </View>
        <View style={{height:28,width:28,borderRadius:28/2,backgroundColor:"#272751",position:"absolute",top:30,right:20,justifyContent:"center",alignItems:"center"}}>
                
                 <TouchableOpacity onPress={()=>setVisible(false)}>
                <Image style={{height:11,width:11}} source={require('../assets/cross-sign.png')} />
                </TouchableOpacity>
                </View>
       

          </View>
     

 </Modal> 

 </View>
      </ScrollView>
    </View>

  )

}
export default shop2;