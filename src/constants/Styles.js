import { Dimensions, StyleSheet } from "react-native"
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
export const primaryColor = 'rgba(59, 176, 236, 1)'
export const Styles = StyleSheet.create({
    //Splash
    mainView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    splashImgView:{
        height:"100%",
        width:"100%",
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    loginTopView:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-end",
        marginRight:30,
        marginTop:30
    },
    loginMainView:{
        flex:9,
    },
    loginView:{
        flex:1,
    },
    SignInView:{
        marginTop:"20%",
        alignItems:"center"
    },
    SignInSubView:{
        marginTop:height/40,
        alignItems:"center"
    },
    textFieldView:{
        height:height/12,
        width:"90%",
        backgroundColor: 'rgba(242, 242, 242, 1)',
        alignSelf:"center",
        marginTop:height/25,
        borderRadius:30,
        justifyContent:"center",
    },
    loginButton:{
        height:height/12,
        width:"90%",
        backgroundColor: 'rgba(59, 176, 236, 1)',
        justifyContent:"center",
        alignItems:"center",
        marginTop:height/25,
        borderRadius:30,
        justifyContent:"center",
        alignSelf:"center"
    },
    homeView:{
        flexDirection:"row",
        height:height/10,
        width:"100%",
        backgroundColor:'rgba(59, 176, 236, 1)',
        justifyContent:"space-between",
        alignItems:"center"
    },
    notificationView:{
        height:20,
        width:20,
      },
    swiperView:{ 
        width:width,
        height:height/4.5,
        // padding:30,
        borderRadius:12,
        backgroundColor:"white"
    },
    flatListHome:{
        height:height/1.75,
        backgroundColor:"white",
        width:"100%",
        paddingTop:height/40
    }
});


