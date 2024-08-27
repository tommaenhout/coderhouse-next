import React from 'react';



const Loading: React.FC = () => {
    return (
        <div className="flex absolute z-50 top-0 right-0 left-0 bottom-0 justify-center items-center h-screen w-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
};

export default Loading;