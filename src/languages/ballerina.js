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
  var KEYWORDS = {
    keyword: "assign if for while function do return else break",
    literal: "true false null void",
    built_in: "builtin otherbuiltin",
  };
  var NUMBER = {
    className: "number",
    variants: [
      { begin: "\\b(0[bB][01]+)" },
      { begin: "\\b(0[oO][0-7]+)" },
      { begin: hljs.C_NUMBER_RE },
    ],
    relevance: 0,
  };

  return {
    name: "Ballerina",
    aliases: ["ballerina"],
    keywords: KEYWORDS,
    case_insensitive: true,
    disableAutodetect: false,
    contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, NUMBER],
  };
};
