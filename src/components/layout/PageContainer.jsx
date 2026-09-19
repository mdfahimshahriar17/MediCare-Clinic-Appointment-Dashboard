export default function PageContainer( {children}){
    return(
        <main className="mx-auto max-w-[1200px] px-6 pt-6">
            {children}
        </main>
    );
}
