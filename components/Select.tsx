import { medicoService } from '@/services/medicos';
import { Especialidade } from '@/types/medicos.types';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
type SelectEspecialidade = {
  setValue: (especialidade: Especialidade) => void;
  value: Especialidade
}
export const Select = ({
  value,
  setValue
}: SelectEspecialidade) => {
  const [isFocus, setIsFocus] = useState(false);
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([])
    useEffect(() => {
      const dataSelect = async () => {
        const data = await medicoService.medicosEspecialidade()
        setEspecialidades(data)
      }
      dataSelect()
    }, [])
  return (
    <View className='bg-white rounded-2xl '>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={especialidades}
        search
        labelField="nome"
        valueField="id"
        placeholder="Buscar..."
        searchPlaceholder="Buscar..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item);
          setIsFocus(false);
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    paddingHorizontal: 8,
    width: 200
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