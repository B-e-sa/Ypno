import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import AppTouchable from "./AppTouchable";
import { Colors } from "@/constants/Colors";

type Characteristic = {
  name: string;
  color: string;
  icon?: string;
};

const Moods: Characteristic[] = [
  {
    name: "Feliz",
    color: "#90630F",
  },
  {
    name: "Triste",
    color: "#1E458E",
  },
];

type CharacteristicOptionProps = TouchableOpacityProps &
  Characteristic & {
    added?: boolean;
  };

export default function CharacteristicSelector() {
  const [characteristics, setCharacteristics] = useState<Characteristic[]>([]);
  const [addingMood, setAddingMood] = useState(false);

  const handleAddCharacteristic = (characteristic: Characteristic) => {
    if (!characteristics.includes(characteristic)) {
      setCharacteristics([...characteristics, characteristic]);
    }
  };

  const handleRemoveCharacteristic = (characteristic: Characteristic) => {
    setCharacteristics(
      characteristics.filter((c) => c.name !== characteristic.name)
    );
  };

  const CharacteristicOption = ({
    color,
    name,
    added = true,
    icon,
    ...props
  }: CharacteristicOptionProps) => (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: "#90630F",
        width: 92,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Text style={{ color: color }}>{name}</Text>
      {added && <Text>X</Text>}
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>Sentimentos</Text>
      {characteristics.map((c) => (
        <CharacteristicOption
          onPressIn={() => handleRemoveCharacteristic(c)}
          {...c}
        />
      ))}
      <AppTouchable
        touchableProps={{
          style: { width: 67 },
          onPressIn: () => setAddingMood(!addingMood),
        }}
        textProps={{ style: { fontSize: 10 } }}
      >
        ADICIONAR
      </AppTouchable>
      {addingMood &&
        Moods.map((c) => (
          <View style={{ position: "absolute", left: 100 }}>
            <CharacteristicOption
              onPressIn={() => handleAddCharacteristic(c)}
              {...c}
              added={false}
            />
          </View>
        ))}
    </View>
  );
}
