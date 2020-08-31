/* eslint-disable import/prefer-default-export */

// This dictionary is to allow manual override for
// certain breadrumbs only when they are generated
// from a page's URL. It won't effect custom breadcrumbs.
const dictionary = {
  'a and e': 'A&E',
  'terms conditions': 'Terms & Conditions',
  e: 'E!',
}

export const checkDictionary = (word) =>
  dictionary[word.toLowerCase()] ? dictionary[word.toLowerCase()] : word
