import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Button, Card, Divider, List, Paragraph, Title } from 'react-native-paper'
import Pagina1 from './Pagina1'

const Home = ({navigation}) => {


    return (
        <ScrollView margin={10}>
      <View>
        <Text >Open up App.js to start working on your app!</Text>

        <Button marginTop={10} icon="arrow-right-bold" mode="contained" onPress={() => navigation.push('P1')}>Página 1</Button>
        <Button marginTop={10} icon="arrow-right-bold" mode="contained" onPress={() => navigation.push('P2')}>Página 2</Button>
        <Button marginTop={10} icon="arrow-right-bold" mode="contained" onPress={() => navigation.push('filmes/populares')}>Filmes</Button>

        <Card marginTop={10}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => console.log('OK')}>Detalhar</Button>
            
          </Card.Actions>
        </Card>
        <List.Item title="First Item" description="Item description" left={props => <List.Icon {...props} icon="folder" />} />
        <Divider />
        <List.Item title="First Item" description="Item description" left={props => <List.Icon {...props} icon="all-inclusive" />} />
        <Divider />
        <List.Item title="First Item" description="Item description" left={props => <List.Icon {...props} icon="heart" />} />
        <Divider />
        <List.Item title="First Item" description="Item description" left={props => <List.Icon {...props} icon="bell" />} />

      </View>

    </ScrollView>
    )
}

export default Home
