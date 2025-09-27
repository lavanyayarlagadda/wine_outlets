import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useGetProfileMutation } from "../../store/apis/MyProfile/MyProfileAPI";
import { setProfile, setLoading, setError } from "../../store/slices/MyProfile/MyProfileSlice";
import type { CustomerProfile } from "../../store/Interfaces/MyProfile/MyProfileInterface";
import { toast } from "react-toastify";

interface UseProfileReturn {
  profile: CustomerProfile | null;
  loading: boolean;
  error: string | null;
  refreshProfile: (customerId: string) => Promise<void>;
}

const UseProfile = (customerId: string): UseProfileReturn => {
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state: RootState) => state.profileSlice);
  const [getProfile] = useGetProfileMutation();
  const [localLoading, setLocalLoading] = useState(false);

  const fetchProfile = async (id: string) => {
    try {
      dispatch(setLoading(true));
      setLocalLoading(true);

      const response = await getProfile({ CustomerID: id }).unwrap();
      dispatch(setProfile(response));
    } catch (err) {
      dispatch(setError("Failed to fetch profile"));
      toast.error("Failed to fetch profile");
    } finally {
      setLocalLoading(false);
    }
  };

  useEffect(() => {
    if (customerId) {
      fetchProfile(customerId);
    }
  }, [customerId]);
  return {
    profile,
    loading: loading || localLoading,
    error,
    refreshProfile: fetchProfile,
  };
};

export default UseProfile;
