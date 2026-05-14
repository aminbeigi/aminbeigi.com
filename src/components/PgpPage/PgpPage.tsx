import pgpKey from '../../assets/pgp_public_key.txt?raw';

function PgpPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-8 pb-8">
      <p className="text-sm sm:text-base leading-relaxed text-zinc-200">
        here is my PGP public key. for top-secret messages, use it to encrypt
        your note before sending it to me. it could be your cunning plan for
        world domination... or just your grocery list. up to you.
      </p>

      <pre className="mt-4 sm:mt-5 w-fit max-w-full mx-auto rounded-xl border border-zinc-800 bg-zinc-900 text-primary-white font-mono text-[10px] sm:text-xs leading-relaxed p-3 sm:p-4 whitespace-pre-wrap break-all overflow-x-auto">
        {pgpKey}
      </pre>
    </div>
  );
}

export default PgpPage;
