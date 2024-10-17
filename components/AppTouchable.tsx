import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  TextProps,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

type AppButtonProps = {
  touchableProps?: TouchableOpacityProps;
  textProps?: TextProps;
  children?: ReactNode;
};

export default function AppTouchable({
  touchableProps,
  textProps,
  children,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      {...touchableProps}
      style={[styles.appTouchable, touchableProps?.style]}
    >
      <Text {...textProps} style={[{ textAlign: "center" }, textProps?.style]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appTouchable: {
    borderBlockColor: Colors.gray,
    borderWidth: 1,
  },
});
