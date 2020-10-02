import React from 'react'

import { Container, Wrapper, LinkedInIcon, SearchInput, HomeIcon, NotificationIcon, ProfileCircle, CaretDownIcon } from './styles';

const DesktopHeader: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <div className="left">
                    <LinkedInIcon />
                    <SearchInput placeholder="Pesquisar"/>
                </div>

                <div className="right">
                    <nav>
                        <button className="active">
                            <HomeIcon />
                            <span>Inicio</span>
                        </button>
                        <button>
                            <NotificationIcon />
                            <span>Notificações</span>
                        </button>
                        <button>
                            <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C5603AQGHvg7G8czYjQ/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=340Z-_1CayZuyVLU6L4XeCdCgsl1smBu8EYq2KEipoY" />
                            <span>Eu <CaretDownIcon /></span>
                        </button>
                    </nav>
                </div>
            </Wrapper>
        </Container>
    )
}

export default DesktopHeader;
