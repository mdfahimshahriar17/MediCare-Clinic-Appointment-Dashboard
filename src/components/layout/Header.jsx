import CrashTest from "../error/CrashTest";

export default function Header(){
  return(
    <header className="h-[72px] border-b border-[#E2E8F0] bg-white">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F766E] text-white ">
            M
          </div>

          <div className="flex items-center gap-6">
            <h1 className="whitespace-nowrap text-xl font-bold text-[#0F172A]">
              MediCare Clinic
            </h1>

            <p className="hidden text-sm text-[#64748B] sm:block">
              Front Desk Dashboard
            </p>
          </div>
        </div>

        <CrashTest />
      </div>
    </header>
  );
}