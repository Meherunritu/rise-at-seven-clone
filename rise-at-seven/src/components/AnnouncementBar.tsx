'use client'

import Link from 'next/link'

export default function AnnouncementBar() {
  return (
    <div
      style={{ background: '#3d1515' }}
      className="w-full py-2.5 px-4 overflow-hidden border-b border-[#5f2a2a] z-50 relative"
    >
      <div className="flex items-center justify-center gap-6 md:gap-12">
        {/* Announcement text */}
        <div className="text-flip-wrapper overflow-hidden h-[18px]">
          <Link href="https://riseatseven.com/category-leaderboard/" target="_blank">
            <div className="text-flip">
              <span className="text-white text-[10px] md:text-[11px] font-semibold uppercase tracking-[2.5px] whitespace-nowrap block leading-[18px]">
                🚨 The Category Leaderboard — Live Now 🚨
              </span>
              <span className="text-white text-[10px] md:text-[11px] font-semibold uppercase tracking-[2.5px] whitespace-nowrap block leading-[18px]">
                🚨 The Category Leaderboard — Live Now 🚨
              </span>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <span className="hidden md:block w-px h-3 bg-white/20" />

        {/* CTA */}
        <div className="text-flip-wrapper overflow-hidden h-[18px]">
          <Link href="https://riseatseven.com/connect-with-us/" target="_blank">
            <div className="text-flip">
              <span className="text-white/80 text-[10px] md:text-[11px] font-semibold uppercase tracking-[2.5px] whitespace-nowrap block leading-[18px]">
                Get In Touch →
              </span>
              <span className="text-white/80 text-[10px] md:text-[11px] font-semibold uppercase tracking-[2.5px] whitespace-nowrap block leading-[18px]">
                Get In Touch →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
