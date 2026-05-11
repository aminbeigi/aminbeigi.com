import pgpKey from '../../assets/pgp_public_key.txt?raw';

function PgpPage() {
  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <p className="text-text-grey text-sm">
        want to send me a super-duper secret encrypted message?{' '}
      </p>
      <p className="text-text-grey text-sm">
        use my PGP key and send me an email.
      </p>
      <pre className="bg-zinc-900 text-primary-white font-mono text-xs leading-relaxed p-4 rounded-lg whitespace-pre-wrap border border-zinc-700 w-fit">
        {pgpKey}
      </pre>
    </div>
  );
}

export default PgpPage;
