import { useState } from 'react';

export const LoginState = () => {
  const [open,setOpen]=useState(false)

  const handleChange = () => {
    setOpen((open)=> !open);
  };
 
  return {
    open,
    handleChange,
  };
};
