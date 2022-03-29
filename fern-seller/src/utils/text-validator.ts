export class TextValidator {
  validatorScopes: ValidatorScope[];
  private _emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private _phoneNumberRegex = /^(\+98|0)?9\d{9}$/;
  private _passwordRegex = /^.{1,}$/;

  constructor(...validatorScopes: ValidatorScope[]) {
    this.validatorScopes = validatorScopes;
  }

  public isValid(value: string): boolean {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let isValid: boolean = true;
    this.validatorScopes.forEach((validatorScope) => {
      const isValidScope = this._validateScope(validatorScope, value);
      isValid = isValid && isValidScope;
    });
    return isValid;
  }

  private _validateScope(validatorScope: ValidatorScope, value: string): boolean {
    switch (validatorScope) {
      case ValidatorScope.email:
        return this._validationEmail(value);
      case ValidatorScope.phoneNumber:
        return this._validationPhoneNumber(value);
      case ValidatorScope.password:
        return this._validationPassword(value);
      default:
        return false;
    }
  }

  private _validationEmail(value: string): boolean {
    return this._emailRegex.test(value);
  }

  private _validationPhoneNumber(value: string): boolean {
    return this._phoneNumberRegex.test(value);
  }

  private _validationPassword(value: string): boolean {
    return this._passwordRegex.test(value);
  }
}

export enum ValidatorScope {
  email,
  phoneNumber,
  password,
}
