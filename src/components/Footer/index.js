import React from 'react'

import Github from '../../assets/svg/github.svg';
import Linkedin from '../../assets/svg/linkedin.svg';

import './styles.css'
export default function Footer() {
    return (
        <footer className="footer-container w-100" id="creator">
            <article className="footer-container__top-side">
                <h6>Made by Thomas Curvelo</h6>
            </article>
            <article className="footer-container__bottom-side">
                <div className="bottom-side__social">
                    <a
                        href="https://www.linkedin.com/in/thomas-curvelo-a534911ba/"
                        className="text-decoration-none"
                        target="_blank"
                        rel="noreferrer">
                        <img src={Linkedin} alt="Linkedin icon" />
                        <p className="my-0 text-light linkedin">Linkedin</p>
                    </a>
                </div>
                <div className="bottom-side__social">
                    <a
                        href="https://github.com/Thomicurve"
                        className="text-decoration-none"
                        target="_blank"
                        rel="noreferrer">
                        <img src={Github} alt="Github icon" />
                        <p className="my-0 text-light github">Github</p>
                    </a>
                </div>
            </article>
        </footer>
    )
}
