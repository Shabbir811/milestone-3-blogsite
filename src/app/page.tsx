

import Posts from "@/components/Posts";



export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col gap-10">
      <Posts title="Most Popular blogs"/>
      <Posts title="Most Recent blogs"/>
    </main>
    
  );
}
