import { User } from '../../models/user.interface';

export abstract class IAuthStorageService {
  public abstract getAccessToken(): string | null;
  public abstract getAuthenticatedUser(): User | null;
  public abstract isLoggedIn(): boolean;
  public abstract removeAccessToken(): void;
  public abstract removeAuthenticatedUser(): void;
  public abstract setAccessToken(accessToken: string): void;
  public abstract setAuthenticatedUser(user: User): void;
}
