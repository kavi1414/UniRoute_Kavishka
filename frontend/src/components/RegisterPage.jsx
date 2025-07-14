import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowLeft, User, Phone } from 'lucide-react';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    receiveUpdates: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #E7F3FB 0%, #C1DBF4 25%, #9ABDE6 50%, #739ED1 75%, #4C7FB1 100%)'
    }}>
      {/* Clean Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-16 right-20 w-40 h-40 rounded-full opacity-15 animate-pulse" style={{
          background: 'radial-gradient(circle, #75C2F6 0%, transparent 70%)',
          animationDelay: '0.5s',
          animationDuration: '4s'
        }}></div>
        <div className="absolute top-1/3 left-10 w-56 h-56 rounded-full opacity-10 animate-pulse" style={{
          background: 'radial-gradient(circle, #1D5D9B 0%, transparent 70%)',
          animationDuration: '5s'
        }}></div>
        <div className="absolute bottom-32 right-1/4 w-32 h-32 rounded-full opacity-20 animate-pulse" style={{
          background: 'radial-gradient(circle, #C1DBF4 0%, transparent 70%)',
          animationDelay: '1.5s',
          animationDuration: '3.5s'
        }}></div>
        <div className="absolute bottom-1/4 left-16 w-20 h-20 rounded-full opacity-25 animate-pulse" style={{
          background: 'radial-gradient(circle, #9ABDE6 0%, transparent 70%)',
          animationDuration: '3.5s',
          animationDelay: '1s'
        }}></div>
        <div className="absolute top-10 left-1/2 w-28 h-28 rounded-full opacity-18 animate-pulse" style={{
          background: 'radial-gradient(circle, #75C2F6 0%, transparent 70%)',
          animationDuration: '2.8s',
          animationDelay: '2.5s'
        }}></div>
        <div className="absolute top-2/3 right-1/3 w-44 h-44 rounded-full opacity-12 animate-pulse" style={{
          background: 'radial-gradient(circle, #E7F3FB 0%, transparent 70%)',
          animationDuration: '6s',
          animationDelay: '3s'
        }}></div>

        {/* Gradient Waves */}
        <div className="absolute top-0 left-0 w-full h-full opacity-25">
          <div className="absolute top-1/4 left-0 w-full h-64 transform -rotate-12 animate-pulse" style={{
            background: 'linear-gradient(90deg, transparent 0%, #E7F3FB 50%, transparent 100%)',
            animationDuration: '8s'
          }}></div>
          <div className="absolute top-2/3 right-0 w-full h-48 transform rotate-12 animate-pulse" style={{
            background: 'linear-gradient(90deg, transparent 0%, #C1DBF4 50%, transparent 100%)',
            animationDuration: '10s',
            animationDelay: '2s'
          }}></div>
          <div className="absolute bottom-1/4 left-0 w-full h-32 transform -rotate-6 animate-pulse" style={{
            background: 'linear-gradient(90deg, transparent 0%, #9ABDE6 50%, transparent 100%)',
            animationDuration: '12s',
            animationDelay: '4s'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-1/5 left-1/2 w-2 h-2 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/2 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '5s'}}></div>

        {/* Subtle Background Glow */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at top, rgba(231, 243, 251, 0.3) 0%, transparent 50%)'
        }}></div>
      </div>

      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b relative z-10" style={{borderColor: '#F5F7FA'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 transition-colors" style={{color: '#1D5D9B'}} onMouseEnter={(e) => e.target.style.color = '#174A7C'} onMouseLeave={(e) => e.target.style.color = '#1D5D9B'}>
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" style={{color: '#1D5D9B'}} />
              <span className="font-display font-bold text-2xl" style={{color: '#1D5D9B'}}>UniRoute</span>
            </div>
            
            <div className="text-sm" style={{color: '#717171'}}>
              <span>Already have an account? </span>
              <Link to="/login" className="font-medium transition-colors" style={{color: '#1D5D9B'}} onMouseEnter={(e) => e.target.style.color = '#174A7C'} onMouseLeave={(e) => e.target.style.color = '#1D5D9B'}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-md w-full">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 border relative" style={{
            borderColor: '#F5F7FA',
            boxShadow: '0 25px 50px -12px rgba(29, 93, 155, 0.25)',
            animation: 'float 6s ease-in-out infinite'
          }}>
            {/* Form Inner Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-50" style={{
              background: 'radial-gradient(circle at top, #E7F3FB 0%, transparent 70%)'
            }}></div>
            
            {/* Header */}
            <div className="text-center mb-8 relative z-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative" style={{
                backgroundColor: '#E7F3FB',
                boxShadow: '0 8px 25px rgba(29, 93, 155, 0.15)',
                animation: 'pulse 2s infinite'
              }}>
                <GraduationCap className="h-8 w-8" style={{color: '#1D5D9B'}} />
                <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{backgroundColor: '#1D5D9B'}}></div>
              </div>
              <h1 className="font-display font-bold text-3xl mb-2" style={{color: '#1D5D9B'}}>
                Create Account
              </h1>
              <p style={{color: '#717171'}}>
                Start your journey to higher education
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{color: '#1D5D9B'}}>
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{color: '#717171'}} />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl transition-all bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2"
                      style={{
                        borderColor: '#F5F7FA',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#4C7FB1';
                        e.target.style.boxShadow = '0 0 0 3px #C1DBF4, 0 4px 6px rgba(0, 0, 0, 0.1)';
                        e.target.style.transform = 'translateY(-1px)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#F5F7FA';
                        e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                      placeholder="First name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{color: '#1D5D9B'}}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-xl transition-all bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#F5F7FA',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4C7FB1';
                      e.target.style.boxShadow = '0 0 0 3px #C1DBF4, 0 4px 6px rgba(0, 0, 0, 0.1)';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#F5F7FA';
                      e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: '#1D5D9B'}}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{color: '#717171'}} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl transition-all bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#F5F7FA',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4C7FB1';
                      e.target.style.boxShadow = '0 0 0 3px #C1DBF4, 0 4px 6px rgba(0, 0, 0, 0.1)';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#F5F7FA';
                      e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{color: '#1D5D9B'}}>
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{color: '#717171'}} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl transition-all bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#F5F7FA',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4C7FB1';
                      e.target.style.boxShadow = '0 0 0 3px #C1DBF4, 0 4px 6px rgba(0, 0, 0, 0.1)';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#F5F7FA';
                      e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    placeholder="+94 70 xxx xxxx"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2" style={{color: '#1D5D9B'}}>
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{color: '#717171'}} />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border rounded-xl transition-all bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#F5F7FA',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4C7FB1';
                      e.target.style.boxShadow = '0 0 0 3px #C1DBF4, 0 4px 6px rgba(0, 0, 0, 0.1)';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#F5F7FA';
                      e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    placeholder="Create a password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-200"
                    style={{color: '#717171'}}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#1D5D9B';
                      e.target.style.transform = 'translateY(-2px) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#717171';
                      e.target.style.transform = 'translateY(-2px) scale(1)';
                    }}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2" style={{color: '#1D5D9B'}}>
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{color: '#717171'}} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border rounded-xl transition-all bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#F5F7FA',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4C7FB1';
                      e.target.style.boxShadow = '0 0 0 3px #C1DBF4, 0 4px 6px rgba(0, 0, 0, 0.1)';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#F5F7FA';
                      e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-200"
                    style={{color: '#717171'}}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#1D5D9B';
                      e.target.style.transform = 'translateY(-2px) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#717171';
                      e.target.style.transform = 'translateY(-2px) scale(1)';
                    }}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded focus:outline-none mt-0.5 transition-transform hover:scale-110"
                    style={{
                      accentColor: '#1D5D9B',
                      borderColor: '#F5F7FA'
                    }}
                    required
                  />
                  <label htmlFor="agreeToTerms" className="text-sm" style={{color: '#717171'}}>
                    I agree to the{' '}
                    <a href="#" className="underline transition-colors" style={{color: '#1D5D9B'}} onMouseEnter={(e) => e.target.style.color = '#174A7C'} onMouseLeave={(e) => e.target.style.color = '#1D5D9B'}>
                      Terms of Service
                    </a>
                    {' '}and{' '}
                    <a href="#" className="underline transition-colors" style={{color: '#1D5D9B'}} onMouseEnter={(e) => e.target.style.color = '#174A7C'} onMouseLeave={(e) => e.target.style.color = '#1D5D9B'}>
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="receiveUpdates"
                    name="receiveUpdates"
                    checked={formData.receiveUpdates}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded focus:outline-none mt-0.5 transition-transform hover:scale-110"
                    style={{
                      accentColor: '#1D5D9B',
                      borderColor: '#F5F7FA'
                    }}
                  />
                  <label htmlFor="receiveUpdates" className="text-sm" style={{color: '#717171'}}>
                    I want to receive updates about new features and university programs
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white py-3 px-4 rounded-xl font-semibold focus:outline-none transition-all transform relative overflow-hidden group"
                style={{
                  backgroundColor: '#1D5D9B',
                  boxShadow: '0 10px 25px rgba(29, 93, 155, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#174A7C';
                  e.target.style.boxShadow = '0 15px 35px rgba(29, 93, 155, 0.4)';
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#1D5D9B';
                  e.target.style.boxShadow = '0 10px 25px rgba(29, 93, 155, 0.3)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px #C1DBF4, 0 15px 35px rgba(29, 93, 155, 0.4)'}
                onBlur={(e) => e.target.style.boxShadow = '0 10px 25px rgba(29, 93, 155, 0.3)'}
              >
                <span className="relative z-10">Create Account</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 mb-6 relative z-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" style={{borderColor: '#F5F7FA'}}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white" style={{color: '#717171'}}>Or sign up with</span>
                </div>
              </div>
            </div>

            {/* Social Registration */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <button className="flex items-center justify-center px-4 py-3 border rounded-xl transition-all" style={{
                borderColor: '#F5F7FA',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              }} onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#F5F7FA';
                e.target.style.transform = 'translateY(-2px) scale(1.02)';
                e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
              }} onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
              }}>
                <span className="text-sm font-medium" style={{color: '#717171'}}>Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border rounded-xl transition-all" style={{
                borderColor: '#F5F7FA',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              }} onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#F5F7FA';
                e.target.style.transform = 'translateY(-2px) scale(1.02)';
                e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
              }} onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
              }}>
                <span className="text-sm font-medium" style={{color: '#717171'}}>Facebook</span>
              </button>
            </div>

            {/* Sign In Link */}
            <div className="mt-8 text-center relative z-10">
              <p style={{color: '#717171'}}>
                Already have an account?{' '}
                <Link to="/login" className="font-medium transition-colors hover:underline" style={{color: '#1D5D9B'}} onMouseEnter={(e) => e.target.style.color = '#174A7C'} onMouseLeave={(e) => e.target.style.color = '#1D5D9B'}>
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;