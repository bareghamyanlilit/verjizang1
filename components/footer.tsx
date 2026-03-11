import Link from "next/link";

export function Footer() {
  return (
    <footer className="FontArmDecorativeU bottom-0 py-10 text-center text-base bg-[#1E1E1E8C]   text-[#fcfbfb]">
      <div className="mt-2">
        Պատրաստվել է
        <div className="flex flex-col text-center">
          <Link href="https://www.instagram.com/webinvite.am?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            Web Invite
          </Link>
          &
          <Link href="https://www.instagram.com/hraviratomserby_saten?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            hraviratomserby_saten
          </Link>
        </div>
        կողմից
      </div>
    </footer>
  );
}
