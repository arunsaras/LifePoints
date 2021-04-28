import React,{useContext,useMemo,useReducer,useEffect} from 'react';
import {View,StatusBar,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AuthContext} from './source/desserts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Signin from './source/desserts/signin'
import Signup from './source/desserts/signup'
import Active from './source/desserts/active'
import Forgot from './source/desserts/forgot'
import Reset from './source/desserts/reset'

import Dashboard from './source/desserts/dashboard'
import Viewspec from './source/desserts/viewspec'


import Winners from './source/desserts/winners'



import Qr from './source/desserts/qr'


import Shop1 from './source/desserts/shop1'
import Shop2 from './source/desserts/shop2'
import Shop3 from './source/desserts/shop3'





const Tabb = createBottomTabNavigator();

const Main = createStackNavigator();

     

const MyTabs=()=> {


  const DashboardStack =()=>{

    const Stack = createStackNavigator();
    return(
      <View style={{flex:1,backgroundColor:"#00001F"}}>
      <Stack.Navigator   screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Dashboard} />

        <Stack.Screen name="viewspec" component={Viewspec} />

        
      
      </Stack.Navigator>
      </View>
    

    )
       
  }


const QrStack=()=>{
  const Qrstack = createStackNavigator();
    return(
      <View style={{flex:1,backgroundColor:"#00001F"}}>
   
      <Qrstack.Navigator  screenOptions={{
        headerShown: false
      }}>
        <Qrstack.Screen name="Home" component={Qr} />

      
      </Qrstack.Navigator>
    
</View>
    )

}


  const WinnersStack =()=>{

    const Stick = createStackNavigator();
    return(
      <View style={{flex:1,backgroundColor:"#00001F"}}>

 
      <Stick.Navigator  screenOptions={{
        headerShown: false
      }}>
        <Stick.Screen name="Home" component={Winners} />

      
      </Stick.Navigator>
     
</View>
    )
       
  }

  const CartStack=()=>{

    const Cartstack = createStackNavigator();
    return(
<View style={{flex:1,backgroundColor:"#00001F"}}>
 
      <Cartstack.Navigator  screenOptions={{
        headerShown: false
      }}>
        <Cartstack.Screen name="Home" component={Shop1} />
        <Cartstack.Screen name="shop2" component={Shop2} />
        <Cartstack.Screen name="shop3" component={Shop3} />
       
      
      </Cartstack.Navigator>
     
</View>
    )
    
  }




  const Tab=()=>{
    return(
      <View style={{flex:1,backgroundColor:"#00001F"}}>
    <Tabb.Navigator    tabBarOptions={{
showIcon: true,
showLabel: true,
showLabel:false,

// activeTintColor: COLORS.tabSelected,
// inactiveTintColor: COLORS.tabNormal,

style: {
backgroundColor:"#00001F",
borderTopWidth: 0 
// borderTopWidth: 0,
// position: 'absolute',
// elevation: 0 // <-- this is the solution
},

}}>
      <Tabb.Screen  options={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            style={{ width: 27, height: 27 ,resizeMode:"contain"}}
            source={
              focused
                ? require("./source/assets/menue.png")
                : require("./source/assets/menu.png")
            }
          />
        ),
    })} name="Home" component={DashboardStack} />



      <Tabb.Screen options={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            style={{ width: 27, height: 27 ,resizeMode:"contain"}}
            source={
              focused
                ? require("./source/assets/qr-codee.png")
                : require("./source/assets/qr-code.png")
            }
          />
        ),
    })} name="qr" component={QrStack} />



<Tabb.Screen options={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            style={{ width: 27, height: 27 ,resizeMode:"contain"}}
            source={
              focused
                ? require("./source/assets/gold-cupe.png")
                : require("./source/assets/gold-cup.png")
            }
          />
        ),
    })} name="winners" component={WinnersStack} />



<Tabb.Screen options={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            style={{ width: 27, height: 27 ,resizeMode:"contain"}}
            source={
              focused
                ? require("./source/assets/shopping-carte.png")
                : require("./source/assets/shopping-cart.png")
            }
          />
        ),
    })} name="cart" component={CartStack} />
    </Tabb.Navigator>
  
      </View>
    )
  }

  const initialLoginState={
    
    is_loading: true,
    userName:null,
    userToken:null,
    userBoard:null,
    
    

};

const loginReducer =(prevState,action)=>{
    switch(action.type) {
        case 'RetrieveToken':
            return{
                ...prevState,
                userToken:action.token,
                is_loading:false,
                userBoard:"ddddd",
            };
            case 'LOGIN':
            return{...prevState,
                userName:action.id,
                userToken:action.token,
                userBoard:"ddddd",
                is_loading:false,
                
                
            };
    
    case 'LOGOUT' :
            return{...prevState,
                userName:null,
                userToken:null,
                is_loading:false,
                userBoard:"ddddd",
                
            };
    
    case 'REGISTER':
        
            return{...prevState,
                // userName:action.id,
                userToken:action.token,
                is_loading:false,
                userBoard:action.Board,
                
                
            };
      case 'oNboard':
            return{...prevState,
                // userName:action.id,
               // userToken:action.token,
                is_loading:false,
                userBoard:action.Board,

            }
            
        }
}

const[loginState,dispatch]=React.useReducer(loginReducer,initialLoginState);
const authContext  = useMemo(()=>( {
  signIn:async(ID,Password,value)=>{   

let userToken;

userToken=null;

    
    try {
      userToken="dwqcdwecwa";
        await AsyncStorage.setItem('userToken',userToken)

      } catch (error) {
        // Error saving data
        console.log(error);
      }

      try {
       
          await AsyncStorage.setItem('userInfo',JSON.stringify(value))
  
        } catch (error) {
          // Error saving data
          console.log(error);
        }
     console.log('sss',userToken)
  
dispatch({type:'LOGIN',id:ID,token:userToken,});
},
  
onBoard: (userBoard)=>{
//   let userBoard;

// userBoard=null;
  //  try {
  //     userBoard="dwqcdwecwa";
  //       await AsyncStorage.setItem('userBoard',userBoard)
  //     } catch (error) {
  //       // Error saving data
  //       console.log(error);
  //     }
  //     console.log("as",userBoard);
  dispatch({type:'oNboard',Board:userBoard});
}, 
   
 
  signOut: async()=>{
    try {
        userToken='uyhoyy';
        await AsyncStorage.removeItem(
          'userToken'
         
        );
      } catch (error) {
        // Error saving data
        console.log(error)
      }
      try {
        
        await AsyncStorage.removeItem(
          'userInfo'
         
        );
      } catch (error) {
        // Error saving data
        console.log(error)
      }
    
    dispatch({type:'LOGOUT'});
    },
    
  


 }));

  useEffect(()=>{
    setTimeout(async()=>{console.log(userToken);
console.log('3')
let userBoard=null;
  try {
   
   userBoard= await AsyncStorage.getItem(
     'userBoard' 
    );
    
  
  } catch (error) {
    // Error saving data
    console.log(error)
  }
   
  try {
   
   var tempuserInfo= await AsyncStorage.getItem(
      'userInfo' 
     );
     
   
   } catch (error) {
     // Error saving data
     console.log(error)
   }
   global.profileInfo=JSON.parse(tempuserInfo);
   console.log("gloobal",global.profileInfo)
     let userToken;
  userToken=null;
  try {
   
   userToken= await AsyncStorage.getItem(
     'userToken' ,
    );
    console.log(userToken);
    console.log("as",userBoard);
  
  } catch (error) {
    // Error saving data
    console.log(error)
  }

  dispatch({type:'REGISTER',Board:userBoard,token:userToken});},2000);},
  []
  );
  

  if(loginState.is_loading){
     console.log("2")
     return(
       
     <View style={{flex:1,backgroundColor:"#00001F",justifyContent:"center",alignItems:"center"}}>
       <StatusBar  backgroundColor="#00001F" />
       <View style={{height:278,width:278,borderRadius:278/2,borderWidth:2,borderColor:"#24244B",justifyContent:"center",alignItems:"center"}}>
       <Image  source={require('./source/assets/logo.png')}/>
       </View>

     </View>
  );

};



  




  return (
    <View style={{flex:1 ,backgroundColor:"#00001F"}}>
       <AuthContext.Provider value={authContext}>

<StatusBar  backgroundColor="#00001F" />

      <NavigationContainer>
      {loginState.userToken==null?(
            <Main.Navigator screenOptions={{headerShown:false}}>
                  <Main.Screen name="signin" component={Signin}/>
                  <Main.Screen name="signup" component={Signup}/>
                  <Main.Screen name="forgot" component={Forgot}/>
                  <Main.Screen name="active" component={Active}/>
                  <Main.Screen name="reset" component={Reset} />
            </Main.Navigator>):(
              
              <Tab/>
            )}
      </NavigationContainer>
    
    </AuthContext.Provider>
     </View>
  );
}
export default MyTabs;




