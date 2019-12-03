import dotenv from 'dotenv';

dotenv.config();

export const env = () => (process.env.NODE_ENV || '').toLowerCase();

export const dev = () => env() === 'development';

export const port = () => Number(process.env.PORT) || 8080;

export const url = (port: number) => `http://localhost:${port}`;

export const directory = (url: string = '') => `${process.env.DIRECTORY || ''}${url}`;
