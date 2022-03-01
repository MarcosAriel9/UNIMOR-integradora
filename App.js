import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button,Image } from 'react-native';
import color from './src/utils/color';
import React, { useState,useEffect } from 'react';
import Index from './src/screens/Index';


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
       
        <View style={styles.background}></View>
    
      <Index/>
      <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, safeArea: {
    //backgroundColor:color.PRIMARY_COLOR,
    height: 290,
    alignItems: "center"
  },
  tittleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15
  },
  background: {
    //backgroundColor: color.PRIMARY_COLOR,
    alignItems: "stretch",
    backgroundImage: color.IMAGEBACKGR,
    backgroundRepeat: 'no-repeat',
    height: 200,
    width: "100%",
    borderBottomEndRadius: 70,
    borderBottomLeftRadius: 70,
    position: 'absolute',
    zIndex: -1
  }, image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
