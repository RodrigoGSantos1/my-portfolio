import * as S from "./styles";
import Photo from '../../images/photo.jpeg'
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

export default function Header() {

    const { data, getUser } = useUser()
    const { avatar_url } = data

    const pathName = window.location.pathname

    useEffect(() => {
        if (!avatar_url) {
            getUser()
        }
    }, [])


    return (
        <S.Container>
            <img src={avatar_url} alt="Profile Image" />
            <S.Button page={'/'} pathName={pathName}>
                <S.Links to={`/`}>Home</S.Links>
            </S.Button>
            <S.Button page={'/projetos'} pathName={pathName}>
                <S.Links to={`/projetos`}>Projetos</S.Links>
            </S.Button>
            <S.Button page={'/contato'} pathName={pathName}>
                <S.Links to={`/contato`}>Contato</S.Links>
            </S.Button>
        </S.Container>
    )
}