import React, { useState } from 'react';
import Button from '../Button';
import Modal from '../../../Modal';

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
    const [isModalVisible, setIsModalVisible] = useState(false);
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
            
            <MenuButton onClick={() => setIsModalVisible(true)}>
                <ProfileIcon/>
                <span>Perfil</span>
                    {isModalVisible ? <Modal /> : null}
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