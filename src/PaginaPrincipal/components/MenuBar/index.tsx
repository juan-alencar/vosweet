import React from 'react';
import Button from '../Button';

import { 
    Container, 
    TopSide, 
    Logo, 
    MenuButton, 
    HomeIcon,
    BellIcon, 
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
    return (
        <Container>
        <TopSide>
            <Logo />

            <MenuButton>
                <HomeIcon/>
                <span>Página Inicial</span>
            </MenuButton>

            <MenuButton>
                <BellIcon/>
                <span>Notificações</span>
            </MenuButton>
            
            <MenuButton>
                <ProfileIcon/>
                <span>Perfil</span>
            </MenuButton>

            <Button>
                <span>Postar</span>
            </Button>
        </TopSide>
        
        <Botside>
            <Avatar src="https://i.ibb.co/fSMPFvy/juan.png"/>

            <ProfileData>
                <strong>Juan Alencar</strong>
                <span>@juandmalencar</span>
            </ProfileData>

            <ExitIcon />
        </Botside>
    </Container>
);
}


export default MenuBar;