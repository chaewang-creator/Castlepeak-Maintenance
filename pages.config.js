/**
 * @typedef {Object} PageUnderTest
 * @property {string} name - Used to name screenshot baselines and test titles.
 * @property {string} path - Path relative to baseURL.
 * @property {boolean} hasLeadspaceVideo - Whether this page has the autoplaying
 *   Vimeo background video in the leadspace. Only the homepage has it today,
 *   but new pages copying that section should just flip this to true.
 */

/** @type {PageUnderTest[]} */
export const pagesUnderTest = [
  { name: 'home', path: '/', hasLeadspaceVideo: true },
  { name: 'team', path: '/team/', hasLeadspaceVideo: false },
  { name: 'portfolio', path: '/portfolio/', hasLeadspaceVideo: false },
  { name: 'contact', path: '/contact/', hasLeadspaceVideo: false },
  { name: 'careers', path: '/careers/', hasLeadspaceVideo: false },
  { name: 'platforms', path: '/platforms/', hasLeadspaceVideo: false },
  { name: 'insights', path: '/insights/', hasLeadspaceVideo: false },
  { name: 'investor-portal', path: '/investor-portal/', hasLeadspaceVideo: false },
  { name: 'careers-2', path: '/careers-2/', hasLeadspaceVideo: false },
  { name: 'contact-2', path: '/contact-2/', hasLeadspaceVideo: false },
  { name: 'one-more', path: '/one-more/', hasLeadspaceVideo: false },
  { name: 'design-guidelines', path: '/design-guidelines/', hasLeadspaceVideo: false },
  { name: 'california-privacy-policy', path: '/california-privacy-policy/', hasLeadspaceVideo: false },
  { name: 'website-terms-of-use', path: '/website-terms-of-use/', hasLeadspaceVideo: false },
  { name: 'privacy-policy', path: '/privacy-policy/', hasLeadspaceVideo: false },

];