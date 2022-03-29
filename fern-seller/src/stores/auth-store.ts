import { action, observable } from 'mobx';
import { LoginFormTargets, LoginFormValues } from '../components/screens/login';
import AuthService from '../services/auth.service';
import { isTokenExistAndValid } from '../utils/auth-util';

type Targets = LoginFormTargets;

class AuthStore {
  private _authService = new AuthService();
  @observable public isLoggedIn = false;

  @action login = async (loginFormValues: LoginFormValues): Promise<void> => {
    try {
      await this._authService.loginAndSavePassword(loginFormValues.email, loginFormValues.password);
      this.isLoggedIn = true;
    } catch (error) {
      alert('login filed');
    }
  };

  @action checkUserLoginState(): void {
    this.isLoggedIn = isTokenExistAndValid();
  }

  @action logout(): void {
    this._authService.logout();
    this.isLoggedIn = false;
  }

  @action handleActions = (target: Targets, value: any) => {
    switch (target) {
      case LoginFormTargets.SUBMIT:
        this.login(value as LoginFormValues);
        break;
      default:
        break;
    }
  };
}

export interface InjectedAuthStore {
  authStore: AuthStore;
}

export { AuthStore };
