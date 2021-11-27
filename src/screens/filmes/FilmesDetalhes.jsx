import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, Card, Divider, List, Paragraph, Title } from 'react-native-paper'
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
        container: {
            paddingTop: 50,
        },
        tinyLogo: {
            width: 80,
            height: 80,
        },
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
        <Avatar.Image size={50} source={{uri: 'https://image.tmdb.org/t/p/w500/' + foto}} /> :
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

                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://image.tmdb.org/t/p/w500/' + filme.poster_path,
                        }}
                    />

                    <Text>{filme.overview}</Text>
                    <Divider />
                        <Text style={{fontSize: 30}}>Atores</Text>
             {atores.map(ator=> (
                <View key={ator.id}>
                        < List.Item
                        title={ator.name}
                        description={ator.character}
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
