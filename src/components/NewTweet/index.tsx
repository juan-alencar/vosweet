import React from 'react';
import Button from '../Button'
import { Container, TweetArea } from './styles';

const NewTweet: React.FC = () => {
    return (
        <Container>
            <TweetArea placeholder="o que está acontecendo?"/>
            <Button>Postar</Button>
        </Container>
    );
}

export default NewTweet;