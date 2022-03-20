import React from 'react'

function Header() {
  return (
    <div className='flex top-0 left-0 right-0 
    flex-row justify-between bg-[#B2BEB5] h-20 z-10
    text-slate-200 sticky'>
        <div className='mx-2'>
            <p className='text-white'>ITmpD</p></div>
        <div className='flex-1'>Menus</div>
    </div>
  )
}

export default Header