import React from 'react';
import {ImageBackground, View,Text,Image, StatusBar,TouchableOpacity} from 'react-native';



const Viewspec=({navigation,route})=>{


  const image = require('../assets/Image32.png');
   const itms=route.params.post;

  return(
    <View style={{flex:1,backgroundColor:"#00001F"}}>
      <StatusBar translucent={false} backgroundColor="#00001F"/>
      
      <ImageBackground   source={itms.image} style={{height:288,width:"100%",}}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position:"absolute",top:24,left:30}}>
      <Image style={{height:15,width:17}} source={require('../assets/arrow.png')}/>



      </TouchableOpacity>
         <View  style={{marginTop:103,height:172,backgroundColor:'rgba(0, 0, 31, 0.2)'}}>

         </View>
      </ImageBackground>
      <View style={{position:"absolute",top:270,left:0,height:"100%",width:"100%",backgroundColor:"#00001F"}}>

      </View>
      <View style={{position:"absolute",top:164,left:0,height:"100%",width:"100%",paddingHorizontal:30}}>

        <Text style={{fontSize:26,color:"#ffff",fontFamily:"MuseoSans_500"}}>{itms.name}</Text>

        <View style={{marginTop:15}}>
        <Text style={{fontSize:12,color:"#ffff",fontFamily:"MuseoSans_300"}}>Lorem Ipsum is not simply random text.</Text>

        </View>
        <View style={{marginTop:19}}>
        <Text style={{fontSize:10,color:"#ffff",lineHeight:20,fontFamily:"MuseoSans_500"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </Text>

        </View>
        <View style={{marginTop:23,flexDirection:"row"}}>
           <View style={{height:39,width:39,borderRadius:39/2,borderColor:"#49F04F",borderWidth:2,justifyContent:"center",alignItems:"center"}}>
                 <Image style={{height:19,width:19}} source={require('../assets/like.png')}/>
           </View>
           <View style={{marginLeft:14,height:39,width:39,borderRadius:39/2,borderColor:"#49F04F",borderWidth:2,justifyContent:"center",alignItems:"center"}}>
           <Image style={{height:19,width:19}} source={require('../assets/thumb-down.png')}/>
           </View>
           

        </View>
        <View style={{marginTop:27,}}>

          <ImageBackground style={{height:218,width:"100%",justifyContent:"center",alignItems:"center"}} imageStyle={{borderTopLeftRadius:15,borderTopRightRadius:15}} source={itms.image}>

                 <View style={{height:39,width:39,backgroundColor:'rgba(0, 0, 0, 1)',justifyContent:"center",alignItems:"center",borderRadius:39/2}}>
                 <Image style={{height:13,width:13}} source={require('../assets/play-button.png')}/>
                 </View>
              

              <View style={{position:"absolute",top:16,right:14}}>
                  <Image style={{height:9,width:16}} source={require('../assets/video-camera.png')}/>
              </View>
            </ImageBackground>
          
           

        </View>
 
</View>

    </View>
  )
}
export default Viewspec;