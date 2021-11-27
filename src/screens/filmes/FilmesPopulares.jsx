import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { Button, Card, Paragraph, Title } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = ({navigation}) => {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        apiFilmes.get('/movie/popular?language=pt-BR').then(resultado=>{
            // console.log(resultado.data.results)
            setFilmes(resultado.data.results)
        })
    }, [])

// console.log(navigation)


    return (
        <ScrollView margin={10}>
            {filmes.map(filme=>(
               <Card key={filme.id} marginTop={10} onPress={() => navigation.push('filmes/detalhes', {id: filme.id})}>
               <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} />
               <Card.Content>
                 <Title>{filme.title}</Title>
                 <Paragraph>({filme.original_title})</Paragraph>
               </Card.Content>
                            </Card>
            ))}
            
            <Button marginTop={10} icon="arrow-right-bold" mode="contained" onPress={() => navigation.push('Home')}>Home</Button>
        </ScrollView>
        
    )
}

export default FilmesPopulares
