declare namespace API {
  declare namespace Auth {
    type SignInParams = {
      login: string;
      password: string;
    };

    type SignInErrorResponse = {
      type: string;
      message: string;
    };

    type SignInSuccessResponse = Module.User.Type
  }
}
