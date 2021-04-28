import { NavigationHelpersContext } from '@react-navigation/core';
import React from 'react';
import {View,Image, Text, TextInput,TouchableOpacity,StatusBar,Dimensions,Modal, FlatList} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {AuthContext} from '../desserts/auth'
console.log('statusBarHeight: ', StatusBar.currentHeight);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Dashboard=({navigation})=>{
   
  const {signOut}=React.useContext(AuthContext);
  
  const [visible,setVisible]=React.useState(false);
   
   
   const [Data,setData]=React.useState([
     {
       name:"Nike Joyride",
       description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
       image:require('../assets/Image21.png')
     },
     {
      name:"Nike Sports",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:require('../assets/Image32.png')
    },
    {
      name:"Nike Casual",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:require('../assets/Image30.png')
    }

   ])
   

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
   
   const renderItem=({item,index})=>{
   
    return (
      <View key={index} style={{flexDirection:'row'}}>
       
        <View  style={{ flex:1,flexDirection:"column"}}> 
    
                     
                   <TouchableOpacity onPress={()=>{navigation.navigate('viewspec',{post:item})}} style={{height:windowHeight*0.6,width:"100%"}}> 

                        <Image style={{width:"100%",height:"100%",borderTopLeftRadius:12,borderTopRightRadius:12}} source={item.image}/>
                       
                   </TouchableOpacity>
                   <View style={{backgroundColor:"#171732",paddingLeft:19,justifyContent:"center",height:65,borderBottomEndRadius:12,borderBottomStartRadius:12}}>
                       <Text style={{color:"#ffff",fontFamily:"MuseoSans_500"}}>{item.name}</Text>
                       <View style={{marginTop:10}}>
                       <Text numberOfLines={1} style={{color:"#ffff",fontFamily:"MuseoSans_300"}}>{item.description}</Text> 
                   </View>
                   </View>  

                    
                   </View>
                     
  
  
                   
        </View>   
      
  
    )
  };
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
                      
                      <TouchableOpacity onPress={()=>setVisible(true)} style={{justifyContent:"center",alignItems:"center"}}>
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


            <View style={{marginTop:19,paddingLeft:25}}>

                   <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_700"}}>News</Text>

            </View>

            <View style={{marginTop:18,width:windowWidth}}>
            <Carousel
            Pagination={true}
            hasParallaxImages={true}
              data={Data}
              renderItem={renderItem}
              sliderWidth={windowWidth}
              itemWidth={windowWidth-60}
            />
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
<View style={{position:"absolute",top:81,right:20}}>
  <TouchableOpacity onPress={()=>{signOut()}}>
    <Text style={{color:"#ffff",fontSize:12,fontFamily:"MuseoSans_700"}}>Sign out</Text>
  </TouchableOpacity>
</View>
    </View>

  )

}
export default Dashboard;