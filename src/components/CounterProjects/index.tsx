import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import * as S from "./styles";

export default function CounterProjects() {
    const { repos } = useUser()
    const [mobile, setMobile] = useState<number>(0)

    useEffect(() => {
        handleAccount()
    }, [repos])

    function handleAccount() {
        const mobile = repos.filter((obj) => obj.language === 'Dart' || obj.language === 'react-native');
        setMobile(mobile.length)
    }


    return (
        <S.Container>
            <S.Content>
                <div>
                    <S.Number>
                        +{mobile}
                    </S.Number>
                    <h1>Projetos Mobile</h1>
                </div>
                <div>
                    <S.Number>
                        +{repos.length - mobile}
                    </S.Number>
                    <h1>Projetos Web</h1>
                </div>
            </S.Content>
        </S.Container>
    )
}