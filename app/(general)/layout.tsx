import { Navbar } from "@/components";


export default function GeneralLayout({children}: {children: React.ReactNode;}) {
  return (
   <>
     <main>
     <Navbar></Navbar>
      {children}
    </main>
   </>
  );
}