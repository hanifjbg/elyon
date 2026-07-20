import React, { useState } from 'react';
import { Rocket, Calculator, Zap, ShieldAlert, Package, CheckCircle, Smartphone, MapPin, Store, AlertTriangle, Coins, TrendingUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [bottleCount, setBottleCount] = useState(500);

  const tabs = [
    { id: 0, label: 'Visi & Produk', icon: Rocket },
    { id: 1, label: 'Keuangan & HPP', icon: Calculator },
    { id: 2, label: 'Strategi O2O', icon: Zap },
    { id: 3, label: 'Roadmap & Risiko', icon: ShieldAlert }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-cyan-500/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-400">
                ELYON
              </h1>
              <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mt-1 font-mono">
                The Gen-Z Fragrance Revolution
              </p>
            </div>
            
            <div className="flex overflow-x-auto hide-scrollbar space-x-1 sm:space-x-2 pb-2 sm:pb-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                      isActive 
                      ? 'bg-gray-900 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)] border border-cyan-500/30' 
                      : 'text-gray-500 hover:text-gray-300 hover:bg-gray-900/50 border border-transparent'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'animate-pulse' : ''} />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          {activeTab === 0 && <TabVisiProduk />}
          {activeTab === 1 && <TabKeuanganHPP bottleCount={bottleCount} setBottleCount={setBottleCount} />}
          {activeTab === 2 && <TabStrategiO2O />}
          {activeTab === 3 && <TabRoadmapRisiko />}
        </div>
      </main>
    </div>
  );
}

// --- TAB 1: VISI & PRODUK ---
function TabVisiProduk() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-900/50 border border-gray-800 p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-500" />
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Rocket className="text-cyan-400" /> Premium Upgrade: 50ml Custom Bottle Doff
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          Mendefinisikan ulang standar parfum lokal. Beralih dari 35ml standar pabrik ke <strong className="text-white">50ml Custom Bottle kosongan</strong> dari vendor luar untuk memaksimalkan <em>Premium Look</em>. Memberikan value produk setara parfum Rp 200.000+, namun dijual di harga normal <strong className="text-emerald-400">Rp 89.000</strong>.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Package className="text-pink-400" /> Varian Produk MVP
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard 
            title="ELYON Noir" 
            desc="Woody Aromatic. Maskulin & Misterius."
            visual="Botol Kotak Black Matte (Doff) + Laser Engrave tembus kaca."
            accent="from-gray-700 to-gray-900"
            textColor="text-emerald-400"
          />
          <ProductCard 
            title="ELYON Blanc" 
            desc="Fresh & Clean. Modern & Energetic."
            visual="Botol White Matte (Doff) + Print Holographic/Neon."
            accent="from-gray-200 to-gray-400"
            textColor="text-cyan-400"
            darkText={true}
          />
          <ProductCard 
            title="ELYS Rose" 
            desc="Floral Fruity. Sweet & Playful."
            visual="Botol Pink Matte (Doff) + Sablon Putih Solid."
            accent="from-pink-900/50 to-pink-950"
            textColor="text-pink-400"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 mt-12">
          <CheckCircle className="text-emerald-400" /> Struktur Kepemilikan (75/25)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
            <h4 className="text-lg font-bold mb-2">Partner (75% Equity)</h4>
            <p className="text-sm text-emerald-400 font-mono mb-4">CFO & Supply Chain Director</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Investor Utama (Modal Rp 20.000.000).</li>
              <li>• Sourcing & negosiasi Vendor Botol 50ml.</li>
              <li>• Negosiator Jasa Filling dengan Pabrik ABSH Jombang.</li>
              <li>• Buka jalur B2B konsinyasi Coffee Shop.</li>
              <li>• Auditor finansial & approval budget bulanan.</li>
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
            <h4 className="text-lg font-bold mb-2">Hanif Saifudin (25% Equity)</h4>
            <p className="text-sm text-cyan-400 font-mono mb-4">CMO & COO</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Otak Strategi & Eksekutor Harian. (Gaji Operasional).</li>
              <li>• Kreator identitas visual, desain botol, konten sosmed.</li>
              <li>• Mengelola ekosistem digital (Web, Kasir, CRM).</li>
              <li>• Eksekutor periklanan digital (Meta/TikTok Ads).</li>
              <li>• Customer Service & Operasional pemenuhan (Fulfillment).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ title, desc, visual, accent, textColor, darkText = false }: any) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors">
      <div className={`h-24 w-full bg-gradient-to-br ${accent} flex items-end p-4`}>
        <h3 className={`text-xl font-black ${darkText ? 'text-gray-900' : 'text-white'}`}>{title}</h3>
      </div>
      <div className="p-5">
        <p className={`font-medium mb-3 ${textColor}`}>{desc}</p>
        <p className="text-sm text-gray-400 leading-relaxed border-t border-gray-800 pt-3">
          <span className="block text-xs uppercase text-gray-500 mb-1 font-mono">Visual Target</span>
          {visual}
        </p>
      </div>
    </div>
  );
}


