"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { signInWithEmail, signInWithOAuth, signUpWithEmail, clearAuthError } from '@/lib/store/slices/authSlice';

export default function LoginPage(): React.JSX.Element {
    const router = useRouter();
    const [view, setView] = useState<'options' | 'email'>('options');
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.auth);

    const handleGoogleLogin = () => {
        dispatch(clearAuthError());
        dispatch(signInWithOAuth('google'));
    };

    const handleGitHubLogin = () => {
        dispatch(clearAuthError());
        dispatch(signInWithOAuth('github'));
    };

    const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setSuccessMessage('');
        dispatch(clearAuthError());

        if (isSignUp) {
            const result = await dispatch(signUpWithEmail({ email, password }));
            if (signUpWithEmail.fulfilled.match(result)) {
                setSuccessMessage('Check your email for the confirmation link to complete registration!');
            }
        } else {
            const result = await dispatch(signInWithEmail({ email, password }));
            if (signInWithEmail.fulfilled.match(result)) {
                router.push('/courses');
            }
        }
    };

    const toggleMode = (signUpMode: boolean) => {
        setIsSignUp(signUpMode);
        dispatch(clearAuthError());
        setSuccessMessage('');
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <Link href="/" style={styles.logo}>
                    <span style={styles.logoC}>C</span> oursenix
                </Link>

                {view === 'options' && (
                    <>
                        <h2 style={styles.title}>Welcome back</h2>
                        <p style={styles.subtitle}>Sign in to continue building courses</p>

                        <button 
                            onClick={handleGoogleLogin} 
                            disabled={loading} 
                            style={styles.optionBtn}
                        >
                            <span style={styles.icon}>G</span> Continue with Google
                        </button>

                        <button 
                            onClick={handleGitHubLogin} 
                            disabled={loading} 
                            style={styles.optionBtn}
                        >
                            <span style={styles.icon}>⚡</span> Continue with GitHub
                        </button>

                        <button 
                            onClick={() => {
                                setView('email');
                                dispatch(clearAuthError());
                                setSuccessMessage('');
                            }} 
                            style={styles.optionBtn}
                        >
                            <span style={styles.icon}>✉</span> Continue with Email
                        </button>

                        {error && <p style={styles.errorText}>{error}</p>}
                        {successMessage && <p style={styles.successText}>{successMessage}</p>}

                        <p style={styles.toggleText}>
                            Don&apos;t have an account?{' '}
                            <Link href="/signup" style={styles.toggleLink}>Sign up</Link>
                        </p>
                    </>
                )}

                {view === 'email' && (
                    <>
                        <button 
                            onClick={() => { 
                                setView('options'); 
                                dispatch(clearAuthError()); 
                                setSuccessMessage(''); 
                            }} 
                            style={styles.backBtn}
                        >
                            ← Back
                        </button>
                        <h2 style={styles.title}>{isSignUp ? 'Create account' : 'Sign in with Email'}</h2>
                        <p style={styles.subtitle}>
                            {isSignUp ? 'Enter your details to register' : 'Enter your credentials to access your account'}
                        </p>

                        <form onSubmit={handleEmailSubmit} style={styles.form}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                required
                                style={styles.input}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                style={styles.input}
                            />
                            <button type="submit" disabled={loading} style={styles.submitBtn}>
                                {loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
                            </button>
                        </form>

                        {error && <p style={styles.errorText}>{error}</p>}
                        {successMessage && <p style={styles.successText}>{successMessage}</p>}

                        <p style={styles.toggleText}>
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                            <span style={styles.toggleLink} onClick={() => toggleMode(!isSignUp)}>
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </span>
                        </p>
                    </>
                )}

                <Link href="/" style={styles.homeLink}>← Back to home</Link>
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
    },
    card: {
        position: 'relative',
        background: '#0f1512',
        border: '1px solid #1f2b26',
        padding: '36px 32px',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '380px',
        color: '#fff',
    },
    logo: {
        fontSize: '20px',
        fontWeight: 700,
        marginBottom: '24px',
        color: '#fff',
        textDecoration: 'none',
        display: 'inline-block',
    },
    logoC: {
        color: '#2dd4a7',
    },
    title: {
        fontSize: '22px',
        fontWeight: 700,
        marginBottom: '6px',
    },
    subtitle: {
        color: '#8a9a94',
        fontSize: '14px',
        marginBottom: '24px',
    },
    optionBtn: {
        width: '100%',
        padding: '12px',
        marginBottom: '12px',
        background: '#161f1b',
        border: '1px solid #26332d',
        borderRadius: '8px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'border-color 0.2s, background 0.2s',
    },
    icon: {
        display: 'inline-flex',
        width: '20px',
        justifyContent: 'center',
    },
    backBtn: {
        background: 'none',
        border: 'none',
        color: '#2dd4a7',
        cursor: 'pointer',
        fontSize: '13px',
        marginBottom: '16px',
        padding: 0,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    input: {
        padding: '12px',
        background: '#161f1b',
        border: '1px solid #26332d',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '14px',
        outline: 'none',
    },
    submitBtn: {
        padding: '12px',
        background: 'linear-gradient(90deg, #2dd4a7, #22c1c3)',
        color: '#0f1512',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 700,
        marginTop: '4px',
    },
    errorText: {
        marginTop: '14px',
        fontSize: '13px',
        color: '#ff8080',
        textAlign: 'center',
    },
    successText: {
        marginTop: '14px',
        fontSize: '13px',
        color: '#2dd4a7',
        textAlign: 'center',
    },
    toggleText: {
        textAlign: 'center',
        marginTop: '18px',
        fontSize: '13px',
        color: '#8a9a94',
    },
    toggleLink: {
        color: '#2dd4a7',
        cursor: 'pointer',
        fontWeight: 600,
        textDecoration: 'none',
    },
    homeLink: {
        display: 'block',
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '13px',
        color: '#5a6b64',
        textDecoration: 'none',
    },
};
