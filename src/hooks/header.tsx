import React from 'react';
import Header from '../components/Header';

const withLayout = <P extends object>(Component: React.ComponentType<P>) => (props: P) => {

    return (
        <>
            <Header />
            <Component {...props} />
        </>
    )
}
export default withLayout;
