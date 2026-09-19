export default function StatCard({ label, value, icon }){
    return(
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
            <div className="mb-3 text-xl">
                {icon}
            </div>
            
            <p className="text-[13px] font-medium uppercase tracking-[0.04em] text-[#64748B]">
                {label}
            </p>
            
            <h2 className="mt-2 text-[28px] font-bold text-[#0F172A]">
                {value}
            </h2>
        </div>

    );
}