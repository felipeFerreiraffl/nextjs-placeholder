import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col justify-center items-center h-dvh gap-10">
      <div className="flex flex-col items-center">
        <h1 className="typo-display">Projeto Placeholder</h1>
        <p className="typo-lg-sbttl">
          Simples e direto com JSON Placeholder API
        </p>
      </div>
      <div className="flex items-center gap-5">
        <Link href={"/posts"} className="link-button typo-md-btn">
          Posts
        </Link>
        <Link href={"/users"} className="link-button typo-md-btn">
          Usuários
        </Link>
        <Link href={"/albums"} className="link-button typo-md-btn">
          Álbuns
        </Link>
      </div>
    </section>
  );
}
