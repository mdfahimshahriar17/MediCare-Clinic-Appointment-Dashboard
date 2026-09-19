export default function Card({ children }) {
    return(
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
            {children}
        </div>
    );
}