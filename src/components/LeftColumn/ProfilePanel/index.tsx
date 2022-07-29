import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGHvg7G8czYjQ/profile-displayphoto-shrink_400_400/0/1585654217796?e=1664409600&v=beta&t=B4vr53d5ZJZh4rb5oEYg8Ix9Me8uGbsp9o4JLWF-B30"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>David Rocha</h1>
        <h2>Software Engineer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
