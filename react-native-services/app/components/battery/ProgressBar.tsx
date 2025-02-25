import React, { FC, useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import * as Battery from 'expo-battery';

const ProgressBar:FC = () => {

    const [progress, setProgress] = useState(new Animated.Value(0));
    // const [isAnimated, setIsAnimated] = useState(false);
    const [isCharged, setICharged] = useState<boolean>(false);

    const animationRef = useRef<Animated.CompositeAnimation | null>(null);

    useEffect(()=>{
        const subcription = Battery.addBatteryStateListener(
            ({batteryState}) => {
                setICharged(batteryState === 2);
                // console.log('battery state listner', isCharged? 'charged' : 'unplugged');
            }
        );

        return ()=>subcription.remove();
    }, []);

    const fullIn = Animated.timing(progress, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
    });

    const fullOut = Animated.timing(progress, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
    });

    const startFullInOut = () => {
        // if (isAnimated) return;

        // setIsAnimated(true);

        animationRef.current = Animated.loop(
            Animated.sequence([
                fullIn, 
                fullOut
            ]));
        
        animationRef.current.start();
    };

    const stopFullInOut = () => {
        // setIsAnimated(false);
        animationRef.current?.stop();
        progress.setValue(0);
    };

    useEffect(()=>{
        isCharged? startFullInOut() : stopFullInOut();
    }, [isCharged]);

    if(!isCharged){
        return (
            <></>
        )
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.bar, { width: progress }]}/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: '#756868',
    borderRadius: 10,
    margin: 10,
    width: 100,
    position: 'relative',
    left: 5,
  },
  bar: {
    height: 20,
    backgroundColor: '#25be20',
    borderRadius: 10,
  },
});

export default ProgressBar;