import {
  TextInput,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import {
  useForm,
  Controller,
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  FieldValues,
  UseFormWatch,
} from "react-hook-form";
import { RegisterSchema } from "../schemas/register";
import { Select } from "../components/Select";
import { errorsMessage } from "./useErrorsMessage";

type UseFormController = {
  control: Control<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
  handleSubmit: UseFormHandleSubmit<RegisterSchema>;
  watch: UseFormWatch<RegisterSchema>;
};
export const UseFormRegister = ({
  control,
  errors,
  handleSubmit,
  watch,
}: UseFormController) => {

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  console.log(errors)
  return (
    <View className="bg-white flex-[0.8] rounded-tl-[150px] w-[100%] mt-10">
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="mt-8 bg-gray-200 rounded-xl h-15 border-1 p-5"
            placeholder="Nome"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errorsMessage(errors.nome)}
      <Controller
        control={control}
        name="sobrenome"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="mt-8 bg-gray-200 rounded-xl h-15 border-1 p-5"
            placeholder="Sobrenome"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errorsMessage(errors.sobrenome)}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="mt-8 bg-gray-200 rounded-xl h-15 border-1 p-5"
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errorsMessage(errors.email)}
      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="mt-8 bg-gray-200 rounded-xl h-15 border-1 p-5"
            placeholder="Senha"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errorsMessage(errors.senha)}
      <Controller
        control={control}
        name="confirmaSenha"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="mt-8 bg-gray-200 rounded-xl h-15 border-1 p-5"
            placeholder="Confirmar senha"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errorsMessage(errors.confirmaSenha)}
      <View className="flex-row justify-center items-center gap-2">
        <Controller
          control={control}
          name="estado"
          render={({ field: { onChange, value } }) => (
            <View className="my-4 flex-1 flex-col">
              <Text>Estado</Text>
              <Select
                placeholder=" Estado"
                data={[
                  { id: 1, nome: "Mulher" },
                  { id: 2, nome: "Homem" },
                ]}
                onChange={onChange}
                value={value}
              />
              {errorsMessage(errors.estado)}
            </View>
          )}
        />
        <Controller
          control={control}
          name="cidade"
          render={({ field: { onChange, value } }) => (
            <View className="my-4 flex-1 flex-col">
              <Text>Cidade</Text>
              <Select
                data={[
                  { id: 1, nome: "Médico" },
                  { id: 2, nome: "Paciente" },
                ]}
                onChange={onChange}
                value={value}
                placeholder=" Cidade"
              />
              {errorsMessage(errors.cidade)}
            </View>
          )}
        />
      </View>
      <View className="  gap-2">
        <Controller
          control={control}
          name="genero"
          render={({ field: { onChange, value } }) => (
            <View className="my-4 flex-1">
              <Text>Sexo</Text>
              <Select
                placeholder="Gênero"
                data={[
                  { id: 1, nome: "Mulher" },
                  { id: 2, nome: "Homem" },
                ]}
                onChange={onChange}
                value={value}
              />
              {errorsMessage(errors.genero)}
            </View>
          )}
        />
        <Controller
          control={control}
          name="tipo"
          render={({ field: { onChange, value } }) => (
            <View className="mb-4 flex-1">
              <Text>Tipo</Text>
              <Select
                data={[
                  { id: 1, nome: "Médico" },
                  { id: 2, nome: "Paciente" },
                ]}
                onChange={(select) => onChange(select.id)}
                value={value}
                placeholder="Persona"
              />
            </View>
          )}
        />
        {errorsMessage(errors.tipo)}
      </View>
      {watch("tipo") === 1 && (
        <>
          <Controller
            control={control}
            name="especialidade"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="mt-4 bg-gray-200 rounded-xl h-15 border-1 p-5"
                placeholder="Especialidade"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errorsMessage(errors.especialidade)}
          <Controller
            control={control}
            name="CRM"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="mt-8 bg-gray-200 rounded-xl h-15 border-1 p-5"
                placeholder="CRM"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errorsMessage(errors.CRM)}
          <Controller
            control={control}
            name="descricao"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="mt-8 bg-gray-200 rounded-xl h-15 border-1 p-5"
                placeholder="Descrição"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errorsMessage(errors.descricao)}
        </>
      )}

      <TouchableOpacity
        className="mt-12  rounded-tl-3xl rounded-b-3xl p-4 bg-black"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-center text-white">Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
