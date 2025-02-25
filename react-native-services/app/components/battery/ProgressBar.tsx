import React, { FC, useState, useRef } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';

const ProgressBar:FC = () => {

    const [progress, setProgress] = useState(new Animated.Value(0));
    const animationRef = useRef<Animated.CompositeAnimation | null>(null);
    const [isAnimated, setIsAnimated] = useState(false);

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
        if (isAnimated) return;

        setIsAnimated(true);

        animationRef.current = Animated.loop(
            Animated.sequence([
                fullIn, 
                fullOut
            ]));
        
        animationRef.current.start();
    };

    const stopFullInOut = () => {
        setIsAnimated(false);
        animationRef.current?.stop();
        // animationRef.current?.reset();
        progress.setValue(0);
    }

    return (
        <View>
            <View style={styles.container}>
                <Animated.View style={[styles.bar, { width: progress }]}/>
            </View>
            <View>
                <Button title='Start' onPress={startFullInOut}/>
                <Button title='Stop' onPress={stopFullInOut}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: '#aa6e6e',
    borderRadius: 10,
    margin: 10,
    width: 100,
  },
  bar: {
    height: 20,
    backgroundColor: '#333',
    borderRadius: 10,
  },
});

export default ProgressBar;