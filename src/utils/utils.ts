import { formatDistanceToNow } from "date-fns";
import jwt_decode, { JwtPayload } from "jwt-decode";

export const decodeToken = (token: string) => {
  const decodedToken = jwt_decode<JwtPayload>(token);
  const exp = decodedToken.exp;
  const expirationTime = Number(exp) * 1000;
  const currentTime = Date.now();
  const relativeTime = formatDistanceToNow(expirationTime, { addSuffix: true });
  return { expirationTime, currentTime, relativeTime, decodedToken };
};
