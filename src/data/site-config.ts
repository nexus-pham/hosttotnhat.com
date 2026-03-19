export const siteConfig = {
  siteUrl: 'https://hosttotnhat.com',
  brandName: 'Host Tốt Nhất',
  shortBrandName: 'HTN',
  tagline: 'Đánh giá và so sánh hosting tốt nhất tại Việt Nam',
  logoText: 'HTN',
  logoIcon: 'award',
  ga4MeasurementId: 'G-B4HNNXKZXS',
  googleSiteVerification: '1JblHFDXtz6xMGGOdKLdv0Blpbku-VcNSiskoLD9Ss0',
  colors: {
    primary: '#059669',
    primaryDark: '#047857',
    accent: '#f59e0b',
    accentLight: '#fbbf24',
  },
  navigation: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Đánh giá hosting', href: '/#pricing' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Liên hệ', href: '/contact/' },
  ],
  ctas: {
    register: 'https://azdigi.com/hosting-gia-re',
    consultation: 'https://azdigi.com/hosting-gia-re',
    learnMore: 'https://azdigi.com/premium-business-hosting/',
  },
  contact: {
    phoneDisplay: '028 888 14768 / 028 888 24768',
    phoneHref: 'tel:02888814768',
    email: 'support@azdigi.com',
    emailHref: 'mailto:support@azdigi.com',
    address: '401/3 Nguyễn Duy Trinh, phường Bình Trưng, TP Hồ Chí Minh',
    mapUrl: 'https://maps.google.com/?q=401/3+Nguyen+Duy+Trinh+phuong+Binh+Trung+TP+Ho+Chi+Minh',
    companyName: 'Công ty cổ phần AZDIGI',
    taxCode: '0313755538',
  },
  pricingSections: [
    {
      id: 'hosting-ssd',
      name: 'Pro Hosting',
      subtitle: 'Cho blog cá nhân, website giới thiệu và các dự án cần mức giá dễ tiếp cận hơn theo danh sách sản phẩm hiện tại của AZDIGI.',
      startingPrice: 29000,
      oldPrice: 39000,
      ctaText: 'Xem Pro Hosting',
      ctaUrl: 'https://azdigi.com/hosting-gia-re',
      features: ['Từ 29.000đ/tháng', 'Phù hợp website nhỏ, blog cá nhân và người mới bắt đầu', 'Băng thông không giới hạn', 'SSL miễn phí và backup định kỳ'],
    },
    {
      id: 'wordpress-hosting',
      name: 'WordPress Hosting',
      subtitle: 'Dành cho website WordPress cần LiteSpeed, cache tốt và quản lý dễ hơn.',
      startingPrice: 89000,
      oldPrice: 95000,
      isPopular: true,
      ctaText: 'Xem WordPress Hosting',
      ctaUrl: 'https://azdigi.com/wordpress-hosting/',
      features: ['Từ 89.000đ/tháng', 'Tối ưu WordPress và WooCommerce', 'LiteSpeed Enterprise + LSCache', 'Hỗ trợ migration miễn phí'],
    },
    {
      id: 'premium-business',
      name: 'Premium Business',
      subtitle: 'Phù hợp website doanh nghiệp, bán hàng và dự án cần hiệu năng ổn định lâu dài.',
      startingPrice: 239000,
      oldPrice: 269000,
      ctaText: 'Xem Premium Business',
      ctaUrl: 'https://azdigi.com/premium-business-hosting/',
      features: ['Từ 239.000đ/tháng', 'NVMe Enterprise + LiteSpeed + Redis', 'Backup hàng ngày lưu 30 ngày', 'Hỗ trợ ưu tiên 24/7 cho website vận hành nghiêm túc'],
    }
  ],
  features: [
    { title: 'Review theo trải nghiệm thực tế', description: 'Ưu tiên tốc độ tải trang, uptime, mức ổn định khi chạy plugin nặng và chất lượng hỗ trợ thay vì chỉ nhìn thông số marketing.', icon: 'badge-check' },
    { title: 'So sánh đúng theo nhu cầu', description: 'Tách rõ nhóm website cá nhân, WordPress, bán hàng và doanh nghiệp để bạn chọn đúng dịch vụ, không mua dư cấu hình.', icon: 'scale' },
    { title: 'Quan tâm cả chi phí dài hạn', description: 'Đánh giá không chỉ giá mở đầu mà còn xét tính năng đi kèm như backup, SSL, migrate và khả năng nâng cấp sau này.', icon: 'wallet' },
    { title: 'Ưu tiên nhà cung cấp hỗ trợ tốt', description: 'Với hosting, support là một phần của sản phẩm. Đơn vị phản hồi nhanh và xử lý có trách nhiệm luôn đáng tiền hơn.', icon: 'headphones' }
  ],
  footerServices: ['Pro Hosting', 'WordPress Hosting', 'Premium Business Hosting', 'NVMe VPS', 'Cloud Server'],
  footerSupport: ['Gửi yêu cầu hỗ trợ', 'Chính sách hoàn tiền', 'Cam kết chất lượng (SLA)', 'Hướng dẫn thanh toán', 'Liên hệ AZDIGI'],
  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com/azdigicorp', icon: 'facebook' },
    { label: 'Zalo', href: 'https://zalo.me/278248681812488929', icon: 'message-circle' },
    { label: 'YouTube', href: 'https://www.youtube.com/@AZDIGI', icon: 'youtube' },
    { label: 'Telegram', href: 'https://t.me/azdigicorp', icon: 'send' }
  ]
} as const;

export type SiteConfig = typeof siteConfig;
