'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { S1,S2,S3,S4,S5 } from '@/Images/imagess';
import Image from 'next/image';

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} interval={3000} >
                <div>
                    <Image src={S1} alt='S1'/>
                </div>
                <div>
                    <Image src={S2} alt='S2'/>
                </div>
                <div>
                    <Image src={S3} alt='S3'/>
                </div>
                <div>
                    <Image src={S4} alt='S4'/>
                </div>
                <div>
                    <Image src={S5} alt='S5'/>
                </div>
               
            </Carousel>
    </div>
  )
}

export default Banner