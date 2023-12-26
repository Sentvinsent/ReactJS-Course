import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export default function RouteElement() {
    return <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </>
}