import pgpKey from '../../assets/pgp_public_key.txt?raw';

function PgpPage() {
  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <pre className="bg-zinc-900 text-primary-white font-mono text-[10px] sm:text-xs leading-relaxed p-3 sm:p-4 rounded-lg whitespace-pre-wrap break-all border border-zinc-700 w-fit max-w-full">
        {pgpKey}
      </pre>
    </div>
  );
}

export default PgpPage;
