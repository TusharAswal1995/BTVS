import Toast from 'react-native-toast-message';
import {View, Text} from 'react-native';
import {moderateScale} from 'constants/moderateScale';
import {Dimensions} from 'react-native';
export const ToastView = (message, type) => {
  console.log(message, 'TOAST_TYPE', type);
  if (message) {
    Toast.show({
      type: type,
      text1: message?.toString(),
      position: 'bottom',
    });
  }
};

export const toastConfig = {
  success: ({text1, topOffset}) => (
    <View
      style={{
        height: moderateScale(45),
        width: Dimensions.get('window').width * 0.9,
        alignSelf: 'center',
        backgroundColor: '#008000',
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: moderateScale(20),
      }}>
      {text1 && (
        <Text
          style={{
            // fontFamily: appFonts.Medium,
            fontSize: moderateScale(12),
            color: 'white',
            textAlign: 'left',
          }}
          numberOfLines={2}>
          {text1}
        </Text>
      )}
    </View>
  ),
  error: ({text1, topOffset}) => (
    <View
      style={{
        height: moderateScale(45),
        width: Dimensions.get('window').width * 0.9,
        alignSelf: 'center',
        backgroundColor: '#EB1F3C',
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: moderateScale(20),
      }}>
      {text1 && (
        <Text
          style={{
            // fontFamily: appFonts.Medium,
            fontSize: moderateScale(12),
            color: 'white',
            textAlign: 'left',
          }}
          numberOfLines={2}>
          {text1}
        </Text>
      )}
    </View>
  ),
};
