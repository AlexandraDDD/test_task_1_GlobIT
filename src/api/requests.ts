import axios, { AxiosResponse } from 'axios';
import { UserType } from '../types/user';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getAllUsers = async (): Promise<AxiosResponse<UserType[]>> => {
  try {
    const response = await axios.get(`${SERVER_URL}/`);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const searchUsers = async (
  term: string
): Promise<AxiosResponse<UserType[]>> => {
  try {
    const response = await axios.get(`${SERVER_URL}/`, {
      params: { term },
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
