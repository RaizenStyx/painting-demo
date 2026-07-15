import React from "react";

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center space-y-8">
        <p className="uppercase tracking-[0.35em] text-sm text-slate-400">Terms</p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Coming Soon
        </h1>
        <p className="text-slate-300 text-lg md:text-xl leading-8">
          We are working on our terms page and will share more details soon.
          Thank you for your patience.
        </p>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <p className="text-slate-400">
            In the meantime, if you have questions about data handling or privacy
            practices, please contact our support team.
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
