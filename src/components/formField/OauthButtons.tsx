'use client';

import React from 'react';

const OauthButtons: React.FC = () => {
  const nonce =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const handleGoogleLogin = async () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri =
      window.location.hostname === 'codeit-epigram.netlify.app'
        ? process.env.NEXT_PUBLIC_NETLIFY_GOOGLE_URI
        : process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&nonce=${nonce}&response_type=code&scope=openid%20profile%20email&redirect_uri=${redirectUri}`;

    window.location.href = googleAuthUrl;
  };

  const handleKakaoLogin = async () => {
    const clientId = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
    const redirectUri =
      window.location.hostname === 'codeit-epigram.netlify.app'
        ? process.env.NEXT_PUBLIC_NETLIFY_KAKAO_URI
        : process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?grant_type=authorization_code&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&endpoint=kakao`;

    window.location.href = kakaoAuthUrl;
  };

  return (
    <div className="flex w-[96px] justify-between xl:w-[136px]">
      <button onClick={handleGoogleLogin}>
        <img
          alt="google"
          src="/assets/icons/logo_google.svg"
          className="h-[40px] w-[40px] cursor-pointer xl:h-[60px] xl:w-[60px]"
        />
      </button>

      <button onClick={handleKakaoLogin}>
        <img
          alt="kakao"
          src="/assets/icons/logo_kakao.svg"
          className="h-[40px] w-[40px] cursor-pointer xl:h-[60px] xl:w-[60px]"
        />
      </button>
    </div>
  );
};

export default OauthButtons;
