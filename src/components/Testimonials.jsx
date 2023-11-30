import React from 'react'
import '../styles/Testimonials.css'
import { useState } from 'react';

function Testimonials() {

    const [currentIndex, setCurrentIndex] =useState(0);
    const testimonials =[
        {
            quote:"I was struggling to keep up with my schoolwork and was feeling overwhelmed. I decided to try a tutoring service, and I'm so glad I did! My tutor has helped me improve my grades and has given me the confidence I need to succeed in school. I highly recommend this tutoring service to anyone who is looking for extra help.",
            author:"Sarah Jones"
        },
        {
            quote:"My company was looking for a new way to attract customers. We decided to try a social media marketing campaign, and we've been blown away by the results! We've seen a significant increase in website traffic and social media engagement, and we've even closed a few new deals. I highly recommend social media marketing to any business looking for a new way to reach customers.",
            author:"John Smith"
        },
        {
            quote:"I was feeling lost and alone after my divorce. I decided to try a support group, and it was the best decision I've ever made. The group has helped me cope with my grief and has given me the strength to move on with my life. I highly recommend support groups to anyone who is going through a difficult time.",
            author:"Jane Doe"
        },
        {
            quote:"I was tired of feeling unhealthy and out of shape. I decided to join a gym, and I'm so glad I did! I've lost weight, gained muscle, and I feel better than ever. I highly recommend joining a gym to anyone who is looking to improve their health and fitness.",
            author:"Peter Williams,"
        }
    ];

    const handlePrevClick =()=>{
        setCurrentIndex(
            (currentIndex+ testimonials.length-1)%testimonials.length
        );
    };
    const handleNextClick =()=>{
        setCurrentIndex(
            (currentIndex + 1)%testimonials.length
        );
    }


  return (<>
        <div className="testimonials container">
            <div className="testimonials-quote">
                {testimonials[currentIndex].quote}
            </div>
            <div className="testimonials-author">
                #{testimonials[currentIndex].author}
            </div>
            <div className="testimonials-nav">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div>

                        
        </div>      
    </>)
}

export default Testimonials