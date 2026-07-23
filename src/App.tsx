import React, { useState } from 'react';
import { 
  Crown, 
  Calculator, 
  Workflow, 
  Users, 
  Package, 
  TrendingUp, 
  Settings2,
  CheckCircle2,
  ArrowRight,
  Target,
  Megaphone,
  Truck,
  Wallet,
  Plus,
  X,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

// --- DATA KATALOG ABSH ---
const ABSH_CATALOG = [
  { id: 'lelabu', name: 'Botol Lelabu, Casa', prices: { '2 Dus': 6300, '10 Dus': 6000, '100 Dus': 5500, '1000 Dus': 5000 } },
  { id: 'hermes_inocu', name: 'Hermes, Inocu, Jo Malone, Byredo', prices: { '2 Dus': 6500, '10 Dus': 6000, '100 Dus': 5800, '1000 Dus': 5500 } },
  { id: 'channel_ori', name: 'Channel Ori, Hermes Cup, Pro Player', prices: { '2 Dus': 7000, '10 Dus': 6700, '100 Dus': 6200, '1000 Dus': 6000 } },
  { id: 'twilly_chloe', name: 'Twilly, Chloe, Lacoste, Channel Hitam', prices: { '2 Dus': 7500, '10 Dus': 7200, '100 Dus': 6800, '1000 Dus': 6500 } },
  { id: 'hertic', name: 'Botol Hertic', prices: { '2 Dus': 8000, '10 Dus': 7500, '100 Dus': 7200, '1000 Dus': 7000 } },
  { id: 'laliq', name: 'Laliq Square, Diptiq, Zara', prices: { '2 Dus': 9500, '10 Dus': 9000, '100 Dus': 8500, '1000 Dus': 8000 } },
  { id: 'hermes_pendora', name: 'Hermes Pendora, Tomford Merah', prices: { '2 Dus': 10000, '10 Dus': 9500, '100 Dus': 9000, '1000 Dus': 8500 } },
];

const TIER_OPTIONS = ['2 Dus', '10 Dus', '100 Dus', '1000 Dus'];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  if (!isAuthenticated) {
    return <OfflineScreen onAuth={() => setIsAuthenticated(true)} />;
  }


  const tabs = [
    { id: 0, label: 'Brand & Visi', icon: Crown },
    { id: 1, label: 'Alur Bisnis', icon: Workflow },
    { id: 2, label: 'Initial Capital', icon: Wallet },
    { id: 3, label: 'Unit Economics', icon: Calculator },
    { id: 4, label: 'Struktur Tim', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-lime-400/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-serif font-bold tracking-tight text-white flex items-center gap-2">
                ELYON <span className="text-lime-400 text-lg">✦</span>
              </h1>
              <p className="text-[10px] text-zinc-400 tracking-[0.2em] uppercase mt-1 font-mono">
                Premium Vibe, Accessible Price
              </p>
            </div>
            
            <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2 md:pb-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                      isActive 
                      ? 'bg-lime-400/10 text-lime-400 border border-lime-400/30' 
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          {activeTab === 0 && <TabBrand />}
          {activeTab === 1 && <TabFlowchart />}
          {activeTab === 2 && <TabInitialCapital />}
          {activeTab === 3 && <TabFinancial />}
          {activeTab === 4 && <TabTeam />}
        </div>
      </main>
    </div>
  );
}

// --- TAB 1: BRAND & VISI ---
function TabBrand() {
  return (
    <div className="space-y-10">
      <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">
            Mendefinisikan Ulang Parfum Gen-Z
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            ELYON mengisi kekosongan strategis di pasar wewangian Indonesia. Kami memberikan kualitas aroma premium dan kemasan estetis yang didanai melalui sistem <strong className="text-lime-400">Pre-Order (PO) & Lean Startup</strong> untuk menekan risiko inventaris hingga 0%.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-lg flex items-center gap-2">
              <Package size={16} className="text-lime-400" />
              <span className="text-sm font-mono text-zinc-300">Custom Bottle 50ml</span>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-lg flex items-center gap-2">
              <Target size={16} className="text-lime-400" />
              <span className="text-sm font-mono text-zinc-300">Zero Inventory Risk</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
          MVP Line-Up (Fase 1)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard 
            title="ELYON Noir" 
            desc="Woody Aromatic. Maskulin, misterius, berwibawa."
            visual="Botol Kotak Black Matte (Doff) + Laser Engrave."
            accent="bg-gradient-to-t from-lime-400/20 to-zinc-900 border-lime-400/30"
            titleColor="text-lime-400"
          />
          <ProductCard 
            title="ELYON Blanc" 
            desc="Fresh & Clean. Modern, energetic, pendamping harian."
            visual="Botol White Matte (Doff) + Print Holographic."
            accent="bg-gradient-to-t from-cyan-400/20 to-zinc-200 border-cyan-400/30"
            titleColor="text-cyan-900"
            isLight
          />
          <ProductCard 
            title="ELYS Rose" 
            desc="Floral Fruity. Feminin, sweet, playful."
            visual="Botol Pink Matte (Doff) + Sablon Putih Solid."
            accent="bg-gradient-to-t from-pink-500/20 to-rose-900/50 border-pink-500/30"
            titleColor="text-pink-400"
          />
        </div>
      </div>
    </div>
  );
}

function ProductCard({ title, desc, visual, accent, titleColor = "text-white", isLight = false }: any) {
  return (
    <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-lime-400/50 transition-colors`}>
      <div className={`h-32 w-full ${accent} flex items-end p-5 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className={`text-2xl font-serif font-bold relative z-10 ${titleColor}`}>{title}</h3>
      </div>
      <div className="p-6">
        <p className="font-medium mb-4 text-zinc-300">{desc}</p>
        <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800/50">
          <span className="block text-[10px] uppercase text-zinc-500 mb-1 font-mono">Visual Target</span>
          <p className="text-sm text-zinc-400">{visual}</p>
        </div>
      </div>
    </div>
  );
}

// --- TAB 2: ALUR BISNIS ---
function TabFlowchart() {
  const steps = [
    {
      icon: Settings2,
      title: "Fase 0: Inisiasi & Setup",
      desc: "ELY menyiapkan modal awal Rp 20.000.000. HANIF mengeksekusi desain brand, logo, visual botol, dan setup ekosistem digital (Web, CRM, Ads).",
      color: "text-zinc-400"
    },
    {
      icon: Package,
      title: "Fase 1: Sourcing & R&D",
      desc: "Order sampel botol + wangi dari pabrik ABSH. Melakukan 'Blind Scent Test' ke target market. Fiksasi vendor botol custom & cetak PR Kit untuk Influencer.",
      color: "text-lime-400"
    },
    {
      icon: Megaphone,
      title: "Fase 2: Marketing & Hype",
      desc: "Bakar budget iklan digital (Meta/TikTok Ads). Kirim PR Kit & Giveaway. Tujuannya membangun audiens dan demand sebelum produk diproduksi massal.",
      color: "text-rose-400"
    },
    {
      icon: Target,
      title: "Fase 3: Keran PO Dibuka",
      desc: "Buka Pre-Order (PO) selama 14 hari via OrderOnline.id. Harga Promo Early Bird. Uang dari konsumen masuk dan dikumpulkan untuk modal produksi.",
      color: "text-blue-400"
    },
    {
      icon: Workflow,
      title: "Fase 4: Produksi Pabrik",
      desc: "Pembayaran HPP dilunasi ke ABSH. Proses maklon (Filling cairan, pemasangan botol) berjalan. Estimasi waktu edukasi ke konsumen: 21 hari kerja.",
      color: "text-purple-400"
    },
    {
      icon: Truck,
      title: "Fase 5: Fulfillment & UGC",
      desc: "QC ketat & packing 3 lapis. Pengiriman barang. Konsumen ditawarkan Cashback Rp 20rb jika membuat video unboxing di sosmed (UGC Viral Loop).",
      color: "text-cyan-400"
    },
    {
      icon: Wallet,
      title: "Fase 6: Distribusi Profit",
      desc: "Rekapitulasi keuangan operasional (OPEX). Laba bersih dibagikan sesuai porsi saham: ELY (50%), HANIF (25%), dan Kas Perusahaan (25%).",
      color: "text-emerald-400"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-white mb-4">Mekanisme Bisnis End-to-End</h2>
        <p className="text-zinc-400">Arsitektur operasional dari nol hingga pembagian profit.</p>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-8 space-y-12 pb-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              <div className="absolute w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-full -left-5 top-0 flex items-center justify-center group-hover:border-lime-400 transition-colors z-10">
                <Icon size={18} className={step.color} />
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-all">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TabInitialCapital() {
  const [initialCapital, setInitialCapital] = useState(20000000);

  // Legalitas & Setup
  const [useLegalitas, setUseLegalitas] = useState(false); // Default to off as per user request
  const [legalHaki, setLegalHaki] = useState(2000000);
  const [legalBpomPerusahaan, setLegalBpomPerusahaan] = useState(1000000);
  const [bpomVarianCount, setBpomVarianCount] = useState(3);
  const [legalBpomPerVarian, setLegalBpomPerVarian] = useState(1000000);

  // R&D & Marketing Awal
  const [opsInitial, setOpsInitial] = useState(1500000); // Operasional, bensin, meeting, desain
  const [samplingProduct, setSamplingProduct] = useState(2500000); // Beli sampel, tester, botol
  const [marketingInitial, setMarketingInitial] = useState(3000000); // PR Kit awal, Ads testing (Bakar Uang pertama)

  // Dynamic Custom CapEx
  const [customCapex, setCustomCapex] = useState<{ id: number; name: string; amount: number }[]>([
    { id: 1, name: 'Pembuatan Website', amount: 1500000 },
    { id: 2, name: 'Cetak Akrilik Display', amount: 500000 },
  ]);

  const handleAddCustomCapex = () => {
    setCustomCapex([...customCapex, { id: Date.now(), name: 'Item Baru', amount: 0 }]);
  };

  const handleRemoveCustomCapex = (id: number) => {
    setCustomCapex(customCapex.filter(item => item.id !== id));
  };

  const handleUpdateCustomCapexName = (id: number, name: string) => {
    setCustomCapex(customCapex.map(item => item.id === id ? { ...item, name } : item));
  };

  const handleUpdateCustomCapexAmount = (id: number, amount: number) => {
    setCustomCapex(customCapex.map(item => item.id === id ? { ...item, amount } : item));
  };

  const totalLegalitas = useLegalitas ? (legalHaki + legalBpomPerusahaan + (bpomVarianCount * legalBpomPerVarian)) : 0;
  const totalCustomCapex = customCapex.reduce((sum, item) => sum + item.amount, 0);
  const totalRndMarketing = opsInitial + samplingProduct + marketingInitial + totalCustomCapex;
  const totalCapEx = totalLegalitas + totalRndMarketing;
  
  const remainingCapital = initialCapital - totalCapEx;

  const formatRp = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Control Panel */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Wallet className="text-emerald-400" /> Modal Awal (Initial Capital)
          </h3>
          <div className="space-y-4">
            <InputRow label="Total Uang Kas Masuk" value={initialCapital} onChange={setInitialCapital} step={1000000} />
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Target className="text-purple-400" /> Biaya Legalitas & Setup
            </h3>
            <button 
              onClick={() => setUseLegalitas(!useLegalitas)}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {useLegalitas ? <ToggleRight className="text-purple-400" /> : <ToggleLeft />}
              {useLegalitas ? 'Aktif' : 'Nonaktif'}
            </button>
          </div>
          
          {!useLegalitas && (
            <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-800 text-sm text-zinc-400 mb-4">
              Biaya legalitas tidak dihitung (Misal: menggunakan legalitas pabrik).
            </div>
          )}

          <div className={`space-y-4 transition-opacity duration-300 ${!useLegalitas ? 'opacity-30 pointer-events-none' : ''}`}>
            <InputRow label="LHKN / Daftar Brand" value={legalHaki} onChange={setLegalHaki} step={500000} />
            <InputRow label="Izin BPOM Perusahaan" value={legalBpomPerusahaan} onChange={setLegalBpomPerusahaan} step={500000} />
            <div className="flex gap-2">
              <div className="flex-1">
                <InputRow label={`BPOM / Varian (${bpomVarianCount}x)`} value={legalBpomPerVarian} onChange={setLegalBpomPerVarian} step={500000} />
              </div>
            </div>
            <div className="flex justify-between items-center text-xs mt-2">
              <label className="text-zinc-500">Jumlah Varian BPOM</label>
              <input type="number" min="1" max="10" value={bpomVarianCount} onChange={(e) => setBpomVarianCount(Number(e.target.value))} className="w-16 bg-zinc-950 border border-zinc-800 rounded-md p-1 text-white text-center font-mono focus:border-purple-400 outline-none" />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="text-rose-400" /> R&D dan Marketing Awal
          </h3>
          <div className="space-y-4">
            <InputRow label="Operasional & Desain Awal" value={opsInitial} onChange={setOpsInitial} step={500000} />
            <InputRow label="Produk Sampel & Tester" value={samplingProduct} onChange={setSamplingProduct} step={500000} />
            <InputRow label="Marketing / Ads Testing" value={marketingInitial} onChange={setMarketingInitial} step={500000} />
            
            <hr className="border-zinc-800 my-4" />
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-zinc-400">Pengeluaran Lainnya (Dynamic)</label>
              <button 
                onClick={handleAddCustomCapex}
                className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-2 py-1 rounded-md flex items-center gap-1 transition-colors"
              >
                <Plus size={14} /> Tambah
              </button>
            </div>
            
            <div className="space-y-3">
              {customCapex.map((item) => (
                <div key={item.id} className="flex flex-col gap-2 p-3 bg-zinc-950 border border-zinc-800 rounded-xl">
                  <div className="flex justify-between items-center gap-2">
                    <input 
                      type="text" 
                      value={item.name}
                      onChange={(e) => handleUpdateCustomCapexName(item.id, e.target.value)}
                      className="flex-1 bg-transparent border-b border-zinc-800 px-1 py-1 text-sm text-white focus:border-rose-400 outline-none"
                      placeholder="Nama Pengeluaran"
                    />
                    <button 
                      onClick={() => handleRemoveCustomCapex(item.id)}
                      className="text-zinc-600 hover:text-rose-400 transition-colors p-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <InputRow 
                    label="Alokasi (Rp)" 
                    value={item.amount} 
                    onChange={(val: number) => handleUpdateCustomCapexAmount(item.id, val)} 
                    step={100000} 
                  />
                </div>
              ))}
              {customCapex.length === 0 && (
                <p className="text-xs text-zinc-600 italic text-center py-2">Tidak ada pengeluaran tambahan.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Output Dashboard */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />
          
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 border-b border-zinc-800 pb-6 gap-4">
            <div>
              <p className="text-sm text-zinc-400 mb-1">Total Modal Disetor</p>
              <p className="text-2xl font-bold text-white">{formatRp(initialCapital)}</p>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-zinc-400 mb-1">Total Pengeluaran Awal (CapEx)</p>
              <p className="text-lg font-bold text-rose-400">-{formatRp(totalCapEx)}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-zinc-400 mb-2 uppercase tracking-wider font-bold text-emerald-500">Sisa Uang Kas / Buffer</p>
            <p className={`text-5xl font-serif font-bold ${remainingCapital >= 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
              {formatRp(remainingCapital)}
            </p>
            <p className="text-xs font-mono text-zinc-500 mt-2">Buffer ini digunakan sebagai modal putar saat PO berjalan (Bayar HPP/Pabrik, dll).</p>
            {remainingCapital < 0 && <p className="text-rose-400 text-sm mt-2 flex items-center gap-1">⚠️ Modal awal tidak cukup untuk menutupi biaya setup.</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`bg-zinc-900 border border-zinc-800 p-6 rounded-3xl ${!useLegalitas ? 'opacity-50' : ''}`}>
            <p className="text-sm text-zinc-400 mb-2">Legalitas & Izin</p>
            <p className="text-2xl font-bold text-white">{formatRp(totalLegalitas)}</p>
            <p className="text-xs font-mono text-zinc-500 mt-2">{totalCapEx > 0 ? Math.round((totalLegalitas/totalCapEx)*100) : 0}% dari total pengeluaran</p>
            {!useLegalitas && <p className="text-xs text-rose-400 mt-1">Status: Nonaktif</p>}
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
            <p className="text-sm text-zinc-400 mb-2">R&D, Produk & Ads Awal</p>
            <p className="text-2xl font-bold text-white">{formatRp(totalRndMarketing)}</p>
            <p className="text-xs font-mono text-zinc-500 mt-2">{totalCapEx > 0 ? Math.round((totalRndMarketing/totalCapEx)*100) : 0}% dari total pengeluaran</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function TabFinancial() {
  // Mode Selection
  const [hppMode, setHppMode] = useState<'catalog' | 'manual'>('manual');

  // Catalog States
  const [selectedBottle, setSelectedBottle] = useState(ABSH_CATALOG[2]); // Default Channel Ori
  const [selectedTier, setSelectedTier] = useState('100 Dus');
  
  // Custom/Manual States
  const [cairanHpp, setCairanHpp] = useState(25000);
  const [jasaFilling, setJasaFilling] = useState(1500);
  const [botolLuar, setBotolLuar] = useState(7500);
  
  // Shared Extras
  const [customBox, setCustomBox] = useState(6500);
  const [customPrint, setCustomPrint] = useState(5000);
  const [opsLogistik, setOpsLogistik] = useState(2000);
  
  // Marketing CAC
  const [adsCac, setAdsCac] = useState(15000);
  
  const [bottleTarget, setBottleTarget] = useState(500);
  const [sellingPrice, setSellingPrice] = useState(69000);

  // Calculations
  const baseHppAbsh = selectedBottle.prices[selectedTier as keyof typeof selectedBottle.prices] || 0;
  
  // HPP Barang Murni (tanpa marketing CAC)
  const hppBarang = hppMode === 'catalog' 
    ? baseHppAbsh + customBox + customPrint + opsLogistik
    : cairanHpp + jasaFilling + botolLuar + customBox + customPrint + opsLogistik;
  
  const totalHppPerBottle = hppBarang + adsCac;
  
  const totalRevenue = bottleTarget * sellingPrice;
  const totalHppAll = bottleTarget * totalHppPerBottle;
  const totalHppBarangAll = bottleTarget * hppBarang;
  const totalAdsAll = bottleTarget * adsCac;
  const grossProfit = totalRevenue - totalHppBarangAll;
  const netProfit = totalRevenue - totalHppAll;

  const elyShare = netProfit > 0 ? netProfit * 0.50 : 0;
  const hanifShare = netProfit > 0 ? netProfit * 0.25 : 0;
  const kasShare = netProfit > 0 ? netProfit * 0.25 : 0;

  const formatRp = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  const getQualityBadge = (price: number) => {
    // Estimasi harga cairan murni untuk 50ml berdasarkan patokan pabrik 35ml
    if (price < 15000) return { label: 'Standard (2-3 Jam)', color: 'text-zinc-400', bg: 'bg-zinc-800' };
    if (price < 25000) return { label: 'Medium (4 Jam++)', color: 'text-cyan-400', bg: 'bg-cyan-400/10' };
    if (price < 35000) return { label: 'Grade A (6 Jam++)', color: 'text-lime-400', bg: 'bg-lime-400/10' };
    return { label: 'Premium Extrait (>8 Jam)', color: 'text-purple-400', bg: 'bg-purple-400/10' };
  };

  const quality = getQualityBadge(cairanHpp);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* LEFT COLUMN: Control Panel */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Settings2 className="text-lime-400" /> Parameter HPP
            </h3>
            
            {/* Toggle Mode */}
            <div className="flex bg-zinc-950 rounded-lg p-1 border border-zinc-800">
              <button 
                onClick={() => setHppMode('manual')}
                className={`flex-1 px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${hppMode === 'manual' ? 'bg-zinc-800 text-lime-400' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Custom & Jasa
              </button>
              <button 
                onClick={() => setHppMode('catalog')}
                className={`flex-1 px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${hppMode === 'catalog' ? 'bg-zinc-800 text-lime-400' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Katalog Pabrik
              </button>
            </div>
          </div>
          
          <div className="space-y-5">
            {hppMode === 'catalog' ? (
              /* Pabrik ABSH Selection */
              <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Maklon Full Pabrik ABSH</span>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1.5">Jenis Botol (35ml Maklon)</label>
                  <select 
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-sm text-white focus:border-lime-400 outline-none"
                    value={selectedBottle.id}
                    onChange={(e) => setSelectedBottle(ABSH_CATALOG.find(b => b.id === e.target.value) || ABSH_CATALOG[0])}
                  >
                    {ABSH_CATALOG.map(b => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1.5">Tier Pemesanan</label>
                  <select 
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-sm text-white focus:border-lime-400 outline-none"
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                  >
                    {TIER_OPTIONS.map(t => (
                      <option key={t} value={t}>{t} (Harga: {formatRp(selectedBottle.prices[t as keyof typeof selectedBottle.prices])}/pcs)</option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              /* Manual Input / Jasa Selection */
              <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Racikan Custom (Bawa Botol Sendiri)</span>
                </div>
                
                <div>
                  <InputRow label="Biaya Cairan / Resep (Rp)" value={cairanHpp} onChange={setCairanHpp} step={1000} />
                  <div className="mt-2 flex items-center justify-between">
                     <div className="text-[10px] text-zinc-500 leading-tight pr-4">
                       *Ref 35ml Pabrik (Full): 2jam (15k), 4jam (20k), 6jam (25k).
                     </div>
                     <span className={`text-[10px] font-mono px-2 py-1 rounded-full border border-current whitespace-nowrap ${quality.color} ${quality.bg}`}>
                        AI Prediksi: {quality.label}
                     </span>
                  </div>
                </div>

                <hr className="border-zinc-800 my-2" />
                <InputRow label="Jasa Filling & Wrap Pabrik" value={jasaFilling} onChange={setJasaFilling} step={500} />
                <InputRow label="Harga Botol Kosong Luar" value={botolLuar} onChange={setBotolLuar} step={500} />
              </div>
            )}

            {/* Custom Extras */}
            <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-4">
              <span className="text-xs font-mono text-zinc-500 uppercase">Biaya Eksternal (Rp)</span>
              <InputRow label="Hardbox & Packaging" value={customBox} onChange={setCustomBox} step={500} />
              <InputRow label="Cetak Doff / Laser" value={customPrint} onChange={setCustomPrint} step={500} />
              <InputRow label="Logistik & Bubble Wrap" value={opsLogistik} onChange={setOpsLogistik} step={500} />
            </div>

            <div className="p-4 bg-lime-400/10 rounded-2xl border border-lime-400/30 space-y-4">
              <span className="text-xs font-mono text-lime-400 font-bold uppercase">Customer Acquisition Cost (CAC)</span>
              <InputRow label="Budget Iklan per Botol" value={adsCac} onChange={setAdsCac} step={1000} />
            </div>
            
            <div className="flex justify-between items-center p-4 bg-lime-400/10 border border-lime-400/30 rounded-xl">
              <span className="font-bold text-lime-400">Total HPP / Botol</span>
              <span className="font-bold text-xl text-white">{formatRp(totalHppPerBottle)}</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Target className="text-blue-400" /> Strategi Penjualan
          </h3>
          <div className="space-y-4">
            <InputRow label="Target Penjualan (Botol)" value={bottleTarget} onChange={setBottleTarget} step={50} />
            <InputRow label="Harga Jual (Rp)" value={sellingPrice} onChange={setSellingPrice} step={1000} />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Output Dashboard */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Revenue & Gross */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
            <p className="text-sm text-zinc-400 mb-2">Total Revenue (Omzet)</p>
            <p className="text-3xl font-bold text-white">{formatRp(totalRevenue)}</p>
            <p className="text-xs font-mono text-zinc-500 mt-2">{bottleTarget} botol x {formatRp(sellingPrice)}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
            <p className="text-sm text-zinc-400 mb-2">Total HPP Barang (Tanpa CAC)</p>
            <p className="text-3xl font-bold text-red-400">-{formatRp(totalHppBarangAll)}</p>
            <p className="text-xs font-mono text-zinc-500 mt-2">{bottleTarget} botol x {formatRp(hppBarang)}</p>
          </div>
        </div>

        {/* Laba Kotor & Bersih */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full" />
          
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 border-b border-zinc-800 pb-6 gap-4">
            <div>
              <p className="text-sm text-zinc-400 mb-1">Laba Kotor (Gross Profit)</p>
              <p className="text-2xl font-bold text-white">{formatRp(grossProfit)}</p>
              <p className="text-xs font-mono text-zinc-500 mt-1">Margin Kotor: {Math.round((grossProfit/totalRevenue)*100 || 0)}%</p>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-zinc-400 mb-1">Pengeluaran Marketing (CAC)</p>
              <p className="text-lg font-bold text-rose-400">-{formatRp(totalAdsAll)}</p>
              <p className="text-xs font-mono text-zinc-500 mt-1">Iklan: {bottleTarget} botol x {formatRp(adsCac)}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-zinc-400 mb-2 uppercase tracking-wider font-bold text-emerald-500">Net Profit (Laba Bersih)</p>
            <p className={`text-5xl font-serif font-bold ${netProfit >= 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
              {formatRp(netProfit)}
            </p>
            {netProfit < 0 && <p className="text-rose-400 text-sm mt-2 flex items-center gap-1">⚠️ Bisnis mengalami kerugian pada parameter ini.</p>}
          </div>
        </div>

        {/* Profit Distribution */}
        {netProfit > 0 && (
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
            <h4 className="text-lg font-bold text-white mb-6 border-b border-zinc-800 pb-4">Distribusi Profit</h4>
            <div className="space-y-6">
              
              <div>
                <div className="flex justify-between mb-2 items-center">
                  <div>
                    <span className="font-bold text-lime-400 text-lg">ELY (50%)</span>
                    <p className="text-xs text-zinc-500">Investor & Supply Chain</p>
                  </div>
                  <span className="text-2xl font-bold text-white">{formatRp(elyShare)}</span>
                </div>
                <div className="w-full bg-zinc-950 rounded-full h-3 border border-zinc-800">
                  <div className="bg-lime-400 h-full rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 items-center">
                  <div>
                    <span className="font-bold text-blue-400 text-lg">HANIF (25%)</span>
                    <p className="text-xs text-zinc-500">CMO, COO & Eksekutor</p>
                  </div>
                  <span className="text-2xl font-bold text-white">{formatRp(hanifShare)}</span>
                </div>
                <div className="w-full bg-zinc-950 rounded-full h-3 border border-zinc-800">
                  <div className="bg-blue-400 h-full rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2 items-center">
                  <div>
                    <span className="font-bold text-purple-400 text-lg">KAS PERUSAHAAN (25%)</span>
                    <p className="text-xs text-zinc-500">Buffer & Re-investasi</p>
                  </div>
                  <span className="text-2xl font-bold text-white">{formatRp(kasShare)}</span>
                </div>
                <div className="w-full bg-zinc-950 rounded-full h-3 border border-zinc-800">
                  <div className="bg-purple-400 h-full rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function InputRow({ label, value, onChange }: any) {
  const displayValue = new Intl.NumberFormat('id-ID').format(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const numValue = parseInt(rawValue, 10);
    if (!isNaN(numValue)) {
      onChange(numValue);
    } else {
      onChange(0);
    }
  };

  return (
    <div className="flex justify-between items-center gap-4">
      <label className="text-sm text-zinc-400 flex-1">{label}</label>
      <input 
        type="text" 
        inputMode="numeric"
        value={displayValue}
        onChange={handleChange}
        className="w-1/2 bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-sm text-white text-right focus:border-lime-400 outline-none font-mono"
      />
    </div>
  );
}


// --- TAB 4: STRUKTUR TIM ---
function TabTeam() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-white mb-4">Executive Roles & Equity</h2>
        <p className="text-zinc-400">Pembagian tugas yang jelas untuk operasional yang tajam.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* ELY Card */}
        <div className="bg-zinc-900 border border-lime-400/30 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-bl-full" />
          <div className="inline-block px-3 py-1 bg-lime-400/20 text-lime-400 text-xs font-bold rounded-full mb-4 font-mono">
            50% EQUITY
          </div>
          <h3 className="text-3xl font-serif font-bold text-white mb-1">ELY</h3>
          <p className="text-zinc-400 font-medium mb-6">Investor Utama, CFO & Supply Chain</p>
          
          <ul className="space-y-4">
            <RoleItem icon={Wallet} text="Menyediakan Modal Awal (Rp 20.000.000) untuk operasional dan HPP." />
            <RoleItem icon={Package} text="Sourcing & Negosiasi langsung dengan pabrik maklon (ABSH Jombang)." />
            <RoleItem icon={Truck} text="Membuka jalur B2B (door-opener) untuk konsinyasi di titik luring (Coffee Shop)." />
            <RoleItem icon={Calculator} text="Auditor finansial tertinggi dan pemberi approval untuk budget bulanan." />
          </ul>
        </div>

        {/* HANIF Card */}
        <div className="bg-zinc-900 border border-blue-500/30 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full" />
          <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full mb-4 font-mono">
            25% EQUITY
          </div>
          <h3 className="text-3xl font-serif font-bold text-white mb-1">HANIF</h3>
          <p className="text-zinc-400 font-medium mb-6">CMO, COO & Eksekutor Harian</p>
          
          <ul className="space-y-4">
            <RoleItem icon={Target} text="Otak Strategi Digital & Kreator Identitas Visual (Desain Botol, Logo, Ads)." />
            <RoleItem icon={Settings2} text="Membangun ekosistem kasir digital (OrderOnline) dan automasi CRM WhatsApp." />
            <RoleItem icon={Megaphone} text="Eksekutor periklanan digital (Meta/TikTok Ads) & Strategi UGC Review." />
            <RoleItem icon={Users} text="Customer Service & Manajemen pemenuhan pesanan (Fulfillment/Packing)." />
          </ul>
        </div>

      </div>
    </div>
  );
}

function RoleItem({ icon: Icon, text }: any) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 p-1.5 bg-zinc-950 rounded-lg border border-zinc-800">
        <Icon size={16} className="text-zinc-400" />
      </div>
      <p className="text-sm text-zinc-300 leading-relaxed">{text}</p>
    </li>
  );
}
function OfflineScreen({ onAuth }: { onAuth: () => void }) {
  const [showInput, setShowInput] = useState(false);
  const [passcode, setPasscode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '868686') {
      onAuth();
    } else {
      setShowInput(false);
      setPasscode('');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-zinc-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-zinc-950"></div>
      <div className="z-10 text-center flex flex-col items-center">
        <div className="w-16 h-16 border-t-2 border-zinc-700 border-solid rounded-full animate-spin mb-8"></div>
        <h1 className="text-2xl font-bold text-zinc-300 mb-2 tracking-widest uppercase">System Offline</h1>
        <p className="text-sm text-zinc-500 font-mono">ERR_CONNECTION_REFUSED</p>
      </div>
      
      {/* Hidden interactive area */}
      <div 
        className="absolute bottom-0 right-0 w-24 h-24 z-20 cursor-default"
        onClick={() => setShowInput(true)}
      />

      {showInput && (
        <form 
          onSubmit={handleSubmit}
          className="absolute bottom-8 right-8 z-30"
        >
          <input
            type="password"
            autoFocus
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="bg-transparent border-b border-zinc-700 text-zinc-500 text-sm focus:outline-none focus:border-zinc-500 w-32 px-1 py-1"
            placeholder="..."
          />
        </form>
      )}
    </div>
  );
}
