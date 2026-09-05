"use client";

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/store';
import { supabase } from '@/lib/supabaseClient';
import { setSession } from '@/lib/store/slices/authSlice';

function AuthListener({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // 1. Initial session load
        supabase.auth.getSession().then(({ data: { session } }) => {
            store.dispatch(setSession(session));
        });

        // 2. Real-time Supabase Auth state sync
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            store.dispatch(setSession(session));
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return <>{children}</>;
}

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <AuthListener>{children}</AuthListener>
        </Provider>
    );
}
