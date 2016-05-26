/*
 * action types
 */

export const GET_NAV_LINKS = 'GET_NAV_LINKS';

/*
 * action creators
 */

export function getNavLinks(text) {
  return {
    type: GET_NAV_LINKS,
    text
  };
}
