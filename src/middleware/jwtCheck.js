import dotenv from 'dotenv';

import expressJwt from './expressJwt';
import expressJwtSecret from '../lib/expressJwtSecret';

dotenv.load();

export const jwtCheck = expressJwt({
  secret: expressJwtSecret({
    jwksUri: `https://demo.identityserver.io/.well-known/openid-configuration/jwks`
  }),

  // Validate the audience and the issuer.
  audience: 'https://demo.identityserver.io/resources',
  issuer: `https://demo.identityserver.io`,
  algorithms: ['RS256']
});

