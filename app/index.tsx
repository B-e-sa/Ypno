import CharacteristicSelector from "@/components/CharacteristicSelector";
import FormButton from "@/components/FormButton";
import FormTextInput from "@/components/FormTextInput";
import { Colors } from "@/constants/Colors";
import dayjs from "dayjs";
import { Formik } from "formik";
import { useState } from "react";
import { GestureResponderEvent, View } from "react-native";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";

export default function Index() {
  const [date, setDate] = useState<DateType>(dayjs());
  const [pickingDate, setPickingDate] = useState(false);

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: 254 }}>
            <FormTextInput
              label="Título"
              placeholder="Insira um título"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <FormTextInput
              label="Data"
              placeholder="dd/mm/yyyy"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <FormTextInput
              label="Descrição"
              placeholder="dd/mm/yyyy"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {false && (
              <View style={{ position: "absolute" }}>
                <DateTimePicker
                  mode="single"
                  date={date}
                  onChange={({ date }) => setDate(date)}
                />
              </View>
            )}
            <CharacteristicSelector />
            <FormButton
              color={Colors.purple}
              onPress={handleSubmit as (e?: GestureResponderEvent) => void}
              title="OU GRAVE UM ÁUDIO"
            />
            <FormButton title="SALVAR" color={Colors.purple} />
          </View>
        </View>
      )}
    </Formik>
  );
}