// --- TAB 2: KEUANGAN & HPP ---
function TabKeuanganHPP({ bottleCount, setBottleCount }: any) {
  const pricePO = 69000;
  const hppPerBottle = 28500;
  const adsPerBottle = 20000;
  
  const revenue = bottleCount * pricePO;
  const totalHPP = bottleCount * hppPerBottle;
  const totalAds = bottleCount * adsPerBottle;
  const netProfit = revenue - totalHPP - totalAds;

  return (
    <div className="space-y-8">
      
      {/* Alert Merah Tebal */}
      <div className="bg-red-950/40 border border-red-500/50 rounded-xl p-4 flex items-start gap-4">
        <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" />
        <div>
          <h4 className="text-red-400 font-bold uppercase tracking-wide">Peringatan Akuntansi</h4>
          <p className="text-red-200/80 text-sm mt-1">
            BIAYA IKLAN (ADS) BUKAN HPP. Iklan adalah Biaya Operasional (OPEX). HPP murni adalah biaya wujud fisik produk.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Kolom Kiri: Rincian HPP */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <Coins className="text-emerald-400" /> Rincian HPP (Harga Pokok Penjualan)
          </h3>
          <div className="space-y-4">
            <HppRow label="Cairan 50ml + Jasa Filling ABSH" value="Rp 9.000" />
            <HppRow label="Botol Kaca 50ml Kosong (Luar)" value="Rp 7.500" />
            <HppRow label="Cetak Laser/Doff Botol" value="Rp 5.000" />
            <HppRow label="Hardbox/Softbox Premium" value="Rp 5.000" />
            <HppRow label="Ops Logistik (Bubble, Stiker)" value="Rp 2.000" />
            
            <div className="pt-4 border-t border-gray-700 mt-4">
              <div className="flex justify-between items-center text-lg font-bold text-emerald-400">
                <span>TOTAL HPP PER BOTOL</span>
                <span>Rp 28.500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Gross Margin */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <TrendingUp className="text-cyan-400" /> Gross Margin (Laba Kotor)
          </h3>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-300">Harga Promo PO (Rp 69.000)</span>
                <span className="text-pink-400 font-bold">Margin 58%</span>
              </div>
              <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-pink-500 rounded-full" style={{ width: '58%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Laba Kotor: Rp 40.500 / botol</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-300">Harga Normal (Rp 89.000)</span>
                <span className="text-cyan-400 font-bold">Margin 68%</span>
              </div>
              <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Laba Kotor: Rp 60.500 / botol</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kalkulator Interaktif */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mt-8">
        <h3 className="text-xl font-bold mb-6 text-center text-white">Simulasi Masa Promo PO (Rp 69.000/botol)</h3>
        
        <div className="mb-10 px-4">
          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <span>50 Botol</span>
            <span className="text-cyan-400 font-bold text-lg">{bottleCount} Botol</span>
            <span>1000 Botol</span>
          </div>
          <input 
            type="range" 
            min="50" 
            max="1000" 
            step="10"
            value={bottleCount} 
            onChange={(e) => setBottleCount(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBox label="Gross Revenue" value={revenue} color="text-white" />
          <StatBox label="Total HPP (-)" value={totalHPP} color="text-gray-400" />
          <StatBox label="Biaya Iklan/OPEX (-)" value={totalAds} color="text-red-400" />
          <StatBox label="Net Profit" value={netProfit} color="text-emerald-400" isHighlight />
        </div>
      </div>

    </div>
  );
}

function HppRow({ label, value }: any) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-400">{label}</span>
      <span className="font-medium text-gray-200">{value}</span>
    </div>
  );
}

