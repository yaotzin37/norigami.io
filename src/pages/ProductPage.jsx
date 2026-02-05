import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import menu from '../data/menu.json';

const ProductPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const product = menu.find(p => p.id === id);

    if (!product) return <div className="text-white p-10">Producto no encontrado</div>;

    const { name, price, description, image } = product;
    // Use fallback image if empty
    const displayImage = image || "https://lh3.googleusercontent.com/aida-public/AB6AXuD_B0CTrquWMJP-4qbRZqkn_n6zI0FoYFhbb4xVjI2JS84I6vG1wfz03dKvUTHn64US75jmEqkxSkHTnMZaJ_PzwVkyccYbTtUSmgHzSDLreMK6FQy-88Wb5BwXyEYL9Nbuh231rFakqrFrOJeemgyYbl5i1HIXeQOzBDUb65PuAVLy6GgQ-7LJbnZUE-P16OOJH6idQN7ce10IOCuUXYMppEliggf3u3Oz9DmA-1QSCk5M644VclH60Z5CDfrQcX6icUlGvmUUziY";


    return (
        <div className="max-w-md mx-auto bg-background-dark text-white min-h-screen pb-40">
            <div className="fixed top-0 left-0 right-0 z-50 glass-header flex items-center justify-between p-4 px-6 border-b border-white/5 max-w-md mx-auto">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full bg-white/10 text-white">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Norigami</span>
                    <span className="text-xs font-medium opacity-60">Sushi & Barra</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center size-10 rounded-full bg-white/10 text-white">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                </div>
            </div>

            <div className="relative w-full h-[450px]">
                <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_B0CTrquWMJP-4qbRZqkn_n6zI0FoYFhbb4xVjI2JS84I6vG1wfz03dKvUTHn64US75jmEqkxSkHTnMZaJ_PzwVkyccYbTtUSmgHzSDLreMK6FQy-88Wb5BwXyEYL9Nbuh231rFakqrFrOJeemgyYbl5i1HIXeQOzBDUb65PuAVLy6GgQ-7LJbnZUE-P16OOJH6idQN7ce10IOCuUXYMppEliggf3u3Oz9DmA-1QSCk5M644VclH60Z5CDfrQcX6icUlGvmUUziY")' }}></div>
                <div className="absolute inset-0 barra-gradient"></div>
                <div className="absolute bottom-20 left-6 opacity-20 scale-75 origin-left">
                    <div className="text-3xl font-black italic tracking-tighter">NORIGAMI</div>
                </div>
            </div>

            <div className="relative -mt-16 px-6 space-y-8">
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded italic uppercase">FUSION SPECIAL</span>
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight leading-none uppercase italic">Ahumado<br />Tuna Roll</h1>
                        </div>
                        <div className="text-right">
                            <span className="text-primary text-3xl font-black tracking-tighter italic">$12.50</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center bg-white/5 px-2 py-1 rounded-full">
                            <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                            <span className="text-sm font-bold ml-1">4.9</span>
                        </div>
                        <span className="text-xs opacity-50 font-medium">Popular barra choice</span>
                    </div>
                    <p className="text-slate-300 text-lg leading-snug font-medium italic">
                        Smoked wild-caught tuna, avocado, and cream cheese, topped with crispy onions and our signature Mexican chipotle-ponzu glaze.
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary border-l-4 border-primary pl-3">Customize it</h3>
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg italic uppercase">Chipotle Heat</span>
                            <span className="text-[10px] font-bold text-primary border border-primary px-2 py-0.5 rounded">OBLIGATORIO</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex-1 py-4 rounded-xl border-2 border-white/10 text-xs font-black uppercase tracking-widest hover:border-primary/50 transition-colors">Low</button>
                            <button className="flex-1 py-4 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(242,13,13,0.4)]">Regular</button>
                            <button className="flex-1 py-4 rounded-xl border-2 border-white/10 text-xs font-black uppercase tracking-widest hover:border-primary/50 transition-colors">Extra</button>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-5">
                        <div className="flex items-center justify-between group cursor-pointer">
                            <label className="flex items-center gap-4 cursor-pointer">
                                <div className="relative flex items-center">
                                    <input className="peer appearance-none w-6 h-6 rounded border-2 border-white/20 bg-transparent checked:bg-primary checked:border-primary focus:ring-0 transition-all" type="checkbox" />
                                    <span className="material-symbols-outlined absolute text-white text-sm opacity-0 peer-checked:opacity-100 left-1 pointer-events-none">check</span>
                                </div>
                                <span className="text-base font-bold uppercase italic">Sin Cebolla</span>
                            </label>
                            <span className="text-xs opacity-40">FREE</span>
                        </div>
                        <div className="w-full h-px bg-white/5"></div>
                        <div className="flex items-center justify-between group cursor-pointer">
                            <label className="flex items-center gap-4 cursor-pointer">
                                <div className="relative flex items-center">
                                    <input defaultChecked className="peer appearance-none w-6 h-6 rounded border-2 border-white/20 bg-transparent checked:bg-primary checked:border-primary focus:ring-0 transition-all" type="checkbox" />
                                    <span className="material-symbols-outlined absolute text-white text-sm opacity-0 peer-checked:opacity-100 left-1 pointer-events-none">check</span>
                                </div>
                                <span className="text-base font-bold uppercase italic">Extra Aguacate</span>
                            </label>
                            <span className="text-xs font-bold text-primary">+$1.50</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <span className="material-symbols-outlined text-primary mb-2 block">nutrition</span>
                        <span className="text-[10px] font-black uppercase tracking-tighter opacity-40 block">Calories</span>
                        <span className="text-lg font-bold italic">240 kcal</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <span className="material-symbols-outlined text-primary mb-2 block">warning</span>
                        <span className="text-[10px] font-black uppercase tracking-tighter opacity-40 block">Allergens</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                            <span className="text-[8px] font-black bg-white/10 px-1.5 py-0.5 rounded uppercase">Fish</span>
                            <span className="text-[8px] font-black bg-white/10 px-1.5 py-0.5 rounded uppercase">Dairy</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-[60] glass-header border-t border-white/10 pb-2 max-w-md mx-auto">
                <div className="p-6 pt-4 flex items-center gap-4">
                    <div className="flex items-center bg-white/10 rounded-2xl p-1 border border-white/10">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="size-11 flex items-center justify-center rounded-xl bg-primary/20 text-primary">
                            <span className="material-symbols-outlined font-bold">remove</span>
                        </button>
                        <span className="w-10 text-center font-black text-xl italic">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="size-11 flex items-center justify-center rounded-xl bg-primary text-white shadow-[0_0_10px_rgba(242,13,13,0.3)]">
                            <span className="material-symbols-outlined font-bold">add</span>
                        </button>
                    </div>
                    <button className="flex-1 bg-primary text-white h-14 rounded-2xl font-black uppercase italic tracking-tighter flex items-center justify-between px-6 shadow-[0_4px_20px_rgba(242,13,13,0.4)] active:scale-95 transition-transform">
                        <span>Add To Order</span>
                        <span className="text-lg">${(price * quantity).toFixed(2)}</span>
                    </button>
                </div>
                <div className="flex justify-around items-center px-4 py-2 border-t border-white/5">
                    <Link to="/" className="flex flex-col items-center gap-1 opacity-40">
                        <span className="material-symbols-outlined text-xl">home</span>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
                    </Link>
                    <Link to="/category/fusion" className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-xl fill-1">restaurant_menu</span>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Menu</span>
                    </Link>
                    <button className="flex flex-col items-center gap-1 opacity-40">
                        <span className="material-symbols-outlined text-xl">receipt_long</span>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Orders</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 opacity-40">
                        <span className="material-symbols-outlined text-xl">person</span>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
