import { Photo } from "../types/Photo"
import { storage } from "../libs/firebase"
import {ref, listAll, getDownloadURL, uploadBytes, deleteObject} from 'firebase/storage'
import { v4 } from "uuid"

export const getAll = async () => {
    let list: Photo[] = []

    const imagesFolder = ref(storage, 'images')
    const photoList = await listAll(imagesFolder)

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i])

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }

    return list
}

export const sendPhoto = async (file: File) => {
    const imgTypes = ['image/jpeg','image/jpg','image/png','image/gif']

    if(!imgTypes.includes(file.type)){
        return new Error('Tipo do arquivo não permitido!')
    }
    
    let name = v4()
    let newFile = ref(storage, `/images/${name}`)
    let upload = await uploadBytes(newFile, file)
    let photoUrl = await getDownloadURL(upload.ref)
    
    return {
        name: upload.ref.name,
        url: photoUrl
    } as Photo
}

export const deletePhoto = async (item: Photo) => {
    let reference = ref(storage, `/images/${item.name}`)
    await deleteObject(reference)
}