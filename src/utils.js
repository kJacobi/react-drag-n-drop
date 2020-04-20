import React from 'react';

// simple way to check whether the device support touch 
// (it doesn't check all fallback, it supports only modern browsers)
export const isTouchDevice = () => {
    if ("ontouchstart" in window) {
        return true;
    }
    return false;
};