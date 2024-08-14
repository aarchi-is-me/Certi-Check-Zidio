import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import img from "../assets/logins.png"

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', data);
      localStorage.setItem('authToken', res.data.token);
      if (res.status === 200) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'User logged in successfully!',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        navigate("/")
        reset();  // Reset form values on successful login
      }
    } catch (err) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Login failed. Please try again.',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
 
  

    <div className="container mx-auto flex flex-col md:flex-row justify-center   ">
  

    <img src={img} alt='login-img' className='shadow-md mt-3 mb-2' />
    
    <div       initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} className="w-full max-w-md p-6 bg-login rounded-lg mt-3 mb-2 ">
      <h2 className='text-center text-3xl font-bold text-white'>SIGN IN</h2>
  
     
      <div className="mt-6 grid grid-cols-1 gap-3">
  
       
  <div>
    <a href="#"
      className="w-full flex gap-3  items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
      <FcGoogle className='text-3xl mb-2'/>
      <p className='font-bold '>LOG IN WITH GOOGLE</p>
    </a>
  </div>
</div>
<div className="relative mt-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or</span>
        </div>
      </div>
  
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full px-3 py-3  border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Your Email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-4 relative">
          <label className="block mb-2 text-sm font-bold text-white" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
            className="w-full px-3 py-3 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
            placeholder="*************"
          />
          <span 
            className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash className="text-xl mt-3" /> : <FaEye className="text-xl mt-3" />}
          </span>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>
        
        <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember_me" name="remember" type="checkbox" value="1" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
                        <label for="remember_me" className="ml-2 block text-sm leading-5 text-white">Remember me</label>
                    </div>

                    <div className="text-sm leading-5">
                        <a href="#"
                            className="font-medium text-white hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            Forgot your password?
                        </a>
                    </div>
                </div>
        <div className="flex justify-center mt-4 mb-2">
          <button
            type="submit"
            disabled={loading}
            className={`px-16 py-2 font-bold text-white bg-orange-600 rounded-full hover:bg-orange-500 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'SIGN IN...' : 'SIGN IN'}
          </button>
        </div>
      
    
      <p className="text-center font-extrabold mt-2 ">Don't have an account? <Link className="text-red-500 hover:underline"
          to="/register">SIGNUP</Link></p>
      </form>
    </div>
  </div>
  
    
   
  );
};

export default Login;
