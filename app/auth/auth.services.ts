// app/auth/auth.services.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userServices from '../users/user.services';
import { ZUser, ZLogin, IUser } from '../users/user.types';
import { authResponses } from './auth.responses'; // Assuming you have predefined responses

// Sign up service function
export const signUp = async (userData: Record<string, any>) => {
  // Validate incoming data using Zod schema
  const parsed = ZUser.safeParse(userData);
  if (!parsed.success) {
    throw authResponses.UNAUTHORIZED;
  }

  const { userName, email, avatar, password } = parsed.data;

  // Check if the user already exists
  const existingUser = await userServices.getUserByEmail(email);
  if (existingUser) {
    throw authResponses.USER_EXIST;
  }

  // Hash the password using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    userName,
    email,
    avatar,
    password: hashedPassword,
    salt,
    sessionToken: '',
  };

  // Insert the user into the database
  const createdUser = await userServices.createUser(newUser);
  return createdUser;
};

// Login service function
export const login = async (loginData: Partial<IUser>) => {
  const parsed = ZLogin.safeParse(loginData);
  if (!parsed.success) {
    throw authResponses.UNAUTHORIZED;
  }

  const { email, password } = parsed.data;

  
  const existingUser = await userServices.getUserByEmail(email);
  if (!existingUser || !existingUser.password) {
    throw authResponses.UNAUTHORIZED;
  }

  // Compare provided password with stored hashed password
  const passwordMatch = await bcrypt.compare(password, existingUser.password);
  if (!passwordMatch) {
    throw authResponses.INVALID_CREDENTIALS;
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: existingUser._id, email: existingUser.email, userName:existingUser.userName },
    process.env.JWT_SECRET, // Ensure JWT_SECRET is set in environment variables
    { expiresIn: '1h' }
  );

  // Return token and user details
  return {
    token,
    user: {
      userName: existingUser.userName,
      email: existingUser.email,
      avatar: existingUser.avatar,
    },
  };
};

export default {
  signUp,
  login,
};
