import dotenv from 'dotenv';

export const prefixed = (url: string = '') => `${process.env.DIRECTORY || ''}${url}`;
