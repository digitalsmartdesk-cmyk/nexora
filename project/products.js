// Shared product/collection/bundle data for Nexora D2C site
export const COLLECTIONS = [
  { id: 'chore-killers', name: 'Chore Killers', tagline: 'Roz ka kaam, ab asaan', icon: '🧹' },
  { id: 'health', name: 'Health', tagline: 'Dard ko bolo bye', icon: '💆' },
  { id: 'smart-home', name: 'Smart Home', tagline: 'Ghar bane smart', icon: '🏠' },
  { id: 'wellbeing', name: 'Wellbeing', tagline: 'Chhoti si khushi', icon: '🌿' },
];

export const PRODUCTS = [
  // Chore Killers
  { id: 'robo-sweeper', name: 'Robotic Floor Sweeper', collection: 'chore-killers', price: 1999, mrp: 4999, rating: 4.4, reviews: 2318, blurb: 'Roz jhaadu-pocha? Ab nahi.' },
  { id: 'mini-washer', name: 'Foldable Mini Washing Machine', collection: 'chore-killers', price: 2499, mrp: 5999, rating: 4.3, reviews: 1542, blurb: 'Chhote kapdo ke liye laundry nahi jaana padega.' },
  { id: 'spin-scrubber', name: 'Electric Spin Scrubber', collection: 'chore-killers', price: 1299, mrp: 2999, rating: 4.5, reviews: 987, blurb: 'Bathroom tiles chamkao 5 minute mein.' },
  { id: 'tyre-inflator', name: 'Cordless Tyre Inflator', collection: 'chore-killers', price: 1499, mrp: 3499, rating: 4.6, reviews: 1203, blurb: 'Petrol pump ki line, ab avoid.' },
  { id: 'garment-steamer', name: 'Garment Steamer', collection: 'chore-killers', price: 1199, mrp: 2799, rating: 4.4, reviews: 764, blurb: 'Ironing wala jhanjhat khatam.' },
  { id: 'kitchen-mop', name: 'Foldable Kitchen Mop', collection: 'chore-killers', price: 899, mrp: 1999, rating: 4.2, reviews: 611, blurb: 'Corner-corner tak pahunche.' },
  { id: 'veg-chopper', name: 'Rechargeable Veg Chopper', collection: 'chore-killers', price: 699, mrp: 1499, rating: 4.3, reviews: 2044, blurb: 'Pyaaz kaate bina rulaye.' },
  { id: 'multi-kettle', name: 'Multi-Cooker Electric Kettle', collection: 'chore-killers', price: 999, mrp: 2199, rating: 4.5, reviews: 1389, blurb: 'Maggi se lekar chai tak, ek hi kettle.' },
  // Health
  { id: 'massage-gun', name: 'Mini Massage Gun', collection: 'health', price: 1799, mrp: 3999, rating: 4.6, reviews: 3021, blurb: 'Gym ke baad ki thakaan, gayab.' },
  { id: 'neck-massager', name: 'Neck Massager', collection: 'health', price: 1399, mrp: 2999, rating: 4.4, reviews: 1655, blurb: 'WFH neck pain? Sorted.' },
  { id: 'scalp-massager', name: 'Electric Scalp Massager', collection: 'health', price: 599, mrp: 1299, rating: 4.3, reviews: 942, blurb: 'Salon jaisa massage, ghar par.' },
  // Smart Home
  { id: 'ir-remote', name: 'Smart IR Universal Remote', collection: 'smart-home', price: 799, mrp: 1799, rating: 4.2, reviews: 588, blurb: 'Saare remotes, ek app mein.' },
  { id: 'light-strips', name: 'Motion-Sensor Light Strips', collection: 'smart-home', price: 899, mrp: 1999, rating: 4.5, reviews: 1104, blurb: 'Andhere mein switch dhundna band.' },
  { id: 'video-doorbell', name: 'Wireless Video Doorbell', collection: 'smart-home', price: 2299, mrp: 4999, rating: 4.4, reviews: 733, blurb: 'Dekho kaun aaya, bina uthe.' },
  // Wellbeing
  { id: 'aroma-diffuser', name: 'Aroma Diffuser + Refills', collection: 'wellbeing', price: 1099, mrp: 2299, rating: 4.5, reviews: 1290, blurb: 'Ghar mehke, mood bhi.' },
  { id: 'lint-remover', name: 'Handheld Lint Remover', collection: 'wellbeing', price: 399, mrp: 899, rating: 4.3, reviews: 2557, blurb: 'Purane sweater, naye jaise.' },
];

export const BUNDLES = [
  { id: 'chore-free-kit', name: 'Chore-Free Home Kit', items: ['robo-sweeper', 'kitchen-mop', 'veg-chopper'], price: 3499, mrp: 8297, tagline: 'Poora ghar, ek kit mein sorted.' },
  { id: 'wellness-combo', name: 'Wellness Combo', items: ['massage-gun', 'neck-massager', 'scalp-massager'], price: 2999, mrp: 8097, tagline: 'Sar se paer tak, relax mode on.' },
  { id: 'smart-home-starter', name: 'Smart Home Starter', items: ['ir-remote', 'light-strips'], price: 1499, mrp: 3798, tagline: 'Smart ghar ki shuruaat.' },
  { id: 'freshness-kit', name: 'Freshness Kit', items: ['aroma-diffuser', 'lint-remover'], price: 1299, mrp: 3198, tagline: 'Fresh kapde, fresh ghar.' },
];

export function discountPct(price, mrp) {
  return Math.round((1 - price / mrp) * 100);
}

export function inr(n) {
  return '₹' + n.toLocaleString('en-IN');
}

export function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}
