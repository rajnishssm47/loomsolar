
import { useLocation } from "react-router-dom";

export default function WhatsAppButton() {
  const { pathname } = useLocation();

  // Contact page already has its own WhatsApp button.
  if (pathname === "/contact") return null;

  const message =
    "Hello LOOM SOLAR, I want to enquire about solar solutions.";

  const whatsappLink = `https://wa.me/918744816548?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <style>{`
        .loom-whatsapp {
          position: fixed;
          right: 25px;
          bottom: 25px;
          z-index: 99999;
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 50px;
          background: #25D366;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 5px 22px rgba(37, 211, 102, .35);
          transition: width .3s ease, transform .3s ease,
            background .3s ease;
          animation: loomWhatsAppPulse 2.2s infinite;
        }

        .loom-whatsapp svg {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
        }

        .loom-whatsapp span {
          display: none;
          white-space: nowrap;
          font-size: 13px;
          font-weight: 750;
        }

        .loom-whatsapp:hover {
          width: 165px;
          background: #128C7E;
          transform: translateY(-3px);
        }

        .loom-whatsapp:hover span {
          display: inline;
        }

        @keyframes loomWhatsAppPulse {
          0%, 100% {
            box-shadow: 0 5px 22px rgba(37, 211, 102, .35);
          }
          50% {
            box-shadow: 0 5px 30px rgba(37, 211, 102, .65);
          }
        }

        @media (max-width: 600px) {
          .loom-whatsapp {
            right: 16px;
            bottom: 18px;
            width: 58px;
            height: 58px;
          }

          .loom-whatsapp:hover {
            width: 58px;
          }

          .loom-whatsapp:hover span {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loom-whatsapp {
            animation: none;
          }
        }
      `}</style>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="loom-whatsapp"
        aria-label="Chat with LOOM SOLAR on WhatsApp"
        title="Chat with LOOM SOLAR"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M16 3.2C8.9 3.2 3.2 8.8 3.2 15.8c0 2.3.6 4.5 1.8 6.4L3.2 28.8l6.8-1.8c1.8 1 3.9 1.5 6 1.5h.1c7.1 0 12.8-5.7 12.8-12.7 0-3.4-1.3-6.5-3.7-8.9A12.7 12.7 0 0 0 16 3.2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12.2 10.2c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.5 1.5-1.5 3.6s1.5 4.2 1.7 4.5c.2.3 2.9 4.6 7.1 6.2 3.5 1.4 4.2 1.1 5 .9.8-.1 2.6-1.1 2.9-2.1.4-1 .4-1.9.2-2.1-.1-.2-.4-.3-.8-.5l-2.7-1.3c-.4-.2-.7-.2-1 .2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.3-1.2-2.2-2.7-2.5-3.1-.3-.4 0-.7.2-.9.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7l-1.2-2.7Z"
            fill="currentColor"
          />
        </svg>

        <span>Chat with us</span>
      </a>
    </>
  );
}
