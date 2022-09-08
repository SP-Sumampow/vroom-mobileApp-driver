import {API_URL} from '../../Constant';

const signUp = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  phone: string,
): Promise<
  {success: any; error: undefined} | {success: undefined; error: string}
> => {
  try {
    const response = await fetch(`${API_URL}/customer/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        phone,
      }),
    });

    const status = response.status;
    const data = await response.json();

    switch (status) {
      case 200:
        return {success: data, error: undefined};
      default:
        return {success: undefined, error: data?.message ?? ''};
    }
  } catch (e: any) {
    console.error(e);
    return {success: undefined, error: e.message};
  }
};

const signIn = async (
  email: string,
  password: string,
): Promise<
  {success: any; error: undefined} | {success: undefined; error: string}
> => {
  try {
    const response = await fetch(`${API_URL}/customer/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const status = response.status;
    const data = await response.json();

    switch (status) {
      case 200:
        return {success: data, error: undefined};
      default:
        return {success: undefined, error: data?.message ?? ''};
    }
  } catch (e: any) {
    console.error(e);
    return {success: undefined, error: e.message};
  }
};
export default {
  signUp,
  signIn,
};
