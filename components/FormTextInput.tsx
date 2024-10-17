import { Colors } from "@/constants/Colors";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type FormTextInputProps = TextInputProps & {
  label?: string;
};

export default function FormTextInput(props?: FormTextInputProps) {
  const textInput = (
    <TextInput {...props} style={[styles.textInput, props?.style]} />
  );

  if (props?.label) {
    return (
      <View>
        <Text>{props.label}</Text>
        {textInput}
      </View>
    );
  }

  return textInput;
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: Colors.gray,
    borderWidth: 1,
    paddingHorizontal: 9 
  },
});
