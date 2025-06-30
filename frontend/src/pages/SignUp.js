import React, { useState } from 'react';
import loginIcons from '../assests/signin.gif';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import { toast } from 'react-toastify';
import SummaryApi from '../common'; // Add this line

/**
 * SignUp component handles the user registration process.
 * 
 * @component
 * 
 * @example
 * return (
 *   <SignUp />
 * )
 * 
 * @returns {JSX.Element} The SignUp component.
 * 
 * @description
 * This component provides a form for users to sign up by entering their name, email, password, and profile picture.
 * It includes functionality to show/hide passwords, upload a profile picture, and validate the form before submission.
 * 
 * @function
 * @name SignUp
 * 
 * @property {boolean} showPassword - State to toggle the visibility of the password field.
 * @property {boolean} showConfirmPassword - State to toggle the visibility of the confirm password field.
 * @property {Object} data - State to hold the form data including email, password, name, confirmPassword, and profilePic.
 * @property {function} setData - Function to update the form data state.
 * @property {function} navigate - Function to navigate to different routes.
 * 
 * @method
 * @name handleOnChange
 * @description Updates the form data state when an input field changes.
 * @param {Object} e - The event object.
 * 
 * @method
 * @name handleUploadPic
 * @description Handles the profile picture upload and converts it to base64 format.
 * @param {Object} e - The event object.
 * 
 * @method
 * @name handleSubmit
 * @description Validates the form data and submits it to the server. Displays success or error messages based on the response.
 * @param {Object} e - The event object.
 */
const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [data,setData] = useState({
      email : "",
      password : "",
      name : "",
      confirmPassword : "",
      profilePic : "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e) =>{
      const { name , value } = e.target

      setData((preve)=>{
          return{
              ...preve,
              [name] : value
          }
      })
  }

  const handleUploadPic = async(e) =>{
    const file = e.target.files[0]
    
    const imagePic = await imageTobase64(file)
    
    setData((preve)=>{
      return{
        ...preve,
        profilePic : imagePic
      }
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      profilePic: data.profilePic
    };

    console.log("Form Data:", formData); // Log the data

    if (data.password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return;
    }

    if (data.password === data.confirmPassword) {
        try {
            const response = await fetch(SummaryApi.signUP.url, {
                method: SummaryApi.signUP.method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const dataApi = await response.json();

            if (!response.ok) {
                console.error("Signup Error:", dataApi);
                throw new Error(dataApi.message || "Failed to fetch");
            }

            console.log("Signup Success:", dataApi);
            toast.success(dataApi.message || "Signup successful");
            navigate("/login");
        } catch (error) {
            toast.error(error.message || "Failed to connect to the server. Please try again.");
            console.error("Signup Error:", error);
        }
    } else {
        toast.error("Please check password and confirm password");
    }
  };

  return (
    <section id='signup'>
        <div className='mx-auto container p-4'>


            <div className='bg-white p-5 w-full max-w-sm mx-auto'>

                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginIcons} alt='login icons'/>
                        </div>
                        <form>
                          <label>
                            <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                              Upload  Photo
                            </div>
                            <input type='file' className='hidden' onChange={handleUploadPic}/>
                          </label>
                        </form>
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                      <div className='grid'>
                              <label>Name : </label>
                              <div className='bg-slate-100 p-2'>
                                  <input 
                                      type='text' 
                                      placeholder='enter your name' 
                                      name='name'
                                      value={data.name}
                                      onChange={handleOnChange}
                                      required
                                      className='w-full h-full outline-none bg-transparent'/>
                              </div>
                          </div>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                    type='email' 
                                    placeholder='enter email' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='enter password'
                                    value={data.password}
                                    name='password' 
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Confirm Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type={showConfirmPassword ? "text" : "password"} 
                                    placeholder='enter confirm password'
                                    value={data.confirmPassword}
                                    name='confirmPassword' 
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>

                                <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showConfirmPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>

                    </form>

                    <p className='my-5'>Already have account ? <Link to={"/login"} className=' text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
            </div>


        </div>
    </section>
  )
}

export default SignUp