import { ArrowRight, CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

function VerifyEmail() {
  return (
    <div className="min-h-screen flex col-end-1 justify-center bg-[#f8fafc] px-4 py-12 ">
      <div className="max-w-md w-full">
        <div className="rounded-[2.5rem] shadow-lg border border-slate-100 p-10 text-center relative overflow-hidden ">
          {/* Conditional Rendering */}

          <div className="flex flex-col items-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-indigo-100"></div>
              <div className="relative w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 shadow-inner ">
                <Loader2 size={40} strokeWidth={1.5} />
              </div>
            </div>

            <h2 className="text-2xl font-black text-slate-900 tracking-tight bm-2 uppercase">
              Verifying
            </h2>
            <p className="text-slate-500 font-medium italic leading-relaxed">
              Syncing with the central node to <br /> finalize your secure
              access.
            </p>
          </div>

          {/* Conditional Close */}

          {/* Conditional Rendering */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mb-8 text-emerald-600 shadow-inner ring-4 ring-emerald-50/50 ">
              <CheckCircle2 size={40} strokeWidth={1.5} />
              <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2 uppercase ">
                Active
              </h2>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed ">
                Identify confirm. Access granted. <br />
                Forwarding to login terminal......
              </p>
              <div className="w-full bg-slate-50 rounded-2xl p-4 flex items-center justify-center gap-3 border border-slate-100  ">
                <div className="w-2 h-2 bg-emerald-500 rounded-full "></div>
                <div className=" text-[10px] font-black text-slate-400 tracking-[0.2rem] uppercase ">
                  Redirecting to Vualt
                </div>
              </div>
            </div>
          </div>

          {/* Stat Erro / Invalid Token Conditional Rendering */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center mb-8 text-rose-600 shadow-inner ">
              <XCircle size={40} strokeWidth={1.5} />
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2 uppercase ">
                Access Denied
              </h2>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed italic ">
                This verification token is invalid <br />
                or has already expired.
              </p>

              {/* I will update it */}

              <Link to="/">Return to Login</Link>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
