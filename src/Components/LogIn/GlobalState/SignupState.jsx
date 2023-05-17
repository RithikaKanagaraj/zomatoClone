import { useState } from 'react';

export const SignupState = () => {
  const [available,setAvailable]=useState(false)

  const handleChanges = () => {
    setAvailable((available)=> !available);
  };
 
  return {
    available,
    handleChanges,
  };
};
