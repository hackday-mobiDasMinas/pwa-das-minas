import React from 'react';
import grafico from './graficoMock.png';
import Typography from '@material-ui/core/Typography';

export const Dashboard = () => (
    <div className="dashboard">
        <Typography>Acidentes por Região</Typography>
        <img src={grafico} />
        <Typography>Acidentes por Horário</Typography>
        <img src={grafico} />
    </div>
);

