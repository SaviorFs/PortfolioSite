import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function Captcha({ onCaptchaSuccess }) {
  const recaptchaRef = useRef(null);

  const executeCaptcha = () => {
    recaptchaRef.current.execute();
  };

  const onChange = (token) => {
    console.log("Captcha token:", token);
    if (token) {
      onCaptchaSuccess(token);
    }
  };

  return (
    <div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LcUjYIpAAAAANFzW-51EvlI5TdN9ob-WnoCywkm"
        size="invisible"
        onChange={onChange}
      />
      <button onClick={executeCaptcha}>Submit Form</button>
    </div>
  );
}

export default Captcha;
