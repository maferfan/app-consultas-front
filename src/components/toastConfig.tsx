import  { SuccessToast, ErrorToast, ToastProps } from 'react-native-toast-message';

export const toastConfig = {
  success: (props: ToastProps) => (
    <SuccessToast
      {...props}
      style={{
        borderLeftColor: "green",
        elevation: 10, 
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1Style={{
        fontSize: 17,
        fontWeight: "400",
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),

  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: "red",
        elevation: 10, 
      }}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};



