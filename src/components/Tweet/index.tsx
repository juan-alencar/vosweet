import React from 'react';

import { 
    Container, 
    Body, 
    Content, 
    Avatar, 
    Header, 
    Description,
    Icons,
    Status,
    CommentIcon,
    } 
    from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Body>
            <Avatar src="https://i.ibb.co/fSMPFvy/juan.png"/>

            <Content>
                <Header>
                    <strong>Juan Alencar</strong>
                    <span>@juandmalencar</span>
                </Header>

                <Description>Isso ficou muito lindo</Description>

                <Icons>
                    <Status>
                        <CommentIcon/>
                        18
                    </Status>
                </Icons>
                
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;