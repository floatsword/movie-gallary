import { fetch } from './utils';
import get from './temp';

// export default {
//   comingSoon: fetch("https://api.douban.com/v2/movie/coming_soon"),
//   inTheaters: fetch("https://api.douban.com/v2/movie/in_theaters"),
//   top250: fetch("https://api.douban.com/v2/movie/top250")
// }

export default {
  comingSoon: get('coming_soon', {cache: sessionStorage}, ),
  inTheaters: get('in_theaters', {cache: sessionStorage}),
  top250: get('top250', {cache: sessionStorage}),
  subject: get(subjectId => `subject/${subjectId}`, {cache: sessionStorage, requiresAPIKey: true}, payload => null )
}
