import React from 'react';
import {View,Image, Text, TextInput,TouchableOpacity,StatusBar,Dimensions,Modal, FlatList, ScrollView} from 'react-native';

console.log('statusBarHeight: ', StatusBar.currentHeight);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const shop3=({navigation})=>{

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
  
  return(
    <View style={{flex:1,backgroundColor:"#00001F"}}>
      <ScrollView>
        <View>

       
      <StatusBar backgroundColor="#534AA2"/>
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
                          
                           <View style={{paddingTop:37,paddingHorizontal:50}}>
   
                               <View style={{justifyContent:"center",alignItems:"center"}}>
                                   <View style={{height:51,width:51,borderRadius:51/2,borderColor:"#36C7FF",borderWidth:3,justifyContent:"center",alignItems:"center"}}>
                                        <Image style={{width:15,height:15}} source={require('../assets/check-mark.png')}/>
                                   </View>
                               </View>

                               <View style={{paddingTop:34,paddingBottom:31,borderBottomColor:"#31316A",borderBottomWidth:2,justifyContent:"center",alignItems:"center"}}>
                                   <Text style={{color:"#ffff",fontSize:14,fontFamily:"MuseoSans_300"}}>Thank you for your purchase</Text>

                               </View>
                               <View style={{paddingTop:28,flexDirection:"row",justifyContent:"space-between"}}>
                               <View style={{flexDirection:"column",justifyContent:"center"}}>
                                     <Text style={{color:"#ffff",fontSize:16,fontFamily:"MuseoSans_500"}}>Adidas   10% Off</Text>
                                     <View style={{marginTop:9}}>
                                     <Text style={{color:"#ffff",fontSize:10,fontFamily:"MuseoSans_300"}}>Jun - July, 2020</Text>

                                 </View>
                                 </View>


                                 <View style={{flexDirection:"column",justifyContent:"center"}}>
                                     <Text style={{color:"#ffff",fontSize:14,fontFamily:"MuseoSans_500"}}>300</Text>
                                     <View style={{marginTop:3,alignItems:"center"}}>
                                     <Text style={{color:"#ffff",fontSize:5,fontFamily:"MuseoSans_300"}}>POINTS</Text>

                                 </View>
                                 </View>
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
export default shop3;