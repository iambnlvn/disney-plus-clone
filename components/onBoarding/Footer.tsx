import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-1/2">
      <div className="w-full flex flex-col md:grid md:grid-cols-4 p-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-neutral-300 font-bold text-center">
            Company
          </h1>
          <div className="flex gap-8 justify-center text-md text-[#656b7f] font-medium">
            <Link href={""} className="hover:text-white">
              Supported Devices
            </Link>
            <Link href={""} className="hover:text-white">
              Internet based ads
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-neutral-300 font-bold text-center">
            View website in
          </h1>
          <div className="flex gap-8 justify-center text-md text-[#656b7f] font-medium">
            <h1 className="hover:text-white cursor-pointer">English</h1>
            <h1 className="hover:text-white cursor-pointer">French</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-neutral-300 font-bold text-center">
            Need Help?
          </h1>
          <div className="flex gap-8 justify-center text-md text-[#656b7f] font-medium">
            <h1 className="hover:text-white cursor-pointer">Help</h1>
            <h1 className="hover:text-white cursor-pointer">Feedback</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-neutral-300 font-bold text-center">
            Connect with Us
          </h1>
          <div className="flex gap-8 justify-center text-md text-[#656b7f]">
            <Link href={"https://www.facebook.com/DisneyPlusMENA/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hover:text-white"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link href={"https://twitter.com/disneyplus_mena"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hover:text-white"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </Link>
            <Link scroll href={"https://www.instagram.com/disneyplusmena/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hover:text-white"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
