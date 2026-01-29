export type UserInfo = {
  id: string;
  primaryEmail?: string | null;
};

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
  user: UserInfo;
};