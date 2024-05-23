import { AxiosError } from 'axios';

export type MyRejectValue = { message: string; status: number | undefined };

export const handleAxiosError = (
  error: unknown,
  thunkAPI: { rejectWithValue: (value: MyRejectValue) => void }
) => {
  const axiosError = error as AxiosError;
  return thunkAPI.rejectWithValue({
    message: axiosError.message,
    status: axiosError.response?.status,
  });
};
