import { useState } from "react";
import * as S from "./styles";
import { BiCodeAlt } from "react-icons/bi"
import { LiaHandPointer } from "react-icons/lia"
import { useNavigate } from "react-router-dom";


export default function Button() {
    const navigate = useNavigate();
    const [opem, setOpem] = useState<boolean>(false)
    return (
        <S.Container
            onMouseEnter={() => setOpem(true)}
            onMouseLeave={() => setOpem(false)}
            onClick={() => navigate('/projetos')}
        >
            {opem ? (
                <>
                    <p>MEUS PROJETOS</p>
                    <LiaHandPointer size={40} color="white" />
                </>
            ) : (
                <BiCodeAlt size={40} color="white" />
            )}
        </S.Container>
    )
}