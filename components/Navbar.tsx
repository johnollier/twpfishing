"use client";
import Image from "next/image";
import logo from "@/assets/images/twp-logo-2.png";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isClubInfoOpen, setIsClubInfoOpen] = useState(false);
  const [isRiversOpen, setIsRiversOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="navbar">
      {/* mobile menu button */}
      <div>
        {/* logo */}
        <Image src={logo} alt="fisherman logo" className="logo" />
        {/* desktop menu hidden below md screens */}
        <div className="flex-container" id="desktop-menu">
          <div className="menu-item">
            <Link
              href="/"
              className={`${pathname === "/" ? "light-green" : "black"}`}
            >
              Home
            </Link>
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => setIsClubInfoOpen(true)}
            onMouseLeave={() => setIsClubInfoOpen(false)}
          >
            <button
              className={`${
                pathname.startsWith("/club-info") ? "light-green" : "black"
              } nav-button`}
            >
              Club Information
            </button>
            {isClubInfoOpen && (
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link href="/club-information/club-history">
                      Club History
                    </Link>
                  </li>
                  <li>
                    <Link href="/club-information/club-rules">Club Rules</Link>
                  </li>
                  <li>
                    <Link href="/club-information/health-safety">
                      Health and Safety
                    </Link>
                  </li>
                  <li>
                    <Link href="/club-information/privacy">Privacy</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="menu-item">
            <Link
              href="/membership"
              className={`${
                pathname === "/membership" ? "light-green" : "black"
              } `}
            >
              Membership
            </Link>
          </div>
          <div className="menu-item">
            <Link
              href="/fishing-permits"
              className={`${
                pathname === "/fishing-permits" ? "light-green" : "black"
              } `}
            >
              Fishing Permits
            </Link>
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => setIsRiversOpen(true)}
            onMouseLeave={() => setIsRiversOpen(false)}
          >
            <button
              className={`${
                pathname.startsWith("/rivers") ? "light-green" : "black"
              } nav-button`}
            >
              Rivers and Beats
            </button>
            {isRiversOpen && (
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link href="/rivers/all-rivers" className="menu-link">
                      All Rivers
                    </Link>
                  </li>
                  <li>
                    <Link href="/rivers/tavy" className="menu-link">
                      The Tavy
                    </Link>
                  </li>
                  <li>
                    <Link href="/rivers/meavy">The Meavy</Link>
                  </li>
                  <li>
                    <Link href="/rivers/plym">The Cad/Plym</Link>
                  </li>
                  <li>
                    <Link href="/rivers/walkham">The Walkham</Link>
                  </li>
                  <li>
                    <Link href="/rivers/tamar">The Tamar</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="menu-item">
            <Link
              href="/gallery"
              className={`${
                pathname === "/gallery" ? "light-green" : "black"
              } `}
            >
              Gallery
            </Link>
          </div>
          <div className="menu-item">
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "light-green" : "black"
              } `}
            >
              Contact
            </Link>
          </div>
          <div className="menu-item">
            <Link
              href="/conservation"
              className={`${
                pathname === "/conservation" ? "light-green" : "black"
              } `}
            >
              Conservation
            </Link>
          </div>
        </div>
      </div>
      {/* mobile menu show/hide based on menu state */}
    </nav>
  );
};

export default Navbar;
