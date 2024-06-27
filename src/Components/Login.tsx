import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from '@react-hook/media-query';

export default function Login() {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Request OTP');
  //phone number-->emailField
  const [emailField, setEmailField] = useState(true);
  const [otpField, setOtpField] = useState(false);
  const [passField, setPassField] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');

  const phoneNoInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const otpInputRef = useRef<HTMLInputElement>(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const generateRandomOTP = () => {
    // Generate a random 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOTP(otp.toString());
    return otp;
  };
//emailField replaced with phone Number but variable name not changed
const inputField = () => {
  if (emailField) {
    const userEmailValue = userEmail || (phoneNoInputRef.current && phoneNoInputRef.current.value);

    if ((userEmailValue?.length === 10)) {
      setEmailField(false);
      setOtpField(true);
      setButtonText('Validate OTP');
      generateRandomOTP();
    } else {
      toast.error('Please enter a valid phone number');
    }
  } else if (otpField) {
    const enteredOTP = otpInputRef.current?.value;

    if (!enteredOTP || enteredOTP !== generatedOTP) {
      toast.error('Please enter a valid OTP');
      return;
    }
    setOtpField(false);
    setPassField(true);
    setButtonText('Sign In');
  } else if (passField) {
    const userPassword = passwordInputRef.current?.value;
    if (!userPassword) {
      toast.error('Please set your password');
      return;
    }
    // Enhance password strength by requiring a mix of characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (!passwordRegex.test(userPassword)) {
      toast.error('Password: 8+ characters, with uppercase, lowercase, number, and special character.');
      return;
    }

    const userDetails = {
      phoneno: userEmail,
      password: userPassword,
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    navigate('/Home');
  }
};
  return (
    <>
      <ToastContainer />

      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F0E68C',
          paddingRight:'50px'
        }}
      >
        <span style={{ color: '#556B2F', fontWeight: 600, padding: '10px' }}>
          <i>
            <h2>Welcome to Chakra's Women's Shopping </h2>
              <h5>your one-stop shop for all your needs</h5>
            </i>
            </span>
        <div
          className='login-container'
          style={{
            display: 'flex',
            backgroundColor: '#fff',
            flexDirection: isSmallScreen ? 'column' : 'row',
          }}
        >
          {!isSmallScreen && (
            <div
              className='login-img'
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#5F9EA0',
                color: '#fff',
                padding: '30px',
              }}
            >
              <span
                style={{
                  marginBottom: '18px',
                  fontWeight: 'bold',
                  fontSize: '25px',
                }}
              >
                Sign up
              </span>
              <span>
               Discover your Orders, Wishlist, and Recommendations, all in one place.
              </span>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  src=
                  "https://e7.pngegg.com/pngimages/811/646/png-clipart-web-development-e-commerce-shopping-cart-software-online-shopping-business-web-design-retail.png"
                  alt='login-img'
                  style={{
                    width: '100%',
                    marginTop: '10px',
                  }}
                />
              </div>
            </div>)}
          {isSmallScreen && (
            <img src=" https://media.licdn.com/dms/image/D4D12AQFvqALoStLQaQ/article-cover_image-shrink_600_2000/0/1698387745891?e=2147483647&v=beta&t=tapWtPz-xt1XKfDtep0mksFHkqzz8E1tclvsnjGSWwU" alt="gif-login"
              style={{
                width: '380px'
              }}
            />
          )}
          <form action="get">
            <div
              className='login-form'
              style={{
                width: '380px',
                padding: '20px',
              }}
            >
              {emailField && (
                <div className='form-floating mb-3' style={{ marginTop: '20px' }}>
                  <input
                    type='number'
                    className='form-control'
                    id='floatingInput'
                    autoComplete='off'
                    
                    ref={phoneNoInputRef}
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <label htmlFor='floatingInput'>
                     Phone Number
                  </label>
                </div>
              )}

              {otpField && (
                <div className='form-floating mb-3' >
                  <input
                    type='number'
                    className='form-control'
                    id='floatingInput'
                    autoComplete='off'
                    ref={otpInputRef}
                  />
                  <label htmlFor='floatingInput'>Enter OTP</label>
                  <label>Enter OTP</label>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px'
                  }}

                  ><span style={{
                    fontWeight: 'bold',
                    fontSize: 'large',
                    letterSpacing: '10px'
                  }}>{generatedOTP}</span></div>
                </div>
              )}

              {passField && (
                <div className='form-floating mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='floatingPassword'
                    placeholder='Password'
                    ref={passwordInputRef}
                    autoComplete='on'
                  />
                  <label htmlFor='floatingPassword'>Set Password</label>
                </div>
              )}
              {emailField && (
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />

                  <span style={{
                    fontSize: '12px',
                  }}>
                    By continuing, you agree to Chakra's Terms of Use and Privacy
                    Policy.
                  </span>
                </div>

              )}
              <div
                className='d-grid gap-2 mb-3'
                style={{ marginTop: '10px' }}
              >
                <button
                  className='btn '
                  type='button'
                  style={{
                    backgroundColor: '#556B2F',
                    color: '#fff',
                    padding: '10px 30px',
                  }}
                  onClick={inputField}
                >
                  {buttonText}
                </button>

                

              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
