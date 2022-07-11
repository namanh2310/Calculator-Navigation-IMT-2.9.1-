import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Text,
  TextInput
} from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectDropdown from 'react-native-select-dropdown';

function Welcome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.welcomeTitle}>Welcome</Text>
      <Button
        title="TRUY CẬP"
        onPress={() => {
          setTimeout(() => {
            navigation.navigate('Tính Toán');
          }, 1000);
        }}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100,
      }}>
      <View
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 20,
          paddingBottom: 20
        }}>
        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() => navigation.navigate('Cộng Trừ Nhân Chia')}>
          <View>
            <Text style={styles.text}>CỘNG TRỪ NHÂN CHIA</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() => navigation.navigate('Phương Trình Bậc 1')}>
          <View>
            <Text style={styles.text}>PHƯƠNG TRÌNH BẬC 1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() => navigation.navigate('Phương Trình Bậc 2')}>
          <View>
            <Text style={styles.text}>PHƯƠNG TRÌNH BẬC 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function basicCalculation({ navigation }) {
  const [first, setFirst] = React.useState(ope);
  const [second, setSecond] = React.useState();
  const [ope, setOpe] = React.useState();
  const oper = ['+', '-', '*', '/'];

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100,
      }}>
      <View
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <TextInput
          value={first}
          style={styles.inputTag}
          placeholder="Nhập số a"
          onChangeText={(e) => setFirst(e.replace(/^0+/, ''))}
        />

        <View style={{ fontSize: 48 }}>
          <SelectDropdown
            data={oper}
            onSelect={(selectedItem, index) => setOpe(selectedItem)}
          />
        </View>

        <TextInput
          value={second}
          style={styles.inputTag}
          placeholder="Nhập số b"
          onChangeText={(e) => setSecond(e.replace(/^0+/, ''))}
        />

        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() =>
            navigation.navigate('Kết Quả', {
              result: eval(first + ope + second),
            })
          }>
          <View>
            <Text style={styles.text}>Tính</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function simpleEquation({ navigation }) {
  const [first, setFirst] = React.useState();
  const [second, setSecond] = React.useState();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100,
      }}>
      <View
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <TextInput
          value={first}
          style={styles.inputTag}
          placeholder="Nhập số a"
          onChangeText={(e) => setFirst(e.replace(/^0+/, ''))}
        />

        <TextInput
          value={second}
          style={styles.inputTag}
          placeholder="Nhập số b"
          onChangeText={(e) => setSecond(e.replace(/^0+/, ''))}
        />

        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() =>
            navigation.navigate('Kết Quả', {
              result: -second / first,
            })
          }>
          <View>
            <Text style={styles.text}>Tính</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function quadraticEquation({ navigation }) {
  const [first, setFirst] = React.useState();
  const [second, setSecond] = React.useState();
  const [third, setThird] = React.useState();

  function handleQuadratic() {
    const discriminant = second * second - 4 * first * third;    
    let rootA 
    let rootB
    if (discriminant > 0) {
      rootA = (-second + Math.sqrt(discriminant)) / (2 * first);
      rootB = (-second - Math.sqrt(discriminant)) / (2 * first);
    } else if (discriminant == 0) {
      rootA = -second / (2 * first);
      rootB = -second / (2 * first);
    } else {
      let realPart = (parseFloat(-second) / (2 * parseFloat(first))).toFixed(2);
      let imagPart = (Math.sqrt(-discriminant) / (2 * parseFloat(first))).toFixed(2);
      rootA = realPart + '+' + imagPart + 'i';
      rootB = realPart + '-' + imagPart + 'i';
    }
    return <View>
            <Text>{rootA}</Text> 
            <Text>{rootB}</Text>
          </View>
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100,
      }}>
      <View
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',

        }}>
        <TextInput
          value={first}
          style={styles.inputTag}
          placeholder="Nhập số a"
          onChangeText={(e) => setFirst(e.replace(/^0+/, ''))}
        />

        <TextInput
          value={second}
          style={styles.inputTag}
          placeholder="Nhập số b"
          onChangeText={(e) => setSecond(e.replace(/^0+/, ''))}
        />

        <TextInput
          value={third}
          style={styles.inputTag}
          placeholder="Nhập số c"
          onChangeText={(e) => setThird(e.replace(/^0+/, ''))}
        />

        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() =>
            navigation.navigate('Kết Quả', {
              result: handleQuadratic(),
            })
          }>
          <View>
            <Text style={styles.text}>Tính</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function resultScreen() {
  const route = useRoute();

  return (
    <View
      style={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ fontSize: 64, fontWeight: "600" }}>
        {route.params.result}
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Chào Mừng" component={Welcome} />
        <Stack.Screen name="Tính Toán" component={HomeScreen} />
        <Stack.Screen name="Cộng Trừ Nhân Chia" component={basicCalculation} />
        <Stack.Screen name="Phương Trình Bậc 1" component={simpleEquation} />
        <Stack.Screen name="Phương Trình Bậc 2" component={quadraticEquation} />
        <Stack.Screen name="Kết Quả" component={resultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  welcomeTitle: {
    fontSize: 48,
    marginBottom: 12,
    color: '#757575',
    fontWeight: "600",
  },
  buttonTag: {
    width: '80%',
    height: 50,
    backgroundColor: '#2196F3',
    borderRadius: 16,
    border: '2px #2196F3 solid',
  },
  text: {
    margin: 'auto',
    lineHeight: 50,
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
    textAlign: "center",
  },
  inputTag: {
    width: '80%',
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#2196F3",
    paddingLeft: 5,
  },
});

export default App;
