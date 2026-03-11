import Link from "next/link";

export function Footer() {
  return (
    <footer className="FontArmDecorativeU bottom-0 py-10 text-center text-base bg-[#EFEFEF]   text-[#000000]">
      <div className="mt-2">
        Պատրաստվել է
        <div className="flex flex-col text-center">
          <Link href="https://www.instagram.com/webinvite.am?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            Web Invite - ի
          </Link>
          {/* &
          <Link href="https://www.instagram.com/hraviratomserby_saten?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            hraviratomserby_saten
          </Link> */}
        </div>
        կողմից
      </div>
    </footer>
  );
}
