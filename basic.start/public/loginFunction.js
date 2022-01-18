"use strict";
{
    function loginProgress(state) {
        if (state.result === 'success') {
            return {
                response: {
                    body: '성공',
                },
            };
        }
        else {
            return {
                body: '실패',
            };
        }
    }
    loginProgress({ result: 'success', response: { body: '성공' } });
    loginProgress({ result: 'fail', body: '실패' });
}
