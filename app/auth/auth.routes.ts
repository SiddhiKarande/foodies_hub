// app/auth/auth.routes.ts
import { Router } from 'express';
import authServices from './auth.services';
import { ResponseHandler } from '../utils/response-handler'; // Custom response handler
import { Route } from '../routes/route.types';

const router = Router();

// Sign up route
router.post('/signup', async (req, res, next) => {
  try {
    const newUser = await authServices.signUp(req.body);
    res.send(new ResponseHandler(newUser));
  } catch (error) {
    next(error);
  }
});

// Login route
router.post('/login', async (req, res, next) => {
  try {
    const user = await authServices.login(req.body);
    res.send(new ResponseHandler(user));
  } catch (error) {
    next(error);
  }
});

  
export default new Route("/api/auth", router);

