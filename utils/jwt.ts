import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IJwt } from '../src/interfaces/user.interface';

dotenv.config();

const secret = 'secret';

const generateToken = (user: IJwt): string => {
  const jwtConfig = {
    expiresIn: '1d',
  };

  const token = jwt.sign(user, secret, jwtConfig);
  return token;
};

export default generateToken;