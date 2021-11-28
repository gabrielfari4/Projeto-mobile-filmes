import React, { useEffect, useState } from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import { Column as Col, Row } from 'react-native-responsive-grid'
import apiFilmes from '../../services/apiFilmes'

const FilmesImagens = ({ navigation, route }) => {

    const [imagens, setImagens] = useState({})

    useEffect(() => {

        const id = route.params.id

        apiFilmes.get(`/movie/${id}/images?language=en`).then(resultado => {
            // console.log(resultado.data.results)
            setImagens(resultado.data)
        })
    }, [])

    return (
        <ScrollView margin={10}>
            {imagens.id &&
                <>
                    <Row >
                        {imagens.posters.map(imagem => (

                            <Col size={50} >

                                <Image
                                    style={{ height: 280, margin: 5 }}
                                    source={{ uri: 'https://image.tmdb.org/t/p/w500/' + imagem.file_path }}
                                />

                            </Col>

                        ))}
                    </Row>
                    <Row >
                        {imagens.backdrops.map(imagem => (

                            <Col size={100} >

                                <Image
                                    style={{ height: 200, width: '100%', margin: 5 }}
                                    source={{ uri: 'https://image.tmdb.org/t/p/w500/' + imagem.file_path }}
                                />

                            </Col>

                        ))}
                    </Row>
                </>
            }
        </ScrollView>
    )
}

export default FilmesImagens
