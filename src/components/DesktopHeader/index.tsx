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
                            <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C5603AQGHvg7G8czYjQ/profile-displayphoto-shrink_400_400/0/1585654217796?e=1664409600&v=beta&t=B4vr53d5ZJZh4rb5oEYg8Ix9Me8uGbsp9o4JLWF-B30" />
                            <span>Eu <CaretDownIcon /></span>
                        </button>
                    </nav>
                </div>
            </Wrapper>
        </Container>
    )
}

export default DesktopHeader;
