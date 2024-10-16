import { Button, GestureResponderEvent, TextInput, View } from "react-native";
import { Formik } from "formik";

export default function Index() {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <Button
            onPress={handleSubmit as (e?: GestureResponderEvent) => void}
            title="Submit"
          />
        </View>
      )}
    </Formik>
  );
}