function StatBox({ label, value, color, isHighlight = false }: any) {
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className={`p-4 rounded-xl ${isHighlight ? 'bg-emerald-950/30 border border-emerald-500/30' : 'bg-gray-800/50'}`}>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className={`font-bold ${isHighlight ? 'text-xl' : 'text-lg'} ${color}`}>{formatIDR(value)}</p>
    </div>
  );
}


// --- TAB 3: STRATEGI O2O ---
function TabStrategiO2O() {
  return (
    <div className="space-y-12">
      {/* Offline B2B */}
      <section>
        <div className="mb-6 flex items-center gap-3">
          <div className="p-3 bg-pink-500/10 rounded-lg">
            <Store className="text-pink-400" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Offline B2B (Coffee Shop)</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-pink-500/50 transition-all duration-300">
            <div className="text-xs font-bold tracking-widest text-pink-400 mb-2 uppercase">Skema 1</div>
            <h3 className="text-xl font-bold text-white mb-4">Masa Pre-Order (PO)</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Tidak menaruh stok botol utuh. Hanya titip 1 display akrilik + Botol Tester di meja kasir. Pembelian dilakukan melalui scan barcode.
            </p>
            <div className="bg-gray-950 rounded-xl p-4 border border-gray-800">
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span className="font-mono text-xs text-gray-400">ALUR:</span> Mencium aroma → Scan Barcode → Beli Web → Input Kode Kafe (Cth: KAFESENJA10).</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span className="font-mono text-xs text-gray-400">BAGI HASIL:</span> Komisi Rp 10.000 / botol untuk Kafe.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span className="font-mono text-xs text-emerald-400">BENEFIT:</span> Konversi penjualan tanpa keluar biaya Ads.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-pink-500/50 transition-all duration-300">
            <div className="text-xs font-bold tracking-widest text-cyan-400 mb-2 uppercase">Skema 2</div>
            <h3 className="text-xl font-bold text-white mb-4">Ready Stock Konsinyasi</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Titip jual fisik (misal 1 lusin) di rak Kafe/Distro saat produk sudah ready, menggunakan harga normal (Rp 89.000).
            </p>
            <div className="bg-gray-950 rounded-xl p-4 border border-gray-800">
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" /> <span className="font-mono text-xs text-gray-400">HARGA:</span> Rp 89.000 / botol.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" /> <span className="font-mono text-xs text-gray-400">BAGI HASIL:</span> Komisi Kafe Rp 15.000 (~17%). Disetor ke ELYON Rp 74.000.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" /> <span className="font-mono text-xs text-cyan-400">PROFIT BERSIH:</span> Rp 45.500 / botol (setelah HPP).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Engine */}
      <section>
        <div className="mb-6 flex items-center gap-3 mt-12">
          <div className="p-3 bg-cyan-500/10 rounded-lg">
            <Smartphone className="text-cyan-400" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Digital Engine (Autopilot)</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DigitalCard 
            title="The UGC Loop"
            subtitle="Marketing Zero-Cost"
            desc="Cashback Rp 20.000 jika konsumen memposting video estetik (unboxing ELYON) di TikTok/IG Story. Menciptakan efek viral organik."
            accent="bg-gradient-to-r from-pink-500 to-rose-500"
          />
          <DigitalCard 
            title="OrderOnline.id"
            subtitle="Kasir Otomatis"
            desc="Konsumen klik Ads → Landing Page → Hitung Ongkir Otomatis → Terbit Invoice. Mengurangi friksi tanpa perlu admin chat manual."
            accent="bg-gradient-to-r from-emerald-500 to-teal-500"
          />
          <DigitalCard 
            title="Watzap.id"
            subtitle="CRM & Robot WA"
            desc="Menagih otomatis (Abandoned Cart) jika konsumen belum transfer dalam 24 jam, serta mem-blast info update produksi secara berkala."
            accent="bg-gradient-to-r from-cyan-500 to-blue-500"
          />
        </div>
      </section>
    </div>
  );
}

function DigitalCard({ title, subtitle, desc, accent }: any) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden relative group">
      <div className={`h-1 w-full ${accent}`} />
      <div className="p-6">
        <p className="text-xs font-mono text-gray-500 mb-1">{subtitle}</p>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}


