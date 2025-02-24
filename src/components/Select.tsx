import { medicoService } from "@/src/services/medicos";
import { Especialidade } from "@/src/types/medicos.types";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type Options = {
  id: number;
  nome: string;
};
const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
type SelectEspecialidade = {
  onChange: (item: any) => void;
  value: Options | string | number;
  data: Options[];
  placeholder?: string;
};

export const Select = ({
  value,
  onChange,
  data,
  placeholder,
}: SelectEspecialidade) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View className="rounded-2xl bg-gray-200">
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        labelField="nome"
        valueField="id"
        placeholder={placeholder ?? "Buscar.."}
        searchPlaceholder={placeholder ?? "Buscar.."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(item);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: "black",
    borderRadius: "1rem",
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
