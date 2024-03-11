import React from "react";
import Logo from "./imaguemHeader/logo.png"
import Jogos from "./imaguemHeader/jogos.png"
import Programacao from "./imaguemHeader/programação.png"

import * as S from "./StyledHeader"


function Header() {
    return(

        <S.HeaderStyle>
 <img src={Logo} alt="" />

<S.Section>
    <S.Div>
        <img src={Jogos} alt="" />
        <h2>JOGOS</h2>
    </S.Div>

    <S.Div>
        <img src={Programacao} alt="" />
        <h2>PROGRAMAÇÃO</h2>
    </S.Div>

</S.Section>


        </S.HeaderStyle>
    )
}

export default Header