// --- TAB 4: ROADMAP & RISIKO ---
function TabRoadmapRisiko() {
  return (
    <div className="space-y-12">
      {/* Roadmap Timeline */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-8">Roadmap Eksekusi (3 Bulan)</h2>
        <div className="relative border-l border-gray-800 ml-4 md:ml-6 space-y-8 pb-4">
          
          <div className="relative pl-8 md:pl-10">
            <div className="absolute w-4 h-4 bg-gray-900 border-2 border-emerald-400 rounded-full -left-[9px] top-1" />
            <div className="mb-1 text-emerald-400 font-mono text-sm tracking-wider font-bold">BULAN 1</div>
            <h3 className="text-xl font-bold text-white mb-2">Validasi & Sourcing</h3>
            <p className="text-gray-400 text-sm">Blind Test aroma di warkop menggunakan vial ABSH. Deal botol kosongan 50ml dari vendor. Produksi PR Kit Hardbox & cetak botol sample (Laser/Doff) untuk disebar ke Influencer Gen Z.</p>
          </div>

          <div className="relative pl-8 md:pl-10">
            <div className="absolute w-4 h-4 bg-gray-900 border-2 border-cyan-400 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <div className="mb-1 text-cyan-400 font-mono text-sm tracking-wider font-bold">BULAN 2</div>
            <h3 className="text-xl font-bold text-white mb-2">The Hype & Open PO</h3>
            <p className="text-gray-400 text-sm">Bakar budget Ads dan buka keran PO selama 14 hari dengan harga Early Bird (Rp 69.000). Target: Mengamankan cashflow untuk melunasi vendor botol luar.</p>
          </div>

          <div className="relative pl-8 md:pl-10">
            <div className="absolute w-4 h-4 bg-gray-900 border-2 border-pink-400 rounded-full -left-[9px] top-1" />
            <div className="mb-1 text-pink-400 font-mono text-sm tracking-wider font-bold">BULAN 3</div>
            <h3 className="text-xl font-bold text-white mb-2">Perakitan & Fulfillment</h3>
            <p className="text-gray-400 text-sm">Botol kosong + cetak Doff dikirim ke ABSH Jombang untuk proses Filling → QC Ketat → Packing → Kirim ke konsumen → Trigger Promo UGC Cashback.</p>
          </div>
          
        </div>
      </section>

      {/* Mitigasi Risiko */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Manajemen Risiko Supply Chain</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RiskCard 
            title="MOQ Vendor Botol Gagal"
            desc="Jika pesanan PO tidak tembus batas minimal order (MOQ) vendor luar."
            mitigation="Gunakan buffer kas Rp 20 Juta untuk menutupi sisa bayar, ATAU nego termin (split payment) di awal."
          />
          <RiskCard 
            title="Lead Time Perakitan Molor"
            desc="Keterlambatan produksi karena botol diproses custom laser/doff."
            mitigation="Edukasi konsumen sejak awal bahwa masa tunggu PO adalah 21 hari kerja (bukan 7 hari). Under-promise, over-deliver."
          />
          <RiskCard 
            title="Risiko Botol Pecah (Ekspedisi)"
            desc="Kerusakan barang saat di tangan kurir pengiriman."
            mitigation="Standard packing 3 lapis (Kotak, Bubble Wrap, Dus Luar). Wajib menyertakan Video Unboxing Tanpa Jeda untuk klaim asuransi."
          />
        </div>
      </section>
    </div>
  );
}

function RiskCard({ title, desc, mitigation }: any) {
  return (
    <div className="bg-gray-900 border border-red-900/30 p-6 rounded-2xl relative overflow-hidden group hover:border-red-500/50 transition-colors">
      <div className="absolute top-0 right-0 bg-red-500/10 p-4 rounded-bl-3xl">
        <ShieldAlert className="text-red-400/50" size={24} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 pr-8">{title}</h3>
      <p className="text-sm text-gray-500 mb-4 h-12">{desc}</p>
      
      <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 border-l-2 border-l-emerald-500">
        <p className="text-xs font-bold text-emerald-400 mb-1 uppercase tracking-wider">Mitigasi</p>
        <p className="text-sm text-gray-300">{mitigation}</p>
      </div>
    </div>
  );
}
