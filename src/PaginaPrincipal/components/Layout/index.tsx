import React, { useState } from 'react';

import Main from '../Main';
import MenuBar from '../MenuBar'
import Modal from '../../../Modal'
import { Container, Wrapper } from './styles';


const Layout: React.FC = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  return(
      <Container>
          <Wrapper>
                <MenuBar />
                <Main />
          </Wrapper>
      </Container>
  );
}

export default Layout;