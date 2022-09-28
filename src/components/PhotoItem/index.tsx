import { Photo } from "../../types/Photo";
import { Container } from "./styles";

type Props = {
    item: Photo
    handleDelete: (item: Photo) => void
}

export const PhotoItem = ({item, handleDelete}: Props) => {
    return(
        <Container className="image">
            <img src={item.url} alt={item.name}/>
            <span className="emoji" onClick={() => handleDelete(item)}>🗑</span>
        </Container>
    )
}