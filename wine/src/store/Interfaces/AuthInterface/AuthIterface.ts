export interface AuthState {
  token: string | null;
  customer: any | null;
  isSignedIn:string;
  isLoggedIn: boolean;
}

export interface SignUpForm {
  userName: string;
  firstName?: string;
  lastName?: string;
  Email: string;
  contactNumber: string;
  createPwd: string;
  confirmPwd: string;
  vipCustomerId: string;
}

export interface SignUpResponse {
  userId: string;
  token: string;
  firstName?: string;
  lastName?: string;
  userType: string;
  expiryDate: string;
  message: string;
}
