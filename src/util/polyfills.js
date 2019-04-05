/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
import includes from 'core-js/library/fn/string/includes';
import repeat from 'core-js/library/fn/string/repeat';
import arrayIncludes from 'core-js/library/fn/array/includes';
import assign from 'core-js/library/fn/object/assign';

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)

String.prototype.includes = includes;
String.prototype.repeat = repeat;
Array.prototype.includes = arrayIncludes;
Object.assign = assign;
