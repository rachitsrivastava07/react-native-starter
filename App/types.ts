import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Home: undefined;
  Todos: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamsList, 'Home'>;
export type TodosProps = NativeStackScreenProps<RootStackParamsList, 'Todos'>;
