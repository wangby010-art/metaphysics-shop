export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-primary/30 bg-primary/5" />
                <span className="relative text-xl font-bold text-primary">玄</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-widest text-foreground">泫星阁</span>
                <span className="text-[10px] font-light tracking-[0.3em] text-muted-foreground">MYSTIC PAVILION</span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-loose text-muted-foreground">
              探索东方智慧，传承千年玄学。为您提供专业的风水咨询、命理分析及开光法器，助您趋吉避凶，事业有成。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-[0.2em] text-foreground">快速链接</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["关于我们", "服务项目", "大师团队", "客户评价"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-[0.2em] text-foreground">联系我们</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>咨询热线：400-888-8888</li>
              <li>微信公众号：xuanjingge</li>
              <li>营业时间：9:00-21:00</li>
              <li>地址：深圳市南山区</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 泫星阁 Mystic Pavilion. 传承东方智慧，启迪人生之道。</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              隐私政策
            </a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-foreground">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
