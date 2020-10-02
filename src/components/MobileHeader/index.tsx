import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
    return (
        <Container>
            <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C5603AQGHvg7G8czYjQ/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=340Z-_1CayZuyVLU6L4XeCdCgsl1smBu8EYq2KEipoY" />
            <SearchInput placeholder="Pesquisar"/>
            <MessageIcon />
        </Container>
    );
};

export default MobileHeader;