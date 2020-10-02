import React from 'react';

import Skeleton from '../../Skeleton';
import Panel from '../../Panel';
import { Container } from './styles';

const LoadingFeedShare: React.FC = () => {
    return (
        <Container>
            <Panel className="no-shadow">
                <Skeleton className="row-skeleton"/>
                <Skeleton className="row-skeleton"/>
            </Panel>
        </Container>
    );
};

export default LoadingFeedShare;