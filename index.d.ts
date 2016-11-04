// Type definitions for node-scanf
// Project: https://github.com/chalk/strip-ansi
// Definitions by: Carlos Garía Álvarez <http://carlosgarcia.engineer>
// Definitions: https://github.com/cgalvarez/types-strip-ansi

declare namespace StripAnsi {
  /**
   * Strips ANSI escape codes.
   * @param {string} text The text to escape.
   * @returns {string} The escaped text.
   */
  function stripAnsi(text: string): string;
}

declare module 'strip-ansi' {
  export = StripAnsi;
}
