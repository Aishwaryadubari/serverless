'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello command function!',
        input: event,
      },
      null,
      2
    ),
  };
};
