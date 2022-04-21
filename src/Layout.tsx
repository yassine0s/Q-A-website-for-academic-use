import React from 'react';
import MainBody from './component/MainBody';
interface LayoutProps {
    children: React.ReactNode;
 }
const Layout = ({ children }: LayoutProps) => {
    return (
        
        <div >
                        <MainBody></MainBody>

            { children }
        </div>
    );
};

export default Layout;