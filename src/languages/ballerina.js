/*
 Language: Ballerina
 Author: Erik Schierboom <erik_schierboom@gotmail.com>
 Description: Ballerina is an open-source programming language for the cloud that makes it easier to use, combine, and create network services.
 Website: https://ballerina.io/
*/

/**
 * @param { import("@types/highlightjs") } hljs
 */
module.exports = function (hljs) {
  const KEYWORD = [
    "import",
    "public",
    "private",
    "foreach",
    "function",
    "returns",
    "return",
    "start",
    "check",
    "readonly",
    "type",
    "let",
    "in",
    "from",
    "select",
    "trap",
    "typeof",
    "check",
    "checkpanic",
    "new",
    "record",
    "if",
    "else",
    "distinct",
    "panic",
    "class",
    "const",
    "final",
    "match",
    "base64",
    "break",
    "continue",
  ];

  const BUILT_IN = [
    "enum",
    "byte",
    "boolean",
    "string",
    "int",
    "float",
    "decimal",
    "any",
    "never",
  ];

  const LITERAL = ["null", "true", "false"];

  const KEYWORDS = {
    keyword: KEYWORD,
    built_in: BUILT_IN,
    literal: LITERAL,
  };

  return {
    name: "Ballerina",
    aliases: ["ballerina"],
    keywords: KEYWORDS,
    case_insensitive: false,
    disableAutodetect: false,
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
    ],
  };
};
