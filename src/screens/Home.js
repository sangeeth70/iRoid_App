import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React,{useEffect,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {primaryColor, Styles} from '../constants/Styles'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { BASE_URL, HOME } from '../constants/NetworkConstants';
import axios from 'axios';
import Images from '../constants/Images';
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {
  const banner = {
    "banners": [
      {
          "id": 1,
          "name": "B1 Ar",
          "image": Images.bannerImage
      },
      {
        "id": 2,
        "name": "B1 Ar",
        "image": Images.bannerImage
    }
  ],
};

  const itemList = {
    "meal_categories": [
      {
          "id": 1,
          "name": "Food item A",
          "image": Images.food1,
      },
      {
        "id": 2,
        "name": "Food item B",
        "image": Images.food2,
      },
      {
        "id": 3,
        "name": "Food item C",
        "image": Images.food3,
      },
      {
        "id": 4,
        "name": "Food item D",
        "image": Images.food4,
      },
      {
        "id": 5,
        "name": "Food item E",
        "image": Images.bannerImage,
      },

]
}
  const [Data, setData] = useState({})
  useEffect(() => {
    HomeAPI();
  }, [])
  
  const HomeAPI = async() =>{
    try{
      console.log(banner);
      console.log(itemList);
    }
    catch(err){
      console.log(err);
    }
}
  return (
    <SafeAreaView>
      <AppHeader/>
      <View style={Styles.swiperView}>
      <SwiperFlatList
      autoplay
      autoplayDelay={3}
      autoplayLoop
      showPagination
      paginationStyleItemActive={{height:10,width:10,bottom:2}}
      paginationStyleItemInactive={{height:5,width:5}}
      paginationDefaultColor={"grey"}
      paginationActiveColor={"white"}
      data={banner.banners}
      renderItem={( item ) => (
        <View style={Styles.swiperView}>
        <Image
        style={{height:"90%",width:"90%",borderRadius:12,marginTop:6,alignSelf:"center"}}
        source={item.item.image}
        />
      </View>
      )}
    />
    </View>
    <View style={Styles.flatListHome}>
    <FlatList
    data={itemList.meal_categories}
    renderItem={( item ) => (
      <View style={[Styles.swiperView,{height:150,justifyContent:"flex-end",marginBottom:20,}]}>
      <Image
      style={{height:"90%",width:"90%",borderRadius:12,marginTop:6,alignSelf:"center"}}
      source={item.item.image}
      />
      <View style={{flexDirection:"row",position:"absolute",height:40,width:"90%",backgroundColor:"rgba(146, 146, 146, 1)",alignSelf:"center",borderBottomEndRadius:12,borderBottomStartRadius:12,opacity:0.9,paddingLeft:20,paddingRight:20,alignItems:"center",justifyContent:"space-between"}}>
        <Text style={{fontSize:18,fontWeight:"600",color:"white"}}>{item.item.name}</Text>
        <View style={{height:40,width:40,elevation:1,backgroundColor:"white",borderRadius:30,marginTop:30,justifyContent:"center",alignItems:"center"}}>
          <Image
            style={[Styles.notificationView]}
            source={Images.arrow}
          />
        </View>
      </View>
    </View>
    )}
    />
    </View>
    </SafeAreaView>
  )
}

const AppHeader = () =>{
  return(
    <View style={Styles.homeView}>
      <View style={{height:"100%",width:"20%",}}/>
      <View style={{height:"100%",width:"50%",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:26,fontWeight:"900",color:"white",letterSpacing:2,}}>iRoid</Text>
      </View>
      <TouchableOpacity style={{width:"20%",flexDirection:"row",alignItems:"center",justifyContent:"center",}}>
      <Image
        resizeMode='stretch'
        style={{height:20,width:20,}}
        source={require('../assets/bell-ring.png')}/>
      </TouchableOpacity>
    </View>
  )
}

export default Home