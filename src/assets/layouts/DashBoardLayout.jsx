import { useSignOut } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase/firebase.config";

const DashBoardLayout = () => {
    const [signOut] = useSignOut(auth);

    const handleLogOut = async () => {
        await signOut();
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-accent  drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-gray-100 p-4 w-80 flex flex-col justify-between min-h-screen bg-base-200 text-base-content">

                    <div className="bg-slate-300">
                        {/* Sidebar content here */}
                        <li><Link to={''} >Dashboard</Link></li>
                        <li><Link to={'/dashboard/all-Products'}>All Products</Link></li>
                        <li><Link to={'/dashboard/add-Products'}>Add Products</Link></li>
                        <li><Link to={'/'}>Home</Link></li>
                    </div>


                    {/* Logout */}
                    <div>
                        <button className="btn btn-success" onClick={handleLogOut}>
                            Log Out
                        </button>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default DashBoardLayout;