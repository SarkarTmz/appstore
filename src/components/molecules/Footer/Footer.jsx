import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-card container section">
                <ul>
                    <p>Who We Are</p>
                    <Link to="about">About</Link>
                    <Link to="about">Contact</Link>
                    <Link to="about">Term of Service</Link>
                    <Link to="about">Privacy Policy</Link>
                </ul>
                <ul>
                    <p>Tutorials</p>
                    <Link to="about">XAPKS Installer</Link>
                    <Link to="about">PPSSPP Setup</Link>
                    <Link to="about">How to fix common problems</Link>
                    <Link to="about">Extract File</Link>
                </ul>
                <ul>
                    <p>Trending</p>
                    <Link to="about">Spotify</Link>
                    <Link to="about">Netflix</Link>
                    <Link to="about">Minecraft</Link>
                    <Link to="about">YouTube</Link>
                    <Link to="about">Truecaller</Link>
                    <Link to="about">PicsArt</Link>
                </ul>
                <ul>
                    <p>New releases</p>
                    <Link to="about">Chomp SMS</Link>
                    <Link to="about">Legendary: Game of Heroes</Link>
                    <Link to="about">High Heels!</Link>
                    <Link to="about">My Talking Hank</Link>
                    <Link to="about">Penguin Isle</Link>
                    <Link to="about">Jojoy</Link>
                </ul>
            </div>
            <div className="credit">
                <p>All Copyright Reserved</p>
                <p>Made by <a href="https://sonamtmg.vercel.app/">Sonam Tamang</a></p>
            </div>
        </div>
    </>
  )
}

export default Footer