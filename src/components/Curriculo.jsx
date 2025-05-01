"use client";

export default function Curriculo() {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.umami !== "undefined") {
      window.umami.track("clique-download", {
        tipo: "pdf",
        titulo: "Curriculo",
      });
    }
  };

  return (
    <a
      href="/cv.pdf"
      target="_blank"
      download
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center text-center px-4 py-2 bg-[#C27AFF] text-white rounded-lg hover:bg-blue-700 transition"
      onClick={handleClick}
    >
      Baixar <br /> CV
    </a>
  );
}
