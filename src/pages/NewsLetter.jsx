import React from 'react'
import { signUpText, successText } from '../constants'
import { signUp, signUpMobile, success, listIcon } from '../assets'

const NewsLetter = () => {
    const list = signUpText.features.map((item, i) => (
        <div key={i} className='flex justify-start items-center mb-1'>
            <img src={listIcon} alt="list" className='w-4 h-4 mr-2' />
            <p style={{fontSize: '12px'}}>{item}</p>
        </div>
    ))
    const styles = {
        height: '400px',
        width: '680px'
    }
  return (
    <div className='font-roboto-reg text-base flex justify-center items-center h-screen bg-cu-c-grey'>
        <div className='flex items-center bg-cu-white rounded-3xl' style={styles}>
            <div className='flex justify-center items-center basis-full md:basis-1/2'>
                <div className="flex flex-col justify-start w-4/5 text-cu-ds-grey text-xs">
                    <h1 className='font-roboto-bold text-3xl'>
                        {signUpText.title}
                    </h1>
                    <p className='my-2'>
                        {signUpText.subTitle}
                    </p>
                    {list}
                    {/* <img src={signUp} alt="list" className='w-8 h-8' />
                    <img src={listIcon} alt="list" className='w-8 h-8' />
                    <img src={success} alt="list" className='w-8 h-8' />
                    <img src={signUpMobile} alt="list" className='w-8 h-8' /> */}
                </div>
            </div>
            <div className='flex justify-center items-center basis-full md:basis-1/2 h-72'>
                <img src={signUp} alt="signUp" className='w-full h-full' />
            </div>
        </div>
    </div>
  )
}

export default NewsLetter