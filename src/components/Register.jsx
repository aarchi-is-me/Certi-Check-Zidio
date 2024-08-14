import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import img from "../assets/sign-up.jpg"

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', data);
      localStorage.setItem('authToken', res.data.token);
      console.log(res, ">>>>");
      if (res.status === 200) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'User registered successfully!',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        navigate("/")
        reset();  // Reset form values on successful registration

      }


    } catch (err) {
      if (err.response && err.response.status === 400) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'User already exists',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Registration failed. Please try again.',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (


    <div className="container mx-auto flex flex-col md:flex-row justify-center">

      {/* Signup Form */}
      <div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} className="w-full max-w-md p-6 bg-login rounded-lg mt-2 mb-2 shadow-md">
        <h2 className='text-center text-2xl font-bold mb-4'>SIGN UP</h2>

        <div className="mt-6 grid grid-cols-1 gap-3">


          <div>
            <a href="#"
              className="w-full flex gap-3  items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <FcGoogle className='text-3xl mb-2' />
              <p className='font-bold mt-2'>LOG IN WITH GOOGLE</p>
            </a>
          </div>
        </div>

        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm mt-4 mb-2">
            <span className="px-2 py-0 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
              Username
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Username is required' })}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Username"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4 relative">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
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
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Password"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center px-2 py-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="text-xl mt-3 " /> : <FaEye className="text-xl mt-3 " />}
            </span>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <div className="flex gap-4 justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`px-16 py-2 font-bold text-white bg-orange-600 rounded-full hover:bg-orange-500 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'SIGNING UP...' : 'SIGN UP'}
            </button>
          </div>
          <p className="text-center font-extrabold mt-2 ">Don't have an account? <Link className="text-red-500 hover:underline"
            to="/login">SIGN IN</Link></p>
        </form>
      </div >
      <img src={img} alt='login-img' className='shadow-md mt-2 mb-2' />

      {/* <motion.div   initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} className='mt-4 mb-2 w-full column max-w-md flex flex-col items-center rounded-lg p-6  shadow-md'>
    <h2 className='text-center text-3xl font-bold mb-4'>Welcome Back!</h2>
      <p className='text-center mb-2'>To keep connected with us, please <br/> login with your personal info</p>
     
  
      <div className='sign flex justify-center mt-3 mb-2 py-3'>
        <Link to="/login">
          <button className='btns px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none'>
            SIGN IN
          </button>
        </Link>
      </div>
    </motion.div> */}
    </div>




  );
};

export default Register;
