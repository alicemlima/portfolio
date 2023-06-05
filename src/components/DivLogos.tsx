"use client"
import Image from 'next/image'
import React from 'react'

export default function DivLogos() {
    return (
        <div className="flex w-full dark:bg-opacity-0 dark:border-y-2  bg-dark-black h-18 overflow-hidden">
            <div className="flex  animate-marquee before:p-1">
                <Image className="mx-8" src="/nextjs-icon.svg" alt="" height={200} width={200} />
                <Image className="mx-8" src="/spring.svg" alt="" height={300} width={300} />
                <Image className="mx-8" src="/reactjs.svg" alt="" height={200} width={200} />
                <Image className="mx-8" src="/mysql.svg" alt="" height={300} width={300} />
                <Image className="mx-8" src="/tailwindcss.svg" alt="" height={300} width={300} />
                <Image className="mx-8" src="/nextjs-icon.svg" alt="" height={200} width={200} />
                <Image className="mx-8" src="/spring.svg" alt="" height={300} width={300} />
                <Image className="mx-8" src="/reactjs.svg" alt="" height={200} width={200} />
                <Image className="mx-8" src="/mysql.svg" alt="" height={300} width={300} />
                <Image className="mx-8" src="/tailwindcss.svg" alt="" height={300} width={300} />
            </div>

        </div>
    )
}