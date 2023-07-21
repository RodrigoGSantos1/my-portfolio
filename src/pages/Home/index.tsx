import React, { useEffect } from "react";
import * as S from "./styles";
import withLayout from "../../hooks/header";
import { useUser } from "../../hooks/useUser";
import Button from "../../components/Button";
import CounterProjects from "../../components/CounterProjects";
import About from "./About";

function Home() {
    const { data } = useUser()
    const { avatar_url } = data

    return (
        <S.Container id="home">
            <S.Home>
                <S.Line1 />
                <S.Line2 />
                <S.Content>
                    <div>
                        <div className="text">
                            <h1>Rodrigo Guedes</h1>
                            <p>Desenvolvendo aplicações mobile e web responsivas</p>
                            <span>incríveis.</span>
                        </div>
                        <Button />
                    </div>
                </S.Content>
                <S.Content>
                    <S.Image src={avatar_url} alt="Profile Image" />
                </S.Content>
            </S.Home>
            <CounterProjects />
            <About/>
        </S.Container>
    )
}

export default withLayout(Home)