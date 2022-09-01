import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { useState } from 'react';

export default function App() {
  const [initial, setInitial] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  const onPressHandler = () => {
    setInitial(true);
  };

  const textAnimateEmail = () => {
    setTouchedEmail(true);
  };
  const textAnimatePassword = () => {
    setTouchedPassword(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressHandler} activeOpacity={1}>
        <MotiView
          animate={{
            height: initial ? 250 : 50,
            borderRadius: initial ? 30 : 0,
            width: initial ? 250 : 200,
          }}
          transition={{
            height: { type: 'timing', duration: 1000, delay: 1000 },
            borderRadius: { type: 'timing', duration: 1000, delay: 2000 },
            width: { type: 'timing', duration: 1000 },
          }}
          style={{
            backgroundColor: 'black',
            height: 50,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!initial && (
            <MotiText
              animate={{ opacity: initial ? 0 : 1, scale: initial ? 0 : 1.2 }}
              transition={{
                opacity: { type: 'timing', duration: 2000 },
                scale: {
                  type: 'spring',
                },
              }}
              style={{
                color: 'white',
                fontSize: 30,
                // fontWeight: "bold",
                textAlign: 'center',
                position: 'absolute',
              }}
            >
              Start
            </MotiText>
          )}
          <MotiView
            animate={{ opacity: initial ? 1 : 0 }}
            transition={{
              opacity: { type: 'timing', duration: 2000, delay: 1000 },
            }}
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0,
            }}
          >
            <MotiView style={styles.textInput}>
              <TouchableOpacity activeOpacity={1} onPress={textAnimateEmail}>
                <MotiView
                  animate={{ translateY: touchedEmail ? -15 : 0 }}
                  transition={{ type: 'timing', duration: 300 }}
                >
                  <MotiText style={styles.inputText}>Email</MotiText>
                </MotiView>
              </TouchableOpacity>
            </MotiView>
            <MotiView style={styles.textInput}>
              <TouchableOpacity activeOpacity={1} onPress={textAnimatePassword}>
                <MotiView
                  animate={{ translateY: touchedPassword ? -15 : 0 }}
                  transition={{ type: 'timing', duration: 300 }}
                >
                  <MotiText style={styles.inputText}>Password</MotiText>
                </MotiView>
              </TouchableOpacity>
            </MotiView>
          </MotiView>
        </MotiView>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
    padding: 10,
  },
  inputText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
