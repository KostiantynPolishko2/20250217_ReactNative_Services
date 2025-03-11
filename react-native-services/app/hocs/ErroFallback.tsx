import React, { FC } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type ErrorFallbackProps = {
    error: Error | null,
    resetError: ()=>void,
};

const ErrorFallback: FC<ErrorFallbackProps> = ({ error, resetError }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.textError}>{error?.name.toUpperCase()}!</Text>
      <Text>{error?.message}</Text>
      <Button title="Try Again" onPress={resetError} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 5,
    backgroundColor: '#eb4f34',
  },
  textError: {
    color: 'whitesmoke',
    textAlign: 'center',
    fontWeight: 700,
  }
});

export default ErrorFallback;