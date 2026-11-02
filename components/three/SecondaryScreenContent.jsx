"use client";

import { GitBranch, GitCommit, GitPullRequest, Activity } from "lucide-react";

export default function SecondaryScreenContent() {
  return (
    <div className="w-[260px] rounded-xl bg-[#0D0D14]/95 border border-white/10 overflow-hidden font-mono text-[10px] shadow-[0_15px_35px_rgba(0,0,0,0.7)] select-none">
      {/* Header */}
      <div className="px-3 py-2 bg-black/70 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-accent font-semibold">
          <GitBranch size={11} />
          <span>GITHUB TELEMETRY</span>
        </div>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-text-muted">
          main
        </span>
      </div>

      <div className="p-3 space-y-2.5 bg-[#090910]">
        {/* Repo Status */}
        <div className="flex items-center justify-between text-text-secondary">
          <span className="text-text-muted">Repository:</span>
          <span className="text-white font-medium">maneet-portfolio</span>
        </div>

        {/* Commit Heatmap Grid */}
        <div>
          <span className="text-[9px] text-text-muted block mb-1">
            Weekly Activity Matrix
          </span>
          <div className="grid grid-cols-7 gap-1">
            {[3, 5, 2, 8, 4, 9, 6, 2, 7, 5, 10, 4, 8, 6].map((commits, idx) => (
              <div
                key={idx}
                className="h-3 rounded-sm"
                style={{
                  backgroundColor:
                    commits > 7
                      ? "#C6FF3F"
                      : commits > 4
                      ? "rgba(198, 255, 63, 0.6)"
                      : commits > 2
                      ? "rgba(198, 255, 63, 0.3)"
                      : "rgba(255, 255, 255, 0.08)",
                }}
                title={`${commits} commits`}
              />
            ))}
          </div>
        </div>

        {/* Latest Commit Message */}
        <div className="p-2 rounded-lg bg-black/50 border border-white/5">
          <div className="flex items-center gap-1 text-[#4ADE80] text-[9px] mb-0.5">
            <GitCommit size={10} />
            <span>feat: interactive 3D workstation</span>
          </div>
          <p className="text-[8px] text-text-muted truncate">
            commit d4eb947 &bull; verified build passed
          </p>
        </div>

        {/* Deployment Status */}
        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[9px]">
          <span className="text-text-muted">Deployment:</span>
          <span className="text-accent flex items-center gap-1">
            <Activity size={10} />
            <span>Vercel Edge &bull; Live</span>
          </span>
        </div>
      </div>
    </div>
  );
}
