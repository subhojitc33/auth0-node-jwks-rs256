import dotenv from 'dotenv';

import expressJwt from './expressJwt';
import expressJwtSecret from '../lib/expressJwtSecret';

dotenv.load();

export const jwtCheck = expressJwt({
  secret: expressJwtSecret({
    jwksUri: `https://www.googleapis.com/oauth2/v3/certs`
  }),

  // Validate the audience and the issuer.
  audience: '636630247382-bv80b12tgd0nrsjkv2urljpauiq6thsi.apps.googleusercontent.com',
  issuer: `https://accounts.google.com`,
  algorithms: ['RS256']
});

