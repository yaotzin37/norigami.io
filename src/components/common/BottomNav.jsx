import { Link } from 'react-router-dom';

const BottomNav = ({ activeTab }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 px-4 pb-4">
            <div className="flex justify-around items-center bg-black/90 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-full shadow-2xl">
                <Link to="/" className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-primary' : 'text-white/40'} group cursor-pointer`}>
                    <span className={`material-symbols-outlined text-[28px] ${activeTab === 'home' ? 'fill-1' : ''}`}>home</span>
                    <span className="text-[10px] font-black uppercase tracking-tighter italic">Home</span>
                </Link>
                <Link to="/category/sushi-clasico" className={`flex flex-col items-center gap-1 ${activeTab === 'menu' ? 'text-primary' : 'text-white/40'} group cursor-pointer hover:text-white transition-colors`}>
                    <span className={`material-symbols-outlined text-[28px] ${activeTab === 'menu' ? 'fill-1' : ''}`}>restaurant_menu</span>
                    <span className="text-[10px] font-black uppercase tracking-tighter italic">Menu</span>
                </Link>
                <div className="flex flex-col items-center gap-1 text-white/40 group cursor-pointer hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">receipt_long</span>
                    <span className="text-[10px] font-black uppercase tracking-tighter italic">Orders</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-white/40 group cursor-pointer hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">person</span>
                    <span className="text-[10px] font-black uppercase tracking-tighter italic">Profile</span>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
