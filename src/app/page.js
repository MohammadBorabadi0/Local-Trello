'use client';

import KanbanBoard from "@/components/KanbanBoard";
import Layout from "@/components/Layout/Layout";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Home = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [router, status])

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <Layout>
      <KanbanBoard />
    </Layout>
  )
}

export default Home;