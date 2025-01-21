import axios, { AxiosResponse } from 'axios';
import { UserType } from '../types/user';

export const getAllUsers = async (): Promise<AxiosResponse<UserType[]>> => {
  try {
    const response = await axios.get('http://localhost:3000/');
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
    const response = await axios.get('http://localhost:3000/', {
      params: { term },
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
