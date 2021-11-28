import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Appbar, Button, Card, Paragraph, Title } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { Row, Column as Col } from 'react-native-responsive-grid'

const FilmesPopulares = ({ navigation }) => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiFilmes.get('/movie/popular?language=pt-BR').then(resultado => {
            // console.log(resultado.data.results)
            setFilmes(resultado.data.results)
        })
    }, [])

    // console.log(navigation)


    const styles = StyleSheet.create({
        bottom: {
          position: 'absolute',
          left: 50,
          right: 0,
          bottom: 0,
        },
      });

    return (

        <ScrollView margin={10}>
            
            <Appbar> 
                <Appbar.Action icon="home" style={{marginLeft: 50, marginRight: 40}} onPress={() => navigation.push('Home')}  />
                <Appbar.Action icon="numeric-1" style={{marginLeft: 45, marginRight: 45}} onPress={() => navigation.push('P1')}  />
                <Appbar.Action icon="numeric-2" style={{marginLeft: 40, marginRight: 50}} onPress={() => navigation.push('P2')}  />
                    
                </Appbar>


            <Row >
                {filmes.map(filme => (

                    <Col size={50} key={filme.id} >
                        <TouchableOpacity onPress={() => navigation.push('filmes/detalhes', { id: filme.id })}>
                            <Image style={{ height: 280, margin: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.poster_path }}
                            />
                        </TouchableOpacity>
                    </Col>

                ))}
            </Row>
            {filmes.map(filme => (
                <Card key={filme.id} marginTop={10} onPress={() => navigation.push('filmes/detalhes', { id: filme.id })}>
                    <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} />
                    <Card.Content>
                        <Title>{filme.title}</Title>
                        <Paragraph>({filme.original_title})</Paragraph>
                    </Card.Content>
                </Card>
            ))}



            {/* <Button marginTop={10} icon="arrow-right-bold" mode="contained" onPress={() => navigation.push('Home')}>Home</Button> */}
        </ScrollView>

    )
}

export default FilmesPopulares
