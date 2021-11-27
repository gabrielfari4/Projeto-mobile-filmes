import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Text } from 'react-native-paper'

const Pagina1 = ({navigation}) => {
    return (
        <ScrollView>
            <Text>Página 1</Text>
            <Button marginTop={10} icon="arrow-right-bold" mode="contained" onPress={() => navigation.push('Home')}>Home</Button>
            <Button marginTop={10} icon="arrow-right-bold" mode="contained" onPress={() => navigation.push('P2')}>Página 2</Button>


        </ScrollView>
    )
}

export default Pagina1
