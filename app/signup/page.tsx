"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { signUpWithEmail, signInWithOAuth, clearAuthError } from '@/lib/store/slices/authSlice';

export default function SignupPage(): React.JSX.Element {
    const [view, setView] = useState<'options' | 'email'>('options');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [clientError, setClientError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.auth);

    const handleGoogleSignup = () => {
        dispatch(clearAuthError());
        setClientError('');
        dispatch(signInWithOAuth('google'));
    };

    const handleGitHubSignup = () => {
        dispatch(clearAuthError());
        setClientError('');
        dispatch(signInWithOAuth('github'));
    };

    const handleEmailSignup = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setClientError('');
        setSuccessMessage('');
        dispatch(clearAuthError());

        if (password.length < 6) {
            setClientError('Password must be at least 6 characters long.');
            return;
        }

        if (confirmPassword && password !== confirmPassword) {
            setClientError('Passwords do not match.');
            return;
        }

        const res = await dispatch(signUpWithEmail({ email, password }));
        if (signUpWithEmail.fulfilled.match(res)) {
            setSuccessMessage('Check your email for the confirmation link to finish creating your account!');
        }
    };

    const activeError = clientError || error;

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <Link href="/" style={styles.logo}>
                    <span style={styles.logoC}>C</span> oursenix
                </Link>

                {view === 'options' && (
                    <>
                        <h2 style={styles.title}>Create your account</h2>
                        <p style={styles.subtitle}>Start generating full AI-powered courses instantly</p>

                        <button 
                            onClick={handleGoogleSignup} 
                            disabled={loading} 
                            style={styles.optionBtn}
                        >
                            <span style={styles.icon}>G</span> Sign up with Google
                        </button>

                        <button 
                            onClick={handleGitHubSignup} 
                            disabled={loading} 
                            style={styles.optionBtn}
                        >
                            <span style={styles.icon}>⚡</span> Sign up with GitHub
                        </button>

                        <button 
                            onClick={() => {
                                setView('email');
                                setClientError('');
                                setSuccessMessage('');
                                dispatch(clearAuthError());
                            }} 
                            style={styles.optionBtn}
                        >
                            <span style={styles.icon}>✉</span> Sign up with Email
                        </button>

                        {activeError && <p style={styles.errorText}>{activeError}</p>}
                        {successMessage && <p style={styles.successText}>{successMessage}</p>}

                        <p style={styles.toggleText}>
                            Already have an account?{' '}
                            <Link href="/login" style={styles.toggleLink}>Log in</Link>
                        </p>
                    </>
                )}

                {view === 'email' && (
                    <>
                        <button 
                            onClick={() => { 
                                setView('options'); 
                                setClientError('');
                                setSuccessMessage('');
                                dispatch(clearAuthError()); 
                            }} 
                            style={styles.backBtn}
                        >
                            ← Back
                        </button>
                        <h2 style={styles.title}>Sign up with Email</h2>
                        <p style={styles.subtitle}>Fill in your email and password</p>

                        <form onSubmit={handleEmailSignup} style={styles.form}>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                required
                                style={styles.input}
                            />
                            <input
                                type="password"
                                placeholder="Password (min 6 characters)"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                style={styles.input}
                            />
                            <input
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                                required
                                minLength={6}
                                style={styles.input}
                            />
                            <button type="submit" disabled={loading} style={styles.submitBtn}>
                                {loading ? 'Creating account...' : 'Create Account'}
                            </button>
                        </form>

                        {activeError && <p style={styles.errorText}>{activeError}</p>}
                        {successMessage && <p style={styles.successText}>{successMessage}</p>}

                        <p style={styles.toggleText}>
                            Already have an account?{' '}
                            <Link href="/login" style={styles.toggleLink}>Log in</Link>
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
