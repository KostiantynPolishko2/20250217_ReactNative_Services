import React, { useState } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';

const ProgressBar = () => {

    const [progress, setProgress] = useState(new Animated.Value(0));

    const fullIn = () => {
        Animated.timing(progress, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };

    const fullOut = () => {
        Animated.timing(progress, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    }

    return (
        <View>
            <View style={styles.container}>
                <Animated.View style={[styles.bar, { width: progress }]}/>
            </View>
            <Button title='FullIn' onPress={fullIn}/>
            <Button title='FullOut' onPress={fullOut}/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: '#aa6e6e',
    borderRadius: 10,
    margin: 10,
  },
  bar: {
    height: 20,
    backgroundColor: '#333',
    borderRadius: 10,
  },
});

export default ProgressBar;