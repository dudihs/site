
import { View, Text } from 'react-native';
import Detalhes from './sources/telas/carrinho/Detalhes';
import Topo from './sources/telas/carrinho/Topo';
import mocks from "./sources/mocks/carrinho";

export default function App() {
  return (
    <View>
      <Text>Principal</Text>
      <Topo {...mocks.topo} />
      <Detalhes />
    </View>
  )
}
