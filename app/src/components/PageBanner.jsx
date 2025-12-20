import bg from "../assets/backgrounds/bg.jpg";
import { Link, useLocation } from "react-router-dom";

export default function PageBanner({ title, banner = bg, breadcrumb }) {
  const location = useLocation();

  // AUTO-GENERATE breadcrumb if not provided
  const generateBreadcrumb = () => {
    const pathParts = location.pathname.split("/").filter(Boolean);

    const result = [
      { label: "Home", to: "/" },
      ...pathParts.map((part, index) => {
        const path = "/" + pathParts.slice(0, index + 1).join("/");

        return {
          label: formatLabel(part),
          to: index !== pathParts.length - 1 ? path : null, // clickable except last
        };
      }),
    ];

    return result;
  };

  // Convert slug → readable text
  const formatLabel = (text) => {
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize each word
  };

  const finalBreadcrumb = breadcrumb || generateBreadcrumb();

  return (
    <section className="relative w-full h-[300px] flex items-center justify-start text-white">
      <img
        src={banner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-4xl font-bold mb-2 text-white">{title}</h1>

        {/* Breadcrumb */}
        <div className="text-sm flex justify-start gap-2">
          {finalBreadcrumb.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {item.to ? (
                <Link to={item.to} className="text-muted">
                  {item.label}
                </Link>
              ) : (
                <span className="text-muted font-semibold">
                  {item.label}
                </span>
              )}
              {index < finalBreadcrumb.length - 1 && (
                <span className="text-white">{`>`}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
