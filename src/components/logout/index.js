import React, { useEffect } from 'react'
import { useAuth } from '../../context/authContext';

export default function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  });

  return (
    <>
    </>
  )
}
