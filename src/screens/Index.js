import { StyleSheet, Text, TextInput, View,Touchable, TouchableOpacity, } from 'react-native';
import color from '../Utils/color';


import React from 'react';
export default function Index(props) {

    const {capital,interes,meses} = props;
  return ( <>
   <View style = {styles.viewForm}>
         
      <View style = {styles.viewInput}>
          <TextInput placeholder='Busqueda'  style = {styles.input} onChange={(e)=> busqueda(e.nativeEvent.text)}></TextInput>
          
      </View>
     
    </View>
    <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.buttonCalc} >
                <Text style={styles.calculate}>CALCULAR</Text>
            </TouchableOpacity>

        </View>
  </>
   
   
  );
}

const styles = StyleSheet.create({
    viewFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: color.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    }, buttonCalc: {
        backgroundColor: color.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: "75%",
    },  calculate: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff",
        textAlign: "center",

    },
    viewForm:{
        position : "absolute",
        bottom: 0,
        width : "85%",
        paddingHorizontal: 20,
        //backgroundColor: color.PRIMARY_COLOR_DARK,
        borderRadius : 20,
        height: 280,
        justifyContent: 'center'
    },
    viewInput : {
        flexDirection: 'row'
    },
    input : {
        height: 50,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: color.PRIMARY_COLOR,
        borderRadius: 5,
        width: "100%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal:20
    },
    inputPorcentaje : {
        width: "40%",
        marginLeft: 5
    }, viewFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: color.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    }, calculate: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff",
        textAlign: "center",

    },
    buttonCalc: {
        backgroundColor: color.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: "75%",
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 40,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff",
        marginLeft: -5,
        marginRight: -5
    },
    inputAndroid:{
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff"
    }
});
