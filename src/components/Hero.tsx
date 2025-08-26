import Image from "next/image"
import Link from "next/link"
import Header from "./motion-comp/Header"
import RotatingText from "./ui/RotatingText"
import data from "../../public/data.json"

import Linkedin from "./icons/Linkedin"
import Github from "./icons/Github"
import Resume from "./icons/Resume"
import Instagram from "./icons/Instagram"
import { JSX } from "react"

const icon: Record<string, JSX.Element> = {
    "linkedin": <Linkedin />,
    "github": <Github />,
    "resume": <Resume />,
    "instagram": <Instagram />
}

export default function Hero() {
    return (
        <header>
            <Image 
                src="/MountainBackground.jpg"
                alt="Black and White Moutain with Serrounding Fog"
                width={5472}
                height={3648}
                className="bgImg"
            />
            <div className="overlay"></div>
            <Image 
                src="/tree.png"
                alt="Trees"
                width={1620}
                height={620}
                className="trees"
            />

            <div className="text">
                <Header type="h1" className="leading-15 md:leading-18">Hello, I&apos;m Amin Sedaghat!</Header>
                <h2>I&apos;m a <RotatingText /></h2>
                <div className="btns">
                    <Link href="#projects">Projects</Link>
                    <Link href="#experiences">Experience</Link>
                </div>
            </div>

            <div className="socials">
                {data.hero.socials.map((item, index) => (
                   <Link key={index} href={item.link} target="blank" rel={item.name.toLowerCase() == "resume" ? "noopener noreferrer": ""}>
                        <span>{item.name}</span>
                        {icon[item.name.toLowerCase()]}
                    </Link> 
                ))}
                
            </div>
        </header>
    )
}
