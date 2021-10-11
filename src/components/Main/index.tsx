import React from 'react';
import Feed from '../Feed';
import NewTweet from '../NewTweet'

import { 
  Container, 
  Header, 
  ProfileInfo, 
  BottomMenu,
  BottomDiv, 
  HomeIcon, 
  BellIcon,
  ProfileIcon 
}
  from './styles'

const Main: React.FC = () => {
return (
  <Container>
    <Header>
      <ProfileInfo>
          <strong>Hello World!</strong>
      </ProfileInfo>
    </Header>

    <NewTweet/>

    <Feed />

    <BottomMenu>
      <HomeIcon className="active"/>
      <BellIcon />
      <ProfileIcon />
    </BottomMenu>
    
    <BottomDiv />
  </Container>
);
}

export default Main;