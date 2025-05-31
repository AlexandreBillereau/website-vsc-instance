import "./heroBanner.css";
import RocketSvg from "../../assets/svg/rocket";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import ButtonSlider from "../ButtonSlider/ButtonSlider";


const HeroBanner = () => {

    const heroRowDownloadLeft = useRef<HTMLElement>(null);

    useGSAP(() => {
        const textWidth = heroRowDownloadLeft.current!.offsetWidth;
        console.log(textWidth);

        gsap.to(heroRowDownloadLeft.current, {
            x: -textWidth,
            repeat: -1,
            duration: 25,
            ease: "none",
            onStart:() => {
                //duplicate the text
                const duplicateText = heroRowDownloadLeft.current!.cloneNode(true) as HTMLElement;
                heroRowDownloadLeft.current!.appendChild(duplicateText);
            },
            onUpdate: () => {
            }
        });

        //overflow title
        gsap.from(".text-from-bottom-text", {
            y: 100,
            duration: 1,
            delay: 1,
            ease: "expo.out",
        })
        gsap.to(".text-from-bottom-text", {
            y: 0,
            duration: 1,
            delay: 1,
            ease: "expo.out",
        });
        
       
    });

    return(
        <div className="hero-banner">
            <nav className="hero-nav"></nav>
            <div className="hero-container">
                <div className="hero-row-download">
                    <div className="hero-row-download-left">
                        <span ref={heroRowDownloadLeft}>Multi-Instance • Smart Sync • Import & Export • Isolated Configs • Theme Customization • &nbsp;</span>
                    </div>
                    <button className="hero-row-download-button">
                        DownLoad 
                        <RocketSvg />
                    </button>
                </div>
                <div className="hero-row-content">
                    <div className="hero-row-content-left ">
                        <div className="hero-row-content-version-text">
                            <span>v.1.0.0</span>
                        </div>
                        <div className="text-from-bottom">
                            <h1 className="text-from-bottom-text">Vs Instance</h1>
                        </div>
                    </div>
                    <div className="hero-row-content-right">
                        <div className="text-from-bottom">  </div>
                        <h1>Effortlessly manage multiple <br /> VSCode and Fork instances.</h1>
                        <p>Create isolated environments for each project. Customize, sync, <br /> and switch with total freedom.</p>
                        <button className="hero-row-content-right-button"><span>Features</span></button>
                    </div>
                </div>
                <ButtonSlider mainText="Git hub" slidingText="Contribute to the project . Download the source code from github . Give us some feedback . Help us improve the project . Make it better for everyone . Thank you for your support .&nbsp;" />
            </div>
        </div>
    );
}

export default HeroBanner;


