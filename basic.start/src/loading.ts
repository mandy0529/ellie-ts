{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (state: ResourceLoadState) => {
    if (state.state === 'loading') {
      return ' 👀 loading...';
    } else if (state.state === 'success') {
      return {
        response: {
          body: '😃 loaded',
        },
      };
    } else {
      return {
        reason: '😱 no network',
      };
    }
  };

  const loading = printLoginState({state: 'loading'}); // 👀 loading...
  const success = printLoginState({
    state: 'success',
    response: {body: 'loaded'},
  }); // 😃 loaded
  const fail = printLoginState({state: 'fail', reason: 'no network'}); // 😱 no network
  console.log({loading, success, fail});
}
