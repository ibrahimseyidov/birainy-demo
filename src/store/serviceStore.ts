import { create } from 'zustand';
import { ServiceData, ServiceContent } from '@/types/serviceTypes';

interface ServiceState extends ServiceData {
  setActiveSection: (id: string) => void;
  setActiveService: (serviceId: string, tabId?: string) => void;
  activeServiceId: string;
  activeTabId: string | null;
  getActiveContent: () => ServiceContent | undefined;
}

export const useServiceStore = create<ServiceState>((set, get) => ({
  activeServiceId: '',
  activeTabId: null,
  services: [
    {
      id: '1',
      title: 'Program Teminatı',
      isExpanded: false,
      children: [
        { id: '1-0', title: 'Program Teminatı Ümumi' },
        { id: '1-1', title: 'Web Proqramlar' },
        { id: '1-2', title: 'Mobil Proqramlar' },
        { id: '1-3', title: 'Komputer Proqramları' },
        { id: '1-4', title: 'API Helleri' }
      ]
    },
    {
      id: '2',
      title: 'Saytların yaradılması',
      isExpanded: false,
      children: []
    },
    {
      id: '3',
      title: 'Oyun Teminatı',
      isExpanded: true,
      children: [
        { id: '3-0', title: 'Oyun Teminatı Ümumi' },
        { id: '3-1', title: 'Stend və VR oyunları' },
        { id: '3-2', title: 'Veb oyunlar' },
        { id: '3-3', title: 'VR simulyatorlar' },
        { id: '3-4', title: 'Oyun monitoru kirayəsi' }
      ]
    },
    {
      id: '4',
      title: 'Data Analitikası',
      isExpanded: false,
      children: [
        { id: '4-0', title: 'Data Analitikası Ümumi' },
        { id: '4-1', title: 'Data analitikasi' },
        { id: '4-2', title: 'İnsan Resurslarının təhlili' },
        { id: '4-3', title: 'Optimizasiya təhlili' },
        { id: '4-4', title: 'Satınalma təhlili' }
      ]
    }
  ],
  contents: {
    '1': {
      id: '1',
      title: 'Program Teminatı',
      description: 'Şirkət daxilindəki prosesləri avtomatlaşdırmaq üçün proqram təminatları hazırlanır. Müxtəlif platformalarda işləyən, təhlükəsiz və effektiv proqram təminatının yaradılması bizim əsas prioritetimizdir.',
      imageUrl: '/images/program-teminati.png'
    },
    '2': {
      id: '2',
      title: 'Saytlarin yaradılması',
      description: 'Şirkət daxilindəki prosesləri avtomatlaşdırmaq üçün proqram təminatları hazırlanır. Müxtəlif platformalarda işləyən, təhlükəsiz və effektiv proqram təminatının yaradılması bizim əsas prioritetimizdir.',
      imageUrl: '/images/program-teminati.png'
    },
    '3': {
      id: '3',
      title: 'Oyun Teminatı',
      description: 'Şirkətin fəaliyyət göstərdiyi istiqamətə, istehsal etdiyi məhsullara uyğun olaraq oyun ssenarisi hazırlanır, son trendlərə əsaslanaraq dizayn olunur və oyun developerleri tərəfindən 2D və 3D formatında oyunlar yazılır. Oyunun növünə uyğun assetlərdən istifadə edilir.',
      imageUrl: '/images/oyun-teminati.png'
    },
    '4': {
      id: '4',
      title: 'Data Analitikası',
      description: 'Böyük həcmli məlumatları toplama, təhlil etmə və məlumatları qərar vermə zamanı istifadə etmək üçün həllər təqdim edirik. Müştərilərin davranışlarını analiz edərək biznes strategiyalarını təkmilləşdirmək mümkündür.',
      imageUrl: '/images/data-analitikasi.png'
    },

    '1-0': {
      id: '3-0',
      title: 'Program Teminati Ümumi',
      description: 'Oyun teminatı xidmətimiz, müştəriləriniz və ya işçiləriniz üçün əyləncəli və cəlbedici oyun həllərini əhatə edir. İstər təhsil məqsədli, istərsə də əyləncə üçün olsun, biz sizə yüksək keyfiyyətli oyun həlləri təklif edirik.',
      imageUrl: '/images/oyun-teminati-genel.png'
    },
    '1-1': {
      id: '3-1',
      title: 'Web Proqramlar',
      description: 'Sərgilər, təqdimatlar və məhsul nümayişləri üçün xüsusi hazırlanmış stend və VR oyunları ilə müştərilərinizi heyrətləndirin. İnteraktiv VR təcrübələri ilə məhsullarınızı daha təsirli şəkildə tanıdın.',
      imageUrl: '/images/stend-vr.png'
    },
    '1-2': {
      id: '3-2',
      title: 'Mobil Proqramlar',
      description: 'Veb platformalar üçün hazırlanmış browser-əsaslı oyunlar ilə saytınızı daha cəlbedici edin. HTML5 və JavaScript istifadə edərək yaradılan və istənilən cihazda işləyə bilən oyunlar təklif edirik.',
      imageUrl: '/images/veb-oyunlar.png'
    },
    '1-3': {
      id: '3-3',
      title: 'Komputer Proqramları',
      description: 'Təhsil və təlim məqsədi ilə hazırlanmış VR simulyatorlar ilə işçilərinizə real təcrübəyə yaxın təlim imkanı yaradın. Risk olmadan təhlükəli ssenariləri təcrübə etmək üçün ideal həldir.',
      imageUrl: '/images/vr-simulyatorlar.png'
    },
    '1-4': {
      id: '3-4',
      title: 'API Həlləri',
      description: 'Xüsusi tədbirlər, yarışlar və ya təqdimatlar üçün yüksək keyfiyyətli oyun monitorları kirayə veririk. Böyük ekranlı 4K monitorlardan tutmuş yüksək refresh rate-ə malik gaming monitorlara qədər, sizə lazım olan hər şey bizdə var.',
      imageUrl: '/images/oyun-monitoru.png'
    },
    
   '3-0': {
      id: '3-0',
      title: 'Oyun Teminatı Ümumi',
      description: 'Oyun teminatı xidmətimiz, müştəriləriniz və ya işçiləriniz üçün əyləncəli və cəlbedici oyun həllərini əhatə edir. İstər təhsil məqsədli, istərsə də əyləncə üçün olsun, biz sizə yüksək keyfiyyətli oyun həlləri təklif edirik.',
      imageUrl: '/images/oyun-teminati-genel.png'
    },
    '3-1': {
      id: '3-1',
      title: 'Stend və VR oyunları',
      description: 'Sərgilər, təqdimatlar və məhsul nümayişləri üçün xüsusi hazırlanmış stend və VR oyunları ilə müştərilərinizi heyrətləndirin. İnteraktiv VR təcrübələri ilə məhsullarınızı daha təsirli şəkildə tanıdın.',
      imageUrl: '/images/stend-vr.png'
    },
    '3-2': {
      id: '3-2',
      title: 'Veb oyunlar',
      description: 'Veb platformalar üçün hazırlanmış browser-əsaslı oyunlar ilə saytınızı daha cəlbedici edin. HTML5 və JavaScript istifadə edərək yaradılan və istənilən cihazda işləyə bilən oyunlar təklif edirik.',
      imageUrl: '/images/veb-oyunlar.png'
    },
    '3-3': {
      id: '3-3',
      title: 'VR simulyatorlar',
      description: 'Təhsil və təlim məqsədi ilə hazırlanmış VR simulyatorlar ilə işçilərinizə real təcrübəyə yaxın təlim imkanı yaradın. Risk olmadan təhlükəli ssenariləri təcrübə etmək üçün ideal həldir.',
      imageUrl: '/images/vr-simulyatorlar.png'
    },
    '3-4': {
      id: '3-4',
      title: 'Oyun monitoru kirayəsi',
      description: 'Xüsusi tədbirlər, yarışlar və ya təqdimatlar üçün yüksək keyfiyyətli oyun monitorları kirayə veririk. Böyük ekranlı 4K monitorlardan tutmuş yüksək refresh rate-ə malik gaming monitorlara qədər, sizə lazım olan hər şey bizdə var.',
      imageUrl: '/images/oyun-monitoru.png'
    },

    '4-0': {
      id: '4-0',
      title: 'Data Analitikası Ümumi',
      description: 'Data analitikası xidmətimiz, şirkətinizin məlumatlarından dəyərli məlumatlar çıxarmağa kömək edir. Toplanan məlumatları elmi metodlarla təhlil edərək müştəri davranışlarını, bazar tendensiyalarını və biznes imkanlarını aşkar edirik.',
      imageUrl: '/images/data-analitikasi-genel.png'
    },
    '4-1': {
      id: '4-1',
      title: 'Data analitikasi',
      description: 'Böyük həcmli verilənlər bazasından gizli nümunələri, korrelyasiyaları və trendləri ortaya çıxarmaq üçün veri madenciliyi xidmətlərimizi təklif edirik. Machine learning alqoritmləri istifadə edərək qiymətli məlumatları aşkar edə bilərik.',
      imageUrl: '/images/veri-madenciligi.png'
    },
    '4-2': {
      id: '4-2',
      title: 'İnsan Resurslarının təhlili',
      description: 'Böyük həcmli verilənlər bazasından gizli nümunələri, korrelyasiyaları və trendləri ortaya çıxarmaq üçün veri madenciliyi xidmətlərimizi təklif edirik. Machine learning alqoritmləri istifadə edərək qiymətli məlumatları aşkar edə bilərik.',
      imageUrl: '/images/veri-madenciligi.png'
    },
    '4-3': {
      id: '4-3',
      title: 'Optimizasiya təhlili',
      description: 'Böyük həcmli verilənlər bazasından gizli nümunələri, korrelyasiyaları və trendləri ortaya çıxarmaq üçün veri madenciliyi xidmətlərimizi təklif edirik. Machine learning alqoritmləri istifadə edərək qiymətli məlumatları aşkar edə bilərik.',
      imageUrl: '/images/veri-madenciligi.png'
    },
    '4-4': {
      id: '4-4',
      title: 'Satınalma təhlili',
      description: 'Böyük həcmli verilənlər bazasından gizli nümunələri, korrelyasiyaları və trendləri ortaya çıxarmaq üçün veri madenciliyi xidmətlərimizi təklif edirik. Machine learning alqoritmləri istifadə edərək qiymətli məlumatları aşkar edə bilərik.',
      imageUrl: '/images/veri-madenciligi.png'
    }
  },
  
  setActiveSection: (id: string) => 
    set((state) => ({
      services: state.services.map(service => ({
        ...service,
        isExpanded: service.id === id
      }))
    })),
    
    setActiveService: (serviceId: string, tabId: string | null = null) => {
     
      const normalizedTabId = tabId || null;
      
      set({
        activeServiceId: serviceId,
        activeTabId: normalizedTabId
      });
    },
    
  getActiveContent: () => {
    const state = get();
    const { activeServiceId, activeTabId, contents } = state;
    
    if (activeTabId) {
      const tabContentId = `${activeServiceId}-${activeTabId}`;
      if (contents[tabContentId]) {
        return contents[tabContentId];
      }
    }
    
    return contents[activeServiceId];
  }
}));