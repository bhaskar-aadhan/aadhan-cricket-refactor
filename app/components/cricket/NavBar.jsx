import React, { useEffect, useState } from 'react';
import { NavLink } from '@remix-run/react';
import platform from 'platform';
// import { Button } from "/components/cricket";
// import { aadhanLogo } from '~/assets';
import { cn } from '../../lib/utils';

const Navbar = ({ className = 'list_navbar_container w-full flex justify-between py-5 sm:max-w-[700px] mx-auto' }) => {
    const [applink, setApplink] = useState("https://play.google.com/store/apps/details?id=com.aadhan.hixic&referrer=utm_source=cricket")
    useEffect(() => {
        if (platform.os.family === 'Android') {
            setApplink('https://play.google.com/store/apps/details?id=com.aadhan.hixic&referrer=utm_source=cricket')
        } else if (platform.os.family === "iOS") {
            setApplink('https://apps.apple.com/in/app/aadhan-breaking-short-news/id1415681829')
        } else {
            setApplink('https://play.google.com/store/apps/details?id=com.aadhan.hixic&referrer=utm_source=cricket')
        }
    }, [])
    return (
        <div className={cn('list_navbar_container w-full flex justify-between py-5 sm:max-w-[700px] mx-auto', className)}>
            <div className='aadhan_logo flex-1 flex justify-start items-center'>
                <NavLink to='/'>
                    <img src={''} alt="aadhan logo" className='w-[5rem]' />
                </NavLink>
            </div>
            <div className='download_btn flex-1 flex justify-end items-center'>
                {/* <Button
                    href={applink}
                    sx={''}
                    buttonName={'DOWNLOAD APP'}
                    className='cursor-pointer'
                    iconSet={false}
                /> */}
            </div>
        </div>
    )
}

export default Navbar