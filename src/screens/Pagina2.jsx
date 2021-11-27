import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Text } from 'react-native-paper'

const Pagina2 = ({navigation}) => {
    return (
        <ScrollView>
            <Text>Página 2</Text>
            <Button marginTop={10} icon="arrow-right-bold" mode="contained" onPress={() => navigation.push('Home')}>Home</Button>
            <Button marginTop={10} icon="arrow-right-bold" mode="contained" onPress={() => navigation.push('P1')}>Página 1</Button>


        </ScrollView>
    )
}

export default Pagina2
