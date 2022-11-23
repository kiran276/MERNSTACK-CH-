import React from 'react'
import Card from '../../Components/shared/Card/Card'
import styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Components/shared/Button/Button';
const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
    const navigate = useNavigate();
    function startRegister() {
        navigate('/register');
    }
  return (
    <div className={styles.cardWrapper}>
<Card title="Welcome to CodeHouse!" icon="logo">
<p className={styles.text}>
                    We’re working hard to get Codershouse ready for everyone!
                    While we wrap up the finishing youches, we’re adding people
                    gradually to make sure nothing breaks
                </p>
                <div>
                {/* <button>
                    <span>Get Your Password</span>
                    <img src="/images/arrow-forward.png"/>
                </button> */}
                    <Button onClick={startRegister} text="Get your username" />
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>
                        Have an invite text?
                    </span>
                    <Link style={signInLinkStyle} to="/login">
                        Sign in
                    </Link>
                </div>
</Card>
</div>
  )
}

export default Home
