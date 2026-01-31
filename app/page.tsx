import { LINKS } from "@/constants/links";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center m-auto gap-10">
      <div className="flex flex-col items-center">
        <h1 className="typo-display">Projeto Placeholder</h1>
        <p className="typo-lg-sbttl">
          Simples e direto com JSON Placeholder API
        </p>
      </div>
      <div className="flex items-center gap-5">
        <Link href={LINKS.pages.posts} className="link-button typo-md-btn">
          Posts
        </Link>
        <Link href={LINKS.pages.users} className="link-button typo-md-btn">
          Usuários
        </Link>
        <Link href={LINKS.pages.albums} className="link-button typo-md-btn">
          Álbuns
        </Link>
      </div>
    </section>
  );
}
