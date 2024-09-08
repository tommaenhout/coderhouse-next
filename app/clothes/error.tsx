"use client";

import Button from "@/components/Button";

import { useEffect } from "react";

interface ErrorProps {
    error: string;
    reset: () => void;
}

export default function Error({error, reset} : ErrorProps) {
    useEffect(() => {
        console.log(error); 
    }, [error]);

return (
    <div className='bg-red-500 text-white p-4'>
        <div className='flex justify-between'>
            <div>Something went wrong, this is an error in the clothes page</div>
            <Button onClick={reset}>Reset page</Button>
        </div>
        <div>{error}</div>
    </div>
)
}