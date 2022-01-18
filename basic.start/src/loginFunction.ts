{
  type LoginSucess = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type LoginFail = {
    result: 'fail';
    body: string;
  };

  type LoginState = LoginSucess | LoginFail;

  function loginProgress(state: LoginState) {
    if (state.result === 'success') {
      return {
        response: {
          body: '성공',
        },
      };
    } else {
      return {
        body: '실패',
      };
    }
  }
  loginProgress({result: 'success', response: {body: '성공'}});
  loginProgress({result: 'fail', body: '실패'});
}
