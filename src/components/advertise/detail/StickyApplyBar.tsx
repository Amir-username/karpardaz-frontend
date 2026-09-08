"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/ui/Button";
import Icon from "@/ui/Icon";
import { BASE_LINK } from "@/fetch/config";

type StickyApplyBarProps = {
  title: string;
  /** Company name (desktop only) */
  subtitle?: string;
  salary?: string;
  city?: string;
  adID: number;
  token?: string;
  role?: string;
  isRequested?: boolean;
};

/**
 * Floating glass bar fixed to the bottom of the viewport.
 * Appears only after the in-page apply section has been scrolled past,
 * so the CTA is always reachable on long job pages.
 */
export default function StickyApplyBar({
  title,
  subtitle,
  salary,
  city,
  adID,
  token,
  role,
  isRequested = false,
}: StickyApplyBarProps) {
  const [visible, setVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const sentRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    // Employers never apply — no bar at all
    if (role === "employer") return;

    const target = document.getElementById("apply-section");
    if (!target) return;

    // Show only when the apply section left the viewport through the top
    // (rect.bottom < 0). A rAF-throttled scroll check is used instead of
    // IntersectionObserver because instant jumps (Home/End keys, anchors)
    // can cross in and out without ever changing the intersection status.
    let ticking = false;
    const check = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(target.getBoundingClientRect().bottom < 0);
        ticking = false;
      });
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [role]);

  // Same behavior as the in-page SendResumeButton: fire the request, then
  // navigate back to /jobs (kept in parity with the existing flow)
  const handleApply = () => {
    if (role !== "jobseeker" || sentRef.current) return;
    sentRef.current = true;
    setIsSending(true);
    fetch(BASE_LINK + `ad-request/?advertise_id=${adID}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .catch((error) => console.log(error))
      .finally(() => router.push("/jobs"));
  };

  if (role === "employer") return null;

  // Match the in-flow logic: "already sent" chip only for logged-in jobseekers
  const showSentChip = isRequested && role === "jobseeker";

  return (
    <>
      {/* Spacer so the bar never covers the footer content */}
      {visible && <div aria-hidden="true" className="h-24" />}

      <div
        aria-hidden={!visible}
        className={`fixed inset-x-0 bottom-0 z-50 px-3 sm:px-4 pb-3 sm:pb-4 transition-all duration-300 ease-out motion-reduce:transition-none ${
          visible
            ? "translate-y-0 opacity-100 visible"
            : "translate-y-[130%] opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="max-w-4xl mx-auto flex items-center gap-3 rounded-2xl bg-card/95 backdrop-blur ring-1 ring-border shadow-lift p-3 ps-4">
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <span className="text-sm font-bold text-fg truncate">{title}</span>
            <span className="flex items-center gap-x-3 gap-y-0.5 flex-wrap text-xs text-fg-muted">
              {salary && (
                <span className="flex items-center gap-1">
                  <Icon name="payments" size={14} />
                  {salary}
                </span>
              )}
              {city && (
                <span className="flex items-center gap-1">
                  <Icon name="location_on" size={14} />
                  {city}
                </span>
              )}
              {subtitle && (
                <span className="hidden md:flex items-center gap-1 min-w-0">
                  <Icon name="apartment" size={14} />
                  <span className="truncate">{subtitle}</span>
                </span>
              )}
            </span>
          </div>

          {showSentChip ? (
            <span className="flex shrink-0 items-center gap-1.5 rounded-xl h-10 px-3 bg-success-soft text-success-fg text-sm font-medium">
              <Icon name="check_circle" size={18} fill />
              ارسال شده
            </span>
          ) : (
            <Button
              size="md"
              fullWidth={false}
              onClick={handleApply}
              loading={isSending}
              className="shrink-0"
            >
              ارسال رزومه
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
