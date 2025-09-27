export interface VIPMemberShip {
  isActive: boolean;
  barcodeNumber: string;
  expiryDate: string;
}

export interface CustomerProfile {
  CustomerID: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  vipMembership: VIPMemberShip;
}

export interface ProfileState {
  profile: CustomerProfile | null;
  loading: boolean;
  error: string | null;
}