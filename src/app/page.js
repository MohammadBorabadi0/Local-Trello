'use client';

import KanbanBoard from "@/components/KanbanBoard";
import Layout from "@/components/Layout/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Home = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/auth/login');
  }

  return (
    <Layout>
      <KanbanBoard />
    </Layout>
  )
}

export default Home;