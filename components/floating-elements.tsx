"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-[#144378]/10 rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "6s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-[#47483C]/10 rounded-lg rotate-45 animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-[#144378]/20 rounded-full animate-ping"
        style={{ animationDelay: "1s", animationDuration: "5s" }}
      ></div>
      <div
        className="absolute bottom-20 right-40 w-24 h-24 bg-[#47483C]/10 rounded-lg animate-bounce"
        style={{ animationDelay: "3s", animationDuration: "7s" }}
      ></div>

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#144378]/5 to-[#47483C]/5 rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-[#47483C]/5 to-[#144378]/5 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "4s", animationDuration: "10s" }}
      ></div>
    </div>
  )
}
