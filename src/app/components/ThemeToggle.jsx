'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";

export default function checkbox() {
    const {theme, setTheme} = useTheme();
    const [mount, setMounted] =  useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mount) {
        return null;
    }

    const handleChange = (e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);

    }

    return (
        <section className="dark:bg-[#454545] dark:text-white bg-white text-black">
            <label>
            <FormControlLabel
                control={
                    <Checkbox
                        color="primary"
                        checked={theme == "dark"}
                        onChange={handleChange}
                    />
                }
                label="Toggle Dark Mode"
            />

            </label>

        </section>
        
    );
}