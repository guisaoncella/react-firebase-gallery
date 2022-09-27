import { Container } from "./styles";

type Props = {
    url: string;
    name: string;
}

export const PhotoItem = ({url, name}: Props) => {
    return(
        <Container className="image">
            <img src={url} alt={name}/>
        </Container>
    )
}