import { CAREER_CONSTANTS } from '@/lib/constants/career-constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ContactContainerProps = {
    title: string;
    subtitle: string;
    link: string;
    href?: string;
    imageUrl: string;
  };

const ContactContainer: React.FC<ContactContainerProps> = ({ title, subtitle, link, href, imageUrl}) => {
  return (
    <div className="my-6">
        <div className="flex items-start gap-3">

            <Image src={imageUrl} alt={title} width={25} height={25} />
            <div className="flex flex-col">
            
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-white">{subtitle}</p>
                <Link
                href={`mailto:${href}`}
                className="text-white hover:underline block"
                dangerouslySetInnerHTML={{ __html: link }}/>
            </div>
        </div>
    </div>
  )
}



const CareerContact = () => {
  return (
    <div className="lg:flex flex-col justify-between hidden md:block w-1/2 p-12 text-white space-y-12">
        <div>
            {CAREER_CONSTANTS?.INTRO_CONTACT?.map((contact, index) => (
                <ContactContainer
                key={index}
                title={contact.title}
                subtitle={contact.subtitle}
                link={contact.contact}
                href={contact.contact}
                imageUrl={contact.icon}
                />
            ))}
        </div>

        <div className="flex gap-4 ">
            {CAREER_CONSTANTS?.SOCIALS?.links.map((link, index) => (
                <Link
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className='border-[0.1px] bg-[#1a1a1a] rounded-xl p-2 border-white'
                >
                <Image src={link.src} alt={link.href} width={24} height={24} />
                </Link>
            ))}
        </div>
        </div>
  )
}

export default CareerContact