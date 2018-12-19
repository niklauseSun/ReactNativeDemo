import { Dimensions, PixelRatio, Platform } from "react-native";

export const E = {
  DEBUG: true,

  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,

  // 系统是iOS
  IS_IOS: (Platform.OS === 'ios'),
}