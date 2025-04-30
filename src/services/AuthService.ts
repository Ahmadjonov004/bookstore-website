const AuthService = {
    verifyCode: async (phone: string, code: string) => {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code }),
      });
      if (!response.ok) throw new Error('Kod xato');
      return await response.json(); // { token: "..." }
    },
  };
  
  export default AuthService;
  