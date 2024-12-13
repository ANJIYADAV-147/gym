import React from 'react'
import Header from '../Header'
import Slider from 'react-slick';

// Import the Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import aboutImg from '../Images/about-img.jpeg'
import { MdOutlineFitnessCenter } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { IoFitness } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiStarSFill } from "react-icons/ri";
import { TbStarHalfFilled } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";



const HomePage = () => {
    React.useEffect(() => {
        AOS.init();  // Initialize AOS
    }, []);

    const settings = {
        dots: true,          // Enable dots for navigation
        infinite: true,      // Infinite looping of slides
        speed: 500,          // Transition speed
        slidesToShow: 1,     // Number of slides to show at once
        slidesToScroll: 1,

    };


    const renderTeamDesktopView = () => {
        return (
            <div className='render-team-desktop-view'>
                <div className="section-ourteam" id="ourteam">
                    <div className="container ourteam" data-aos="fade-down">
                        <h2 className="title ">Our Team</h2>
                        <div className="team-members ">
                            <div className="team-member" data-aos="fade-up" data-aos-duration="500">
                                <img src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Logo" class="member-logo" />
                                <div className="team-memmber-info">
                                    <div className="member-name">Scott</div>
                                    <div className="member-desg">Weight Lifting Coach</div>
                                    <div className="member-desc">Specializes in sculpting strength and muscle with precision</div>
                                </div>
                            </div>
                            <div className="team-member" data-aos="fade-up" data-aos-duration="1000">
                                <img src="https://vfitclub.netlify.app/image/CharlieWatson.jpg" alt="Logo" className="member-logo" />
                                <div className="team-memmber-info">
                                    <div className="member-name">Joe Stafford</div>
                                    <div className="member-desg">MMA Coach</div>
                                    <div className="member-desc">Hones combat skills and self-defense with expertise</div>
                                </div>
                            </div>
                            <div className="team-member" data-aos="fade-up" data-aos-duration="1500">
                                <img src="https://vfitclub.netlify.app/image/RachelDanielle.jpg" alt="Logo" className="member-logo" />
                                <div className="team-memmber-info">
                                    <div className="member-name">Parker</div>
                                    <div className="member-desg">Yoga Instructor</div>
                                    <div className="member-desc">Guides you to inner peace and flexibility through mindful yoga practice</div>
                                </div>
                            </div>
                            <div className="team-member" data-aos="fade-up" data-aos-duration="2000">
                                <img src="https://imgcdn.stablediffusionweb.com/2024/5/26/7c87c14a-9112-4dfb-98e6-749143527fbe.jpg" alt="Logo" className="member-logo" />
                                <div className="team-memmber-info">
                                    <div className="member-name">Roberts</div>
                                    <div className="member-desg">Personal Trainer</div>
                                    <div className="member-desc">Your path to achieving fitness goals, one personalized session at a time</div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderTeamMobileView = () => {
        return (
            <div className='render-team-mobile-view'>
                <div className='sliders-container'>
                    <h1 className='text-white text-3xl mb-4'>Our Team</h1>
                    <div className='slider-teams-container'>
                        <Slider {...settings}>
                            <div className='mobile-teams'>
                                <div className="team-member" data-aos="fade-up" data-aos-duration="500">
                                    <img src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Logo" className="member-logo w-1/3 " />
                                    <div class="team-memmber-info">
                                        <div className="member-name">Scott</div>
                                        <div className="member-desg">Weight Lifting Coach</div>
                                        <div className="member-desc">Specializes in sculpting strength and muscle with precision</div>
                                    </div>
                                </div>
                            </div>
                            <div className='mobile-teams'>
                                <div className="team-member" data-aos="fade-up" data-aos-duration="1000">
                                    <img src="https://vfitclub.netlify.app/image/CharlieWatson.jpg" alt="Logo" className="member-logo " />
                                    <div className="team-memmber-info">
                                        <div className="member-name">Joe Stafford</div>
                                        <div className="member-desg">MMA Coach</div>
                                        <div className="member-desc">Hones combat skills and self-defense with expertise</div>
                                    </div>
                                </div>
                            </div>
                            <div className='mobile-teams'>
                                <div className="team-member" data-aos="fade-up" data-aos-duration="1500">
                                    <img src="https://vfitclub.netlify.app/image/RachelDanielle.jpg" alt="Logo" className="member-logo" />
                                    <div className="team-memmber-info">
                                        <div className="member-name">Parker</div>
                                        <div className="member-desg">Yoga Instructor</div>
                                        <div className="member-desc">Guides you to inner peace and flexibility through mindful yoga practice</div>
                                    </div>
                                </div>
                            </div>
                            <div className='mobile-teams'>
                                <div className="team-member" data-aos="fade-up" data-aos-duration="2000">
                                    <img src="https://imgcdn.stablediffusionweb.com/2024/5/26/7c87c14a-9112-4dfb-98e6-749143527fbe.jpg" alt="Logo" className="member-logo " />
                                    <div className="team-memmber-info">
                                        <div className="member-name">Roberts</div>
                                        <div className="member-desg">Personal Trainer</div>
                                        <div className="member-desc">Your path to achieving fitness goals, one personalized session at a time</div>

                                    </div>

                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div >
            <Header />
            <div className='home-container'>
                <h1 className='home-heading text-white font-bold text-4xl'>Track Your Fitness Journey</h1>
                <p className='home-des text-white'>Discover the ultimate fitness experience with GymFluencer. </p>
            </div>

            <div className='about-us-container'>
                <div data-aos="fade-right" data-aos-duration="500">
                    <img src={aboutImg} className='about-img ml-20 mr-20' alt='about-img' />
                </div>
                <div className='about-us-information w-1/3 mt-5 ' data-aos="fade-left" data-aos-duration="1500">
                    <h1 className='text-white mt-5 mb-5'>About Us</h1>
                    <h2 className='mobile-about-heading'>We Believe in “People Power”.Yours and Ours.</h2>
                    <h2 className='desktop-about-heading text-white font-semibold  text-4xl'>We Believe in <br />“People Power”.<br />Yours and Ours.</h2>
                    <p className='description text-white mt-5'>
                        If you are ready to transform your body, health, and athletic performance goals into a reality,
                        join our awesome community of fitness fans, athletes and professional fitness coaches and begin
                        your journey to a more fit you, today.
                    </p>
                    <div className='about-items flex flex-row mt-10'>
                        <MdOutlineFitnessCenter size={30} className='text-white' />
                        <p className='text-white ml-2 sm:text-sm text-lg'>A Customized Fitness Program.</p>
                    </div>
                    <div className='about-items flex flex-row mt-10'>
                        <RiTeamFill size={30} className='text-white' />
                        <p className='text-white ml-2 sm:text-sm text-lg'>Team Training Group Sessions.</p>
                    </div>
                    <div className='about-items flex flex-row mt-10'>
                        <IoFitness size={30} className='text-white' />
                        <p className='text-white sm:text-sm ml-2 text-lg'>Personal Training Anywhere.</p>
                    </div>
                </div>
            </div>

            <div className='mobile-desktop-team-container'>
                {renderTeamMobileView()}
                {renderTeamDesktopView()}
            </div>

            <div className='membership-sections'>
                <h1 className='text-white text-center text-4xl pt-4'>Membership</h1>
                <div className='membership-container m-4'>
                    <div className='membership-card mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='p-3 text-2xl'>3 Months</h1>
                            <p className='p-3 text-xl'>2000/- per month</p>
                        </div>
                        <hr className='p-3' />
                        <div className='flex flex-col text-lg'>
                            <ol>
                                <li className='p-3 text-xl'>5 Classes</li>
                                <li className='p-3'>5 In Personal Training Sessions</li>
                                <li className='p-3'>Unlimited Gym Access</li>
                                <li className='p-3'>Gym Tour & Training Instruction</li>
                            </ol>
                        </div>
                        <div className="membership-card-footer">
                            <button className="btn btn-primary">Check Out</button>
                        </div>
                    </div>
                    <div className='membership-card '>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='p-3 text-2xl'>6 Months</h1>
                            <p className='p-3 text-xl'>4000/- per month</p>
                        </div>
                        <hr className='p-3' />
                        <div className='flex flex-col text-lg'>
                            <ol>
                                <li className='p-3 text-xl'>10 Classes</li>
                                <li className='p-3'>10 In Personal Training Sessions</li>
                                <li className='p-3'>Unlimited Gym Access</li>
                                <li className='p-3'>Boxing Ring, Free Events</li>
                            </ol>
                        </div>
                        <div className="membership-card-footer">
                            <button className="btn btn-primary">Check Out</button>
                        </div>

                    </div>
                    <div className='membership-card mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='p-3 text-2xl'>1 Whole Year</h1>
                            <p className='p-3 text-xl'>6000/- per month</p>
                        </div>
                        <hr className='p-3' />
                        <div className='flex flex-col text-lg'>
                            <ol >
                                <li className='p-3 text-xl'>5 Classes</li>
                                <li className='p-3'>15 In Personal Training Sessions</li>
                                <li className='p-3'>Full Gym & Facilities Access</li>
                                <li className='p-3'>Unlimited Gym Access</li>
                            </ol>
                        </div>
                        <div className="membership-card-footer">
                            <button className="btn btn-primary">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='user-section'>
                <h1 className='text-white text-center text-4xl'>What User Say</h1>
                <div className='users-container'>
                    <div className='user-card text-white' data-aos="fade-up" data-aos-duration="500">
                        <h1 className='font-bold mb-4'>"Best Fitness App!"</h1>
                        <p className='text-center'>GymFluencer is a great app for anyone looking to improve their fitness and health.</p>
                        <div className='flex flex-row items-center justify-center mt-5'>
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <RiStarSFill size={25} className='text-yellow-500' />
                        </div>
                    </div>
                    <div className='user-card text-white ml-5 mr-5' data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='font-bold mb-4'>"So Easy to Use"</h1>
                        <p className='text-center'>I love how easy it is to use GymFluencer. It's like having a personal trainer at your fingertips.</p>
                        <div className='flex flex-row items-center justify-center mt-5'>
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <TbStarHalfFilled size={21} className='text-yellow-500' />
                        </div>
                    </div>
                    <div className='user-card text-white ' data-aos="fade-up" data-aos-duration="1500">
                        <h1 className='font-bold mb-4'>"Incredible Progress Tracker"</h1>
                        <p className='text-center'>I have seen amazing results since using GymFluencer.The progress tracking feature keeps me motivated.</p>
                        <div className='flex flex-row items-center justify-center mt-5'>
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <RiStarSFill size={25} className='text-yellow-500' />
                            <TbStarHalfFilled size={21} className='text-yellow-500' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-contact" id="contact">
                <div className="container contact">
                    <div className="contactus">
                        <form>
                            <h2 className="title">GET IN TOUCH</h2>
                            <div className="class-input"><input type="text" placeholder="Name" /></div>
                            <div className="class-input"><input type="email" placeholder="Email" /></div>

                            <div className="class-input"><input type="number" placeholder="Number" /></div>
                            <div className="class-input"><textarea placeholder="Message"></textarea></div>
                            <button className='send-button'>SEND</button>
                        </form>
                    </div>

                </div>
            </div>



            <div className="section-footer" id="footer">
                <div className="footer-box-container">
                    <div className="contact-details">
                        <h2 className='text-white footer-heading pb-2'>VFitness</h2>
                        <div className="contact-company-address text-white">
                            <p className='pb-3'>123 Veenavaka, Hyderabad</p>
                            <p className='pb-3'>Fitnessland 50709</p>
                            <p >India</p>
                        </div>

                    </div>
                    <nav className="footer-nav" aria-label="navigation">
                        <h3 className='text-white footer-heading'>Quick Links</h3>
                        <ul className='text-white'>
                            <li className='pb-3 pt-2'>About</li>
                            <li className='pb-3'>Memberships</li>
                            <li className='pb-3'>Our Team</li>
                            <li className='pb-3'>Contact</li>
                            <li>Reviews</li>
                        </ul>
                    </nav>
                    <div>
                        <h1 className='text-white footer-heading pl-5'>Follow Us</h1>
                        <div className='follow-us-icons flex flex-row text-white'>
                            <IoLogoWhatsapp size={30} className='m-3' />   
                            <FaFacebook size={30} className='m-3'/> 
                            <FaSquareInstagram size={30} className='m-3'/>
                            <FaSquareTwitter size={30} className='m-3'/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyrights-container flex flex-row justify-center text-white p-10">
                    <h1>Copyright © by Yadav</h1>
                </div>
            </div>

        </div>
    )
}
export default HomePage

