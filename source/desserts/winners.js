import React from 'react';
import {View,Image, Text, TextInput,TouchableOpacity,StatusBar,Dimensions,Modal, FlatList,Switch} from 'react-native';

console.log('statusBarHeight: ', StatusBar.currentHeight);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Winners=()=>{
    const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  const data=[
      {
        rank:1  ,
        name:"Henry ramirez",
        points:17880,
        profile:require('../assets/man.png')

      },
      {
        rank:2  ,
        name:"Kara Cloutier",
        points:15860,
        profile:require('../assets/photo.png')

    },
    {
        rank:3  ,
        name:"Carl Johnson",
        points:13540,
        profile:require('../assets/profile.jpg')

    },
    {
        rank:4 ,
        name:"Nathan Holt",
        points:11380,
        profile:require('../assets/profile.jpg')

    },
    {
        rank:5 ,
        name:"Jade Arnett",
        points:8750,
        profile:require('../assets/woman.png')

    }
  ]


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


            <View style={{marginTop:19,paddingHorizontal:25,flexDirection:"row",justifyContent:"space-between"}}>
                   <View style={{}}>
                   <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_700"}}>RANKING</Text>
                   </View>
                   <View style={{flexDirection:"row"}}>
                   <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>MONTHLY</Text>
                   <View style={{marginHorizontal:10,height:31}}>
                   <Switch
            style={{height:18 }}       
        trackColor={{ false: "#212143", true: "#212143" }}
        thumbColor={isEnabled ? "#36C7FF" : "#36C7FF"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

                   </View>
                   <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>YEARLY</Text>
                   </View>

            </View>
            <View style={{flex:1,marginTop:19,paddingHorizontal:25}}>
                  <FlatList style={{flex:1}} data={data} renderItem={({item})=>{

                      return(
                          <View style={{flex:1,marginTop:24}}>
                          <View style={{flexDirection:"row",justifyContent:"space-between",paddingBottom:23,borderBottomColor:"#181835",borderBottomWidth:2}}>
                              <View style={{flexDirection:"row"}}>
                              <View style={{width:"15%",justifyContent:"center"}}>
                                  <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>{item.rank}</Text>
                          </View>
                          <View style={{marginRight:20}}>
                                <Image style={{height:37,width:37,borderRadius:37/2}} source={item.profile}/>
                                  
                          </View>
                          <View style={{marginRight:20,flexDirection:"column"}}>
                               <View>
                                   <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>{item.name}</Text>
                                   </View>
                                   <View style={{marginTop:12,flexDirection:"row"}}>
                                   <View style={{marginRight:4,justifyContent:"center"}}>
                                <Image style={{height:9,width:9}} source={require('../assets/star.png')}/> 
                                  
                          </View>
                                   <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_300"}}>{item.points}</Text>
                                   </View>
                                   </View>

                                  
                          </View>


                          <View style={{justifyContent:"center",alignItems:"center"}}>

                              <Image style={{height:23,width:23}} source={require('../assets/logo.png')}/>
                              </View>




                          </View>
                          </View>
                      )

                  }}/>
            </View>
            

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

  )

}
export default Winners;