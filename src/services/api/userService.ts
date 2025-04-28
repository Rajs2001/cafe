import { BaseService } from './baseService';

// Types
export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UserLoginRequest = {
  email: string;
  password: string;
};

export type UserLoginResponse = {
  user: User;
  token: string;
  refreshToken?: string;
};

export type UserRegisterRequest = {
  name: string;
  email: string;
  password: string;
};

/**
 * Service for user-related API operations
 */
export class UserService extends BaseService {
  protected endpoint = '/users';

  /**
   * Get the current user's profile
   */
  async getCurrentUser(): Promise<User> {
    return this.get<User>('me');
  }

  /**
   * Login a user
   */
  async login(credentials: UserLoginRequest): Promise<UserLoginResponse> {
    return this.post<UserLoginResponse>('login', credentials);
  }

  /**
   * Register a new user
   */
  async register(userData: UserRegisterRequest): Promise<User> {
    return this.post<User>('register', userData);
  }

  /**
   * Update the current user's profile
   */
  async updateProfile(userData: Partial<User>): Promise<User> {
    return this.put<User>('me', userData);
  }

  /**
   * Change the current user's password
   */
  async changePassword(data: { currentPassword: string; newPassword: string }): Promise<void> {
    return this.post<void>('me/change-password', data);
  }

  /**
   * Request a password reset
   */
  async requestPasswordReset(email: string): Promise<void> {
    return this.post<void>('forgot-password', { email });
  }

  /**
   * Reset password with token
   */
  async resetPassword(data: { token: string; password: string }): Promise<void> {
    return this.post<void>('reset-password', data);
  }

  /**
   * Logout the current user (invalidate token)
   */
  async logout(): Promise<void> {
    return this.post<void>('logout');
  }
}

// Create a singleton instance
export const userService = new UserService();
