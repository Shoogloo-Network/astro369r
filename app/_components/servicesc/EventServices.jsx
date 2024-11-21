import React from 'react';
import styles from './EventServices.module.css';
import "../../globals.css";
import "../../styles.css";
const EventServices = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.divStyleMain}>
                    <h1 className={styles.divStyleH1}>3 Steps to an Unforgettable Event</h1>
                    <div>
                        <div className={styles.divStyleFlex}>
                            <div className={styles.divStyleCircle}>1</div>
                            <div>
                                <h5>Pick Your Psychic Advisor</h5>
                                <p>Check out our gifted Advisors.</p>
                            </div>
                        </div>
                        <div className={styles.divStyleFlex}>
                            <div className={styles.divStyleCircle}>2</div>
                            <div>
                                <h5>Share Your Vision</h5>
                                <p>Set the scene with a few details so we can help make your event.</p>
                            </div>
                        </div>
                        <div className={styles.divStyleFlex}>
                            <div className={styles.divStyleCircle}>3</div>
                            <div>
                                <h5>Enjoy the Moment</h5>
                                <p>Get ready for an unforgettable evening of answers and insights.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.divStyle}></div>
            </div>
        </div>
    );
};

export default EventServices;
