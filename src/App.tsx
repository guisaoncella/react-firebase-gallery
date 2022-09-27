import { useState, useEffect, FormEvent } from 'react'
import {Area, Container, Header, Loading, PhotoList, UploadForm} from './App.styles'
import { PhotoItem } from './components/PhotoItem'
import * as Photos from './services/photos'
import { Photo } from './types/Photo'

function App() {
    const [loading, setLoading] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [photos, setPhotos] = useState<Photo[]>([])

    useEffect(() =>{
        const getPhotos = async () =>{
            setLoading(true)
            setPhotos(await Photos.getAll())
            setLoading(false)
        }
        getPhotos()
    },[])

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const file = formData.get('image') as File

        if(!file || file.size <= 0 ){
            alert('Selecione um arquivo!')
            return
        }
        if(file.size > 12000000){
            alert('Arquivo muito grande!')
            return
        }
        setUploading(true)
        let result = await Photos.sendPhoto(file)
        setUploading(false)

        if(result instanceof Error){
            alert(`${result.name}: ${result.message}`)
        }else{
            alert('Upload feito com sucesso!')
            let newPhotoList = [...photos]
            newPhotoList.push(result)
            setPhotos(newPhotoList)
        }
    }

    return (
        <Container>
            <Area>
                <Header>Galeria de Fotos</Header>

                <UploadForm method='POST' onSubmit={handleFormSubmit}>
                    <input type='file' name='image' />
                    <input type='submit' value='Enviar' />
                    {uploading && 'Enviando...'}
                </UploadForm>

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
