import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl overflow-x-hidden pb-32">
            <div className="flex items-center bg-black/80 backdrop-blur-md sticky top-0 z-50 p-4 pb-2 justify-between border-b border-white/5">
                <div className="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
                    <span className="material-symbols-outlined text-3xl">menu</span>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="flex flex-col items-center">
                        <span className="text-white text-xl font-extrabold tracking-tighter italic font-display">NORIGAMI</span>
                        <span className="text-[8px] uppercase tracking-[0.3em] text-primary font-bold -mt-1">Sushi & Barra</span>
                    </div>
                </div>
                <div className="flex w-12 items-center justify-end">
                    <button className="flex cursor-pointer items-center justify-center rounded-xl h-12 bg-transparent text-white">
                        <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                    </button>
                </div>
            </div>

            <div className="px-4 py-4">
                <label className="flex flex-col min-w-40 h-12 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-white/10 border border-white/10">
                        <div className="text-primary flex items-center justify-center pl-4">
                            <span className="material-symbols-outlined text-[24px]">search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-white/40 px-4 pl-2 text-base font-normal" placeholder="Search fusion flavors..." />
                    </div>
                </label>
            </div>

            <div className="px-4 py-2">
                <div
                    onClick={() => navigate('/product/mexican-samurai')}
                    className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-2xl min-h-[380px] relative border border-white/10 shadow-2xl cursor-pointer"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3u8I7aaPIZBrhBdF6KqAAIvQRiUNGQrem2ehVw5-PHen9HNZHKDA6TA9C90627KNTOcbrBATB5UPXWOjJ2ZOiZ7dKFprkkL6UJruC9KRPtDIWWX8G_rg1FDzjVDbWMz1K2_7ANpCVb6S--bW_4wnYQpN4MnZAxW-oPBxKUekvVLlq7dLbQ7ZApVmgumRJWRqW4i4lvT5xV7wSGABeem0EUDrFmyJyaVx14tY7S8GvfGbBkkyU62o87TAsFmy2ok7aGVIpzaRaAjY")' }}
                >
                    <div className="absolute inset-0 hero-gradient"></div>
                    <div className="flex flex-col p-6 gap-2 relative z-10">
                        <div className="flex gap-2">
                            <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full w-fit uppercase tracking-widest italic">Fusion Special</span>
                        </div>
                        <h1 className="text-white rustic-shadow tracking-tighter text-[40px] font-black leading-none uppercase italic">
                            Mexican <br /><span className="text-primary">Samurai</span>
                        </h1>
                        <p className="text-white/80 text-sm font-medium italic">Spicy Tuna, Avocado, and a touch of Habanero-Yuzu.</p>
                        <button className="mt-4 bg-primary text-white font-black py-4 px-8 rounded-full w-fit flex items-center gap-2 hover:scale-105 transition-transform uppercase italic tracking-wider text-sm">
                            Order Now <span className="material-symbols-outlined text-base">local_fire_department</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between px-4 pt-8 pb-3">
                <h3 className="text-white text-lg font-black leading-tight uppercase tracking-tighter italic font-display">Categorías</h3>
                <span className="text-primary text-xs font-black uppercase tracking-widest cursor-pointer">Ver todo</span>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4">
                {[
                    { name: 'Handrolls', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtd8rB3-DGwMsyTmbSobwGpnt6Qyula8ntZDbj_Yjt6Ue93LCiCvZJH5XOdxBp-y65UIxVK9n7jmA594VaME8cWyBFeuVi-dA5RG8tAFb1Qce6gQNFh2otPY0t4Y_wnEDRBb3gEXLL6uJeo7f94_DYif3-fYk962Vlttlw7bTRc8LEjFW1xnZ9cne_mxm90ohm-qpwOxdAZima8lvXP2k94RCuwsI-RtCPaPy81XuLcJ1GlVIOijdNy1WE7Xp-I0LO-I_WjOHe-2s' },
                    { name: 'Sashimi', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwvlhdZE6zEVHc9XRj-Gw7kQBk6HpScqFGjRlK13TjPv0vWnXMikKUWqjBIICt3xtYW0Yt0X49DJS7qV-7_wwISACs_SJkQ0vi-5rm_KzkhWEKQhEYLJnB2qINUNKJp7UzK-2j09EjDIpQ9wg-wodpZaRFF4KL9TsvCUzLaZ9zupajNnqTgtqw8QCMehkqYrlK0HrCk1BfB-8cBXl9t7OrEqWxfYdkqIyxfHUlDLp8UVeCq5idU9m8kzYYQTZrUo3_ERPw9tlMcO4' },
                    { name: 'Antojitos', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2q4y8k2pRDOsKdfrGi0BnxBntxbee2MIY90cXeSJO5ULiE8sc0fOO-kCJ8GteJT4Yj1PQDDqLQlf_23RkmjTJ05O99FB4jFsF9K57Fyh51DNkecTtym3SlVJ7FxKQC54EJdfljTOmB--bBVVU1OucTzMqT8rCHQV4kmdLq1gShqtxKpqJyPzykxqYF6PadF6Sd2NiQR2i9TmNExau2kijAeY4ZLmu1hqrPsuOVagmWyv7mCGMzmc86DV7ZgDmvN2yOAsHi7vqNIQ' },
                    { name: 'Bebidas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFS9t-rLQcYmC1C2hJr7HXvRzaujBiOKozcang8eeQ1uvSsteKzdbnisv91ecS3uo6VyGZmPG8-b9iGu5GJdl2WLPLYL3r5r36PedjeanqSp0MkBS5qhIVzkJ7LEvCN_LrfZCdzwvaPGmSHvVbzWVXAdcw04T7IN__DAOA7VNQTFAVoaY2IGcDl4uQPnm8m9t41R0WPtSIGEkJTyQMEIoZGVNHPmnM1IW0Pu7Di5dzk32zIExWw02PTBd-zcbm16lqO3M_y5hexow' }
                ].map((cat) => (
                    <Link key={cat.name} to="/category/fusion" className="bg-cover bg-center flex flex-col items-center rounded-xl justify-end p-4 aspect-[4/5] border border-white/10 relative overflow-hidden group active:scale-95 transition-transform" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 50%), url("${cat.img}")` }}>
                        <p className="text-white text-base font-black uppercase italic tracking-tighter z-10">{cat.name}</p>
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                    </Link>
                ))}
            </div>

            <div className="px-4 py-8">
                <div className="rounded-2xl bg-white/5 p-8 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="material-symbols-outlined text-6xl">restaurant</span>
                    </div>
                    <h4 className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-4 italic">El Concepto</h4>
                    <h3 className="text-white text-2xl font-black mb-4 font-display italic uppercase leading-none">
                        Cocina <span className="text-primary">Japonesa</span> <br />y <span className="text-primary">Mexicana!</span>
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm font-medium">
                        At Norigami, we fuse the precision of Japanese sushi with the bold, rustic flavors of Mexico. Experience a unique culinary bridge that celebrates both cultures in every bite.
                    </p>
                    <div className="mt-8 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Ubicación</span>
                            <span className="text-xs font-bold text-white uppercase italic">Sushi & Barra</span>
                        </div>
                        <div className="h-8 w-[1px] bg-white/10"></div>
                        <div className="flex flex-col text-right">
                            <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Horario</span>
                            <span className="text-xs font-bold text-white uppercase italic">1:00 PM - 12:00 AM</span>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav activeTab="home" />
        </div>
    );
};

export default HomePage;
