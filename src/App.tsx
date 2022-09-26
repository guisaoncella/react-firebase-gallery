import { useState, useEffect } from 'react'
import {Area, Container, Header, Loading, PhotoList} from './App.styles'
import { PhotoItem } from './components/PhotoItem'
import * as Photos from './services/photos'
import { Photo } from './types/Photo'

function App() {
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState<Photo[]>([])

    useEffect(() =>{
        const getPhotos = async () =>{
            setLoading(true)
            setPhotos(await Photos.getAll())
            setLoading(false)
        }
        getPhotos()
    },[])

    return (
        <Container>
            <Area>
                <Header>Galeria de Fotos</Header>
                {loading && 
                    <Loading>
                        <div className='emoji'>✋</div>
                        <div>Carregando...</div>
                    </Loading>
                }
                {!loading && photos.length > 0 &&
                    <PhotoList>
                        {photos.map((item, index)=>(
                            <PhotoItem key={index} url={item.url} name={item.name} />
                        ))}
                    </PhotoList>    
                }
                {!loading && photos.length === 0 &&
                    <Loading>
                        <div className='emoji'>💔</div>
                        <div>Não há fotos...</div>
                    </Loading>    
                }
            </Area>
        </Container>
    )
}

export default App
