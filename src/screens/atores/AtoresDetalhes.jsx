import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Paragraph, Title } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
import ImagemCapa from '../../components/ImagemCapa'

const AtoresDetalhes = ({ navigation, route }) => {

    const [atores, setAtores] = useState({})
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const id = route.params.id

        apiFilmes.get(`/person/${id}?language=pt-BR`).then(resultado => {
            setAtores(resultado.data)

        })

        apiFilmes.get(`/person/${id}/movie_credits?language=pt-BR`).then(resultado => {
            setFilmes(resultado.data.cast)

        })


    }, [])

    const styles = StyleSheet.create({

        logo: {
            width: 220,
            height: 300,
        },
    });

    



    return (
        <ScrollView>
            {atores.id &&
                <>
                    <Title style={{ textAlign: "center" }}>{atores.name}</Title>
                    <Row>
                        <Col size={50}>
                            <Image
                                style={styles.logo}
                                source={{
                                    uri: 'https://image.tmdb.org/t/p/w500/' + atores.profile_path
                                }}
                            />
                        </Col>
                        <Col size={50}>
                            <Paragraph>Data de Nascimento: {atores.birthday}</Paragraph>
                            <Paragraph>Local de Nascimento: {atores.place_of_birth}</Paragraph>

                        </Col>
                    </Row>


                    <Text >{atores.biography}</Text>
                    <Title style={{ textAlign: "center" }}>FILMOGRAFIA</Title>
                    <Row >
                        {filmes.map(filme => (

                            <Col size={50} key={filme.id} >
                                <TouchableOpacity onPress={() => navigation.push('filmes/detalhes', { id: filme.id })}>

                                    <ImagemCapa foto={filme.poster_path} />

                                </TouchableOpacity>
                            </Col>

                        ))}
                    </Row>
                </>
            }
        </ScrollView>
    )
}

export default AtoresDetalhes
