import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #E7F3FB 0%, #C1DBF4 25%, #9ABDE6 50%, #739ED1 75%, #4C7FB1 100%)'
    }}>
      {/* Clean Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20 animate-pulse" style={{
          background: 'radial-gradient(circle, #75C2F6 0%, transparent 70%)',
          animationDuration: '4s'
        }}></div>
        <div className="absolute top-1/3 right-16 w-48 h-48 rounded-full opacity-15 animate-pulse" style={{
          background: 'radial-gradient(circle, #C1DBF4 0%, transparent 70%)',
          animationDuration: '6s',
          animationDelay: '1s'
        }}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full opacity-25 animate-pulse" style={{
          background: 'radial-gradient(circle, #9ABDE6 0%, transparent 70%)',
          animationDuration: '3s',
          animationDelay: '2s'
        }}></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 rounded-full opacity-30 animate-pulse" style={{
          background: 'radial-gradient(circle, #75C2F6 0%, transparent 70%)',
          animationDuration: '5s',
          animationDelay: '0.5s'
        }}></div>
        <div className="absolute top-2/3 left-1/3 w-40 h-40 rounded-full opacity-18 animate-pulse" style={{
          background: 'radial-gradient(circle, #1D5D9B 0%, transparent 70%)',
          animationDuration: '7s',
          animationDelay: '3s'
        }}></div>

        {/* Gradient Waves */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-0 w-full h-64 transform -rotate-12 animate-pulse" style={{
            background: 'linear-gradient(90deg, transparent 0%, #E7F3FB 50%, transparent 100%)',
            animationDuration: '8s'
          }}></div>
          <div className="absolute top-2/3 right-0 w-full h-48 transform rotate-12 animate-pulse" style={{
            background: 'linear-gradient(90deg, transparent 0%, #C1DBF4 50%, transparent 100%)',
            animationDuration: '10s',
            animationDelay: '2s'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '4s'}}></div>

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
              <span>New here? </span>
              <Link to="/register" className="font-medium transition-colors" style={{color: '#1D5D9B'}} onMouseEnter={(e) => e.target.style.color = '#174A7C'} onMouseLeave={(e) => e.target.style.color = '#1D5D9B'}>
                Create account
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
                Welcome Back
              </h1>
              <p style={{color: '#717171'}}>
                Sign in to continue your educational journey
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
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
                    placeholder="Enter your password"
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded focus:outline-none transition-transform hover:scale-110"
                    style={{
                      accentColor: '#1D5D9B',
                      borderColor: '#F5F7FA'
                    }}
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm" style={{color: '#717171'}}>
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm transition-colors hover:underline" style={{color: '#1D5D9B'}} onMouseEnter={(e) => e.target.style.color = '#174A7C'} onMouseLeave={(e) => e.target.style.color = '#1D5D9B'}>
                  Forgot password?
                </a>
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
                <span className="relative z-10">Sign In</span>
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
                  <span className="px-4 bg-white" style={{color: '#717171'}}>Or continue with</span>
                </div>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <button className="flex items-center justify-center px-4 py-3 border rounded-xl transition-all duration-300" style={{
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
              <button className="flex items-center justify-center px-4 py-3 border rounded-xl transition-all duration-300" style={{
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

            {/* Sign Up Link */}
            <div className="mt-8 text-center relative z-10">
              <p style={{color: '#717171'}}>
                Don't have an account?{' '}
                <Link to="/register" className="font-medium transition-all hover:underline" style={{color: '#1D5D9B'}} onMouseEnter={(e) => e.target.style.color = '#174A7C'} onMouseLeave={(e) => e.target.style.color = '#1D5D9B'}>
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm" style={{color: '#717171'}}>
              By signing in, you agree to our{' '}
              <a href="#" className="underline transition-all hover:text-blue-600" style={{color: '#1D5D9B'}} onMouseEnter={(e) => e.target.style.color = '#174A7C'} onMouseLeave={(e) => e.target.style.color = '#1D5D9B'}>Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="underline transition-all hover:text-blue-600" style={{color: '#1D5D9B'}} onMouseEnter={(e) => e.target.style.color = '#174A7C'} onMouseLeave={(e) => e.target.style.color = '#1D5D9B'}>Privacy Policy</a>
            </p>
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

export default LoginPage;