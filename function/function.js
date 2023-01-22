const defResponse = (res, message) => {
    res.send({
      message: message,
      error: {},
      statusCode: 404,
    });
  };
  
  module.exports = {
    defResponse
  };
  