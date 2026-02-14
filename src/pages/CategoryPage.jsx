import { Link, useNavigate, useParams } from 'react-router-dom';
import menu from '../data/menu.json';
import { slugify } from '../utils/slugify';

const CategoryPage = () => {
    const navigate = useNavigate();
    const { categoryId } = useParams();

    // Filter products based on the slug
    const products = menu.filter(p => slugify(p.category) === categoryId);

    // Get the display name for the category from the first found product, or fallback to the slug
    const categoryName = products.length > 0 ? products[0].category : categoryId.replace(/-/g, ' ');

    return (
        <div className="max-w-md mx-auto min-h-screen bg-background-dark text-white pb-48">
            <nav className="sticky top-0 z-50 bg-background-dark/90 backdrop-blur-xl border-b border-white/10">
                <div className="flex items-center p-4 justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full bg-white/5 active:bg-white/20 transition-colors">
                            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
                        </button>
                        <h1 className="text-xl font-heading fusion-text tracking-tighter italic capitalize">{categoryName}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="flex size-10 items-center justify-center rounded-full bg-white/5 active:bg-white/20 transition-colors">
                            <span className="material-symbols-outlined text-2xl text-primary">local_fire_department</span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="px-6 py-8 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-10 rotate-12">
                    <span className="material-symbols-outlined text-9xl">restaurant</span>
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary px-2 py-0.5 text-[10px] font-heading fusion-text">JAPONESA</span>
                        <span className="text-xs font-bold italic">y</span>
                        <span className="bg-white text-black px-2 py-0.5 text-[10px] font-heading fusion-text">MEXICANA!</span>
                    </div>
                    <h2 className="text-4xl font-heading fusion-text italic leading-none mb-3">Sabor <span className="text-primary italic">Explosivo</span></h2>
                    <p className="text-slate-400 text-sm font-medium max-w-[280px]">
                        The ultimate fusion of traditional Japanese technique with vibrant Mexican ingredients.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 px-4">
                {products.length === 0 ? (
                    <div className="text-center text-white/50 py-10">
                        <p>No products found in this category.</p>
                    </div>
                ) : (
                    products.map(p => (
                        <div key={p.id} onClick={() => navigate(`/product/${p.id}`)} className="group bg-neutral-900/50 rounded-2xl overflow-hidden border border-white/5 active:border-primary/50 transition-all cursor-pointer">
                            <div className="flex">
                                <div className="relative shrink-0 w-32 h-40">
                                    <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url("${p.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3u8I7aaPIZBrhBdF6KqAAIvQRiUNGQrem2ehVw5-PHen9HNZHKDA6TA9C90627KNTOcbrBATB5UPXWOjJ2ZOiZ7dKFprkkL6UJruC9KRPtDIWWX8G_rg1FDzjVDbWMz1K2_7ANpCVb6S--bW_4wnYQpN4MnZAxW-oPBxKUekvVLlq7dLbQ7ZApVmgumRJWRqW4i4lvT5xV7wSGABeem0EUDrFmyJyaVx14tY7S8GvfGbBkkyU62o87TAsFmy2ok7aGVIpzaRaAjY'}")` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/50"></div>
                                </div>
                                <div className="flex flex-1 flex-col justify-between p-4">
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-lg font-heading fusion-text italic">{p.name}</h3>
                                            <span className="text-primary font-heading italic">${p.price}</span>
                                        </div>
                                        <p className="text-slate-400 text-xs font-medium uppercase tracking-tight leading-tight line-clamp-3">
                                            {p.description}
                                        </p>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary text-white text-xs font-heading fusion-text active:scale-95 transition-all shadow-[0_4px_20px_0_rgba(242,13,13,0.4)]">
                                            <span>Add to Order</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-md border-t border-white/5">
                <div className="px-4 py-3 border-b border-white/5">
                    <div className="max-w-md mx-auto">
                        <button className="flex w-full items-center justify-between bg-primary text-white px-6 py-3 rounded-xl shadow-[0_-8px_25px_-5px_rgba(242,13,13,0.4)] active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 flex items-center justify-center rounded-lg h-7 w-7 text-xs font-heading">2</div>
                                <span className="text-sm font-heading fusion-text italic">View Order</span>
                            </div>
                            <span className="text-sm font-heading fusion-text italic">$29.00</span>
                        </button>
                    </div>
                </div>
                <div className="max-w-md mx-auto flex justify-around items-center py-2 px-6 pb-6">
                    <Link to="/" className="flex flex-col items-center gap-1 text-slate-500">
                        <span className="material-symbols-outlined text-2xl">home</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
                    </Link>
                    <Link to="/category/sushi-clasico" className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-2xl fill-1">restaurant_menu</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Menu</span>
                    </Link>
                    <button className="flex flex-col items-center gap-1 text-slate-500">
                        <span className="material-symbols-outlined text-2xl">receipt_long</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Orders</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-slate-500">
                        <span className="material-symbols-outlined text-2xl">person</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default CategoryPage;
