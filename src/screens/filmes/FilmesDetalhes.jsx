import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, Card, Divider, List, Paragraph, Title, Button } from 'react-native-paper'
import ImagemCapa from '../../components/ImagemCapa'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = ({ navigation, route }) => {

    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {
        const id = route.params.id

        apiFilmes.get(`/movie/${id}?language=pt-BR`).then(resultado => {
            setFilme(resultado.data)

        })

        apiFilmes.get(`/movie/${id}/credits?language=pt-BR`).then(resultado => {
            setAtores(resultado.data.cast)

        })

    }, [])

    const styles = StyleSheet.create({

        logo: {
            width: 120,
            height: 200,
        },
    });

    const imagemAtor = (foto) => {
        // if(foto){
        //     return <Avatar.Image size={50} source={{uri: 'https://image.tmdb.org/t/p/w500/' + foto}} />
        // } else {            
        //     return <Avatar.Icon size={50} icon="alert-octagon" />
        // }

        return foto ?
            <Avatar.Image size={50} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + foto }} /> :
            <Avatar.Icon size={50} icon="alert-octagon" />
    }

    return (
        <ScrollView>

            {filme.id &&
                <>
                    <Card.Content>
                        <Title>{filme.title}</Title>
                        <Paragraph>({filme.original_title})</Paragraph>
                    </Card.Content>

                    <ImagemCapa foto={filme.poster_path} tamanho={600}/>

                    <Text>{filme.overview}</Text>

                    <Button
                        margin={10}
                        icon="arrow-right-bold"
                        mode="contained"
                        onPress={() => navigation.push('filmes/imagens', {id: filme.id})}
                    >
                        Ver Imagens
                    </Button>


                    <Divider />
                    <Text style={{ fontSize: 30 }}>Atores</Text>
                    {atores.map(ator => (
                        <View key={ator.id} >
                            < List.Item onPress={() => navigation.push('atores/detalhes', { id: ator.id })}
                                title={ator.character}
                                description={ator.name}
                                left={() => imagemAtor(ator.profile_path)}
                            />
                            <Divider />
                        </View>
                    ))}
                </>
            }
        </ScrollView>
    )
}

export default FilmesDetalhes
