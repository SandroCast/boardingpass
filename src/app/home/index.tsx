import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.header} source={require("src\assets\cover.PNG")}>



      </ImageBackground>
    </View>
  );
}


