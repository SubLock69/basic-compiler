module.exports = function compiler(input) {
  const tokens = require('./lexer')(input); //Run Input Through Lexer
  const AST = require('./parser')(tokens);
  const tAST = require('./transformer')(AST);
  const jsCode = require('./generate')(tAST);

  return jsCode;
};