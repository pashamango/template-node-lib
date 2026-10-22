/**
 * template-node-lib — replace with your library's entrypoint.
 */

/**
 * Greet a name.
 * @param {string} name
 * @returns {string}
 */
export function hello(name) {
  return `hello, ${name}`;
}

// Service entrypoint (used by `npm start`).
if (process.argv[1] === new URL(import.meta.url).pathname) {
  console.log(hello('fleet'));
}
