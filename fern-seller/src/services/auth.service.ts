import api from '../api';
import { removeToken, setToken } from '../utils/auth-util';

export default class AuthService {
  public async loginAndSavePassword(email: string, password: string): Promise<void> {
    const loginResponse = await api.v1.auth.login({
      email: email,
      password: password,
    });
    setToken(loginResponse.data.token);
  }

  public logout(): void {
    removeToken();
  }
}
