import { currentUser } from "@clerk/nextjs/server";
import FunilTrackMain from "./pageOriginal";

export default async function FunilTrackPage() {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-red-500">
        Acesso negado. Faça login para usar esta automação.
      </div>
    );
  }

  return <FunilTrackMain />;
}